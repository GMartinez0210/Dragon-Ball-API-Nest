import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, Types } from 'mongoose';

import { Saga } from './entities/saga.entity';
import { CreateSagaDto } from './dto/create-saga.dto';
import { UpdateSagaDto } from './dto/update-saga.dto';

import { IController } from 'src/common/interfaces/controller.interface';

import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class SagaService implements IController {
  constructor(
    @InjectModel(Saga.name)
    private readonly sagaModel: Model<Saga>,
  ) {}

  async create<T>(createSagaDto: CreateSagaDto): Promise<T> {
    const saga = await this.sagaModel.create(createSagaDto);
    const result = saga as T;
    return result;
  }

  async findAll<T>(pagination: PaginationDto): Promise<T> {
    const { limit = 10, offset = 0 } = pagination;
    const sagas = await this.sagaModel.find().skip(offset).limit(limit);

    const result = sagas as T;
    return result;
  }

  async findOne<T>(filter: object): Promise<T> {
    const saga = await this.sagaModel.findOne(filter);
    const result = saga as T;
    return result;
  }

  async findOneById<T>(_id: Types.ObjectId): Promise<T> {
    const saga = await this.sagaModel.findById(_id);
    const result = saga as T;
    return result;
  }

  async updateOne<T>(filter: object, updateSagaDto: UpdateSagaDto): Promise<T> {
    const update = { $set: updateSagaDto };
    await this.sagaModel.updateOne(filter, update);
    const saga = await this.findOne(filter);
    const result = saga as T;
    return result;
  }

  async removeById<T>(_id: Types.ObjectId): Promise<T> {
    const saga = await this.findOneById(_id);

    if (!saga) {
      throw new BadRequestException(`The planet with ID: ${_id} doesn't exist`);
    }

    await this.sagaModel.findByIdAndDelete(_id);

    const result = saga as T;
    return result;
  }
}
