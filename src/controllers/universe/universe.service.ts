import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, Types } from 'mongoose';

import { Universe } from './entities/universe.entity';
import { CreateUniverseDto } from './dto/create-universe.dto';
import { UpdateUniverseDto } from './dto/update-universe.dto';

import { IController } from 'src/common/interfaces/controller.interface';

import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class UniverseService implements IController {
  constructor(
    @InjectModel(Universe.name)
    private readonly universeModel: Model<Universe>,
  ) {}

  async create<T>(createUniverseDto: CreateUniverseDto): Promise<T> {
    const universe = await this.universeModel.create(createUniverseDto);
    const result = universe as T;
    return result;
  }

  async findAll<T>(pagination: PaginationDto): Promise<T> {
    const { limit = 10, offset = 0 } = pagination;
    const universes = await this.universeModel.find().skip(offset).limit(limit);
    const result = universes as T;
    return result;
  }

  async findOne<T>(filter: object): Promise<T> {
    const universe = await this.universeModel.findOne(filter);
    const result = universe as T;
    return result;
  }

  async findOneById<T>(_id: Types.ObjectId): Promise<T> {
    const universe = await this.universeModel.findById(_id);
    const result = universe as T;
    return result;
  }

  async updateOne<T>(
    filter: object,
    updateUniverseDto: UpdateUniverseDto,
  ): Promise<T> {
    const update = { $set: updateUniverseDto };
    await this.universeModel.updateOne(filter, update);
    const universe = this.findOne(filter);
    const result = universe as T;
    return result;
  }

  async removeById<T>(_id: Types.ObjectId): Promise<T> {
    const universe = await this.universeModel.findByIdAndDelete(_id);
    const result = universe as T;
    return result;
  }
}
