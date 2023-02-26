import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { ControllerProvider } from 'src/common/providers/controller-provider/controller.provider';

@Injectable()
export class ControllerAdapter {
  constructor(private readonly controllerProvider: ControllerProvider) {}

  async create<T>(dto: any): Promise<T> {
    const result = await this.controllerProvider.create<T>(dto);
    return result;
  }

  async findAll<T>(pagination: PaginationDto): Promise<T> {
    const result = await this.controllerProvider.findAll<T>(pagination);
    return result;
  }

  async findOne<T>(filter: object): Promise<T> {
    const result = await this.controllerProvider.findOne<T>(filter);
    return result;
  }

  async findOneById<T>(filter: object): Promise<T> {
    const result = await this.controllerProvider.findOneById<T>(filter);
    return result;
  }

  async updateOne<T>(filter: object, dto: any): Promise<T> {
    const result = await this.controllerProvider.updateOne<T>(filter, dto);
    return result;
  }

  async removeById<T>(_id: Types.ObjectId): Promise<T> {
    const result = await this.controllerProvider.removeById<T>(_id);
    return result;
  }
}
