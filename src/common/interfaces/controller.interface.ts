import { Types } from 'mongoose';

import { PaginationDto } from '../dtos/pagination.dto';

export interface IController {
  create<T>(dto: any): Promise<T>;
  findAll<T>(pagination: PaginationDto): Promise<T>;
  findOne<T>(filter: object): Promise<T>;
  findOneById<T>(filter: object): Promise<T>;
  updateOne<T>(filter: object, dto: any): Promise<T>;
  removeById<T>(_id: Types.ObjectId): Promise<T>;
}
