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

import { UniverseService } from './universe.service';
import { CreateUniverseDto } from './dto/create-universe.dto';
import { UpdateUniverseDto } from './dto/update-universe.dto';
import { Universe } from './interfaces/universe.interface';

import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('universe')
export class UniverseController {
  constructor(
    private readonly universeService: UniverseService,
    private readonly controllerAdapter: ControllerAdapter,
  ) {
    this.controllerAdapter = new ControllerAdapter(this.universeService);
  }

  @Post()
  async create(@Body() createUniverseDto: CreateUniverseDto) {
    const universe = await this.controllerAdapter.create<Universe>(
      createUniverseDto,
    );
    return universe;
  }

  @Get()
  async findAll(@Query() pagination: PaginationDto) {
    const universes = await this.controllerAdapter.findAll<Universe>(
      pagination,
    );
    return universes;
  }

  @Get('search')
  async findOne(
    @Query('id', MongoIdPipe) _id: Types.ObjectId,
    @Query('name') name: string,
  ) {
    if (!!_id) {
      const filter = { _id };
      const universe = await this.controllerAdapter.findOne<Universe>(filter);
      return universe;
    }

    if (!!name) {
      const filter = { name };
      const universe = await this.controllerAdapter.findOne<Universe>(filter);
      return universe;
    }

    throw new BadRequestException("Didn't send either the id or the name");
  }

  @Get(':id')
  async findOneById(@Param('id', MongoIdPipe) _id: Types.ObjectId) {
    const universe = await this.controllerAdapter.findOneById<Universe>(_id);
    return universe;
  }

  @Patch(':id')
  async update(
    @Param('id', MongoIdPipe) _id: Types.ObjectId,
    @Body() updateUniverseDto: UpdateUniverseDto,
  ) {
    const filter = { _id };
    const universe = await this.controllerAdapter.updateOne<Universe>(
      filter,
      updateUniverseDto,
    );
    return universe;
  }

  @Delete(':id')
  async remove(@Param('id', MongoIdPipe) _id: Types.ObjectId) {
    const universe = await this.controllerAdapter.removeById<Universe>(_id);
    return universe;
  }
}
