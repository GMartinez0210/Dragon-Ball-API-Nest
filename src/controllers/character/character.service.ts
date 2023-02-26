import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, Types } from 'mongoose';

import { Character } from './entities/character.entity';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

import { IController } from 'src/common/interfaces/controller.interface';

import { MongoService } from 'src/utils/mongo/mongo.service';
import { SagaService } from '../saga/saga.service';
import { BreedService } from '../breed/breed.service';
import { PlanetService } from '../planet/planet.service';
import { UniverseService } from '../universe/universe.service';

import { Saga } from '../saga/entities/saga.entity';
import { Breed } from '../breed/entities/breed.entity';
import { Planet } from '../planet/entities/planet.entity';
import { Universe } from '../universe/entities/universe.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class CharacterService implements IController {
  constructor(
    @InjectModel(Character.name)
    private readonly characterModel: Model<Character>,
    private readonly breedService: BreedService,
    private readonly planetService: PlanetService,
    private readonly sagaService: SagaService,
    private readonly universeService: UniverseService,
  ) {}

  async create<T>(createCharacterDto: CreateCharacterDto): Promise<T> {
    try {
      const { breed, planet, saga, universe } = createCharacterDto;

      const breedMongoService = new MongoService(this.breedService);
      const breedCreated = await breedMongoService.findOrCreate(breed);

      const planetMongoService = new MongoService(this.planetService);
      const planetCreated = await planetMongoService.findOrCreate(planet);

      const sagaMongoService = new MongoService(this.sagaService);
      const sagaCreated = await sagaMongoService.findOrCreate(saga);

      const universeMongoService = new MongoService(this.universeService);
      const universeCreated = await universeMongoService.findOrCreate(universe);

      createCharacterDto.breed = breedCreated as Breed;
      createCharacterDto.planet = planetCreated as Planet;
      createCharacterDto.saga = sagaCreated as Saga;
      createCharacterDto.universe = universeCreated as Universe;

      const character = await this.characterModel.create(createCharacterDto);
      const result = character as T;
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll<T>(pagination: PaginationDto): Promise<T> {
    const { limit = 10, offset = 0 } = pagination;

    const characters = await this.characterModel
      .find()
      .skip(offset)
      .limit(limit)
      .populate('breed')
      .populate('planet')
      .populate('saga')
      .populate('universe');
    const result = characters as T;
    return result;
  }

  async findOne<T>(filter: object): Promise<T> {
    const character = await this.characterModel
      .findOne(filter)
      .populate('breed')
      .populate('planet')
      .populate('saga')
      .populate('universe');
    const result = character as T;
    return result;
  }

  async findOneById<T>(_id: Types.ObjectId): Promise<T> {
    const character = await this.characterModel
      .findById(_id)
      .populate('breed')
      .populate('planet')
      .populate('saga')
      .populate('universe');
    const result = character as T;
    return result;
  }

  async updateOne<T>(
    filter: object,
    updateCharacterDto: UpdateCharacterDto,
  ): Promise<T> {
    const update = { $set: updateCharacterDto };
    await this.characterModel.updateOne(filter, update);
    const character = await this.findOne(filter);
    const result = character as T;
    return result;
  }

  async removeById<T>(_id: Types.ObjectId): Promise<T> {
    const character = await this.characterModel.findByIdAndDelete(_id);

    if (!character) {
      throw new BadRequestException('Not exist the character');
    }

    const result = character as T;
    return result;
  }
}
