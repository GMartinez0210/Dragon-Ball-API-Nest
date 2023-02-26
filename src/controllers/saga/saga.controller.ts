import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  BadRequestException,
} from '@nestjs/common';

import { Types } from 'mongoose';
import { MongoIdPipe } from 'src/common/pipes/mongo-id/mongo-id.pipe';
import { ControllerAdapter } from 'src/common/adapters/controller/controller.adapter';

import { SagaService } from './saga.service';
import { CreateSagaDto } from './dto/create-saga.dto';
import { UpdateSagaDto } from './dto/update-saga.dto';
import { Saga } from './interfaces/saga.interface';

import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('saga')
export class SagaController {
  constructor(
    private readonly sagaService: SagaService,
    private readonly controllerAdapter: ControllerAdapter,
  ) {
    this.controllerAdapter = new ControllerAdapter(this.sagaService);
  }

  @Post()
  async create(@Body() createSagaDto: CreateSagaDto) {
    const saga = await this.controllerAdapter.create<Saga>(createSagaDto);
    return saga;
  }

  @Get()
  async findAll(@Query() pagination: PaginationDto) {
    const sagas = await this.controllerAdapter.findAll<Saga>(pagination);
    return sagas;
  }

  @Get('search')
  async findOne(
    @Query('id', MongoIdPipe) _id: Types.ObjectId,
    @Query('name') name: string,
  ) {
    if (!!_id) {
      const filter = { _id };
      const saga = await this.controllerAdapter.findOne<Saga>(filter);
      return saga;
    }

    if (!!name) {
      const filter = { name };
      const saga = await this.controllerAdapter.findOne<Saga>(filter);
      return saga;
    }

    throw new BadRequestException("Didn't send either the id or the name");
  }

  @Get(':id')
  async findOneById(@Param('id') _id: Types.ObjectId) {
    const filter = { _id };
    const saga = this.controllerAdapter.findOneById<Saga>(filter);
    return saga;
  }

  @Patch(':id')
  async update(
    @Param('id') _id: Types.ObjectId,
    @Body() updateSagaDto: UpdateSagaDto,
  ) {
    const filter = { _id };
    const saga = await this.controllerAdapter.updateOne<Saga>(
      filter,
      updateSagaDto,
    );
    return saga;
  }

  @Delete(':id')
  async remove(@Param('id') _id: Types.ObjectId) {
    const saga = await this.controllerAdapter.removeById<Saga>(_id);
    return saga;
  }
}
