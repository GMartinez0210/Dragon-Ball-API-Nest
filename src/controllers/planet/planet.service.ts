import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, Types } from 'mongoose';

import { Planet } from './entities/planet.entity';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { UpdatePlanetDto } from './dto/update-planet.dto';

import { IController } from 'src/common/interfaces/controller.interface';

import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class PlanetService implements IController {
  constructor(
    @InjectModel(Planet.name)
    private readonly planetModel: Model<Planet>,
  ) {}

  async create<T>(createPlanetDto: CreatePlanetDto): Promise<T> {
    const planet = await this.planetModel.create(createPlanetDto);
    const result = planet as T;
    return result;
  }

  async findAll<T>(pagination: PaginationDto): Promise<T> {
    const { limit = 10, offset = 0 } = pagination;
    const planets = await this.planetModel.find().skip(offset).limit(limit);
    const result = planets as T;
    return result;
  }

  async findOne<T>(filter: object): Promise<T> {
    const planet = await this.planetModel.findOne(filter);
    const result = planet as T;
    return result;
  }

  async findOneById<T>(_id: Types.ObjectId): Promise<T> {
    const planet = await this.planetModel.findById(_id);
    const result = planet as T;
    return result;
  }

  async updateOne<T>(
    filter: object,
    updatePlanetDto: UpdatePlanetDto,
  ): Promise<T> {
    const update = { $set: updatePlanetDto };
    await this.planetModel.updateOne(filter, update);
    const planet = await this.findOne(filter);
    const result = planet as T;
    return result;
  }

  async removeById<T>(_id: Types.ObjectId): Promise<T> {
    const planet = await this.planetModel.findByIdAndDelete(_id);
    const result = planet as T;
    return result;
  }
}
