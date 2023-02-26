import { Injectable } from '@nestjs/common';

import { Types } from 'mongoose';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

import { IController } from '../../interfaces/controller.interface';

@Injectable()
export class ControllerProvider implements IController {
  create<T>(dto: any): Promise<T> {
    return;
  }

  findAll<T>(pagination: PaginationDto): Promise<T> {
    return;
  }

  findOne<T>(filter: object): Promise<T> {
    return;
  }

  findOneById<T>(filter: object): Promise<T> {
    return;
  }

  updateOne<T>(filter: object, dto: any): Promise<T> {
    return;
  }

  removeById<T>(_id: Types.ObjectId): Promise<T> {
    return;
  }
}
