import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, Types } from 'mongoose';

import { Breed } from './entities/breed.entity';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';

import { IController } from 'src/common/interfaces/controller.interface';

import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class BreedService implements IController {
  constructor(
    @InjectModel(Breed.name)
    private readonly breedModel: Model<Breed>,
  ) {}

  async create<T>(createBreedDto: CreateBreedDto): Promise<T> {
    const breed = await this.breedModel.create(createBreedDto);
    const result = breed as T;
    return result;
  }

  async findAll<T>(pagination: PaginationDto): Promise<T> {
    const { limit = 10, offset = 0 } = pagination;
    const breeds = await this.breedModel.find().skip(offset).limit(limit);
    const result = breeds as T;
    return result;
  }

  async findOne<T>(filter: object): Promise<T> {
    const breed = await this.breedModel.findOne(filter);
    const result = breed as T;
    return result;
  }

  async findOneById<T>(_id: Types.ObjectId): Promise<T> {
    const breed = await this.breedModel.findById(_id);
    const result = breed as T;
    return result;
  }

  async updateOne<T>(
    filter: object,
    updateBreedDto: UpdateBreedDto,
  ): Promise<T> {
    const update = { $set: updateBreedDto };
    await this.breedModel.updateOne(filter, update);
    const breed = await this.findOne(filter);
    const result = breed as T;
    return result;
  }

  async removeById<T>(_id: Types.ObjectId): Promise<T> {
    const breed = await this.breedModel.findByIdAndDelete(_id);
    const result = breed as T;
    return result;
  }
}
