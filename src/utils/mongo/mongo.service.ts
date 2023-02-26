import { Injectable } from '@nestjs/common';

import { ControllerProvider } from 'src/common/providers/controller-provider/controller.provider';

@Injectable()
export class MongoService {
  constructor(private readonly controllerProvider: ControllerProvider) {}

  async findOrCreate<T>(schema) {
    const find = await this.controllerProvider.findOne<T>(schema);

    if (!!find) {
      return find;
    }

    const create = await this.controllerProvider.create<T>(schema);
    return create;
  }
}
