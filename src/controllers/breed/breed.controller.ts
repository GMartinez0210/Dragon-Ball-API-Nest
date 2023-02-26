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

import { Breed } from './interfaces/breed.interface';
import { BreedService } from './breed.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';

import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('breed')
export class BreedController {
  constructor(
    private readonly breedService: BreedService,
    private readonly controllerAdapter: ControllerAdapter,
  ) {
    this.controllerAdapter = new ControllerAdapter(this.breedService);
  }

  @Post()
  async create(@Body() createBreedDto: CreateBreedDto) {
    const breed = await this.controllerAdapter.create<Breed>(createBreedDto);
    return breed;
  }

  @Get()
  async findAll(@Query() pagination: PaginationDto) {
    const breeds = await this.controllerAdapter.findAll<Breed>(pagination);
    return breeds;
  }

  @Get('search')
  async findOne(
    @Query('id', MongoIdPipe) _id: Types.ObjectId,
    @Query('name') name: string,
  ) {
    if (!!_id) {
      const filter = { _id };
      const breed = await this.controllerAdapter.findOne<Breed>(filter);
      return breed;
    }

    if (!!name) {
      const filter = { name };
      const breed = await this.controllerAdapter.findOne<Breed>(filter);
      return breed;
    }

    throw new BadRequestException("Didn't send either the id or the name");
  }

  @Get(':id')
  async findOneById(@Param('id', MongoIdPipe) _id: Types.ObjectId) {
    const filter = { _id };
    const breed = await this.controllerAdapter.findOne<Breed>(filter);
    return breed;
  }

  @Patch(':id')
  async update(
    @Param('id', MongoIdPipe) _id: Types.ObjectId,
    @Body() updateBreedDto: UpdateBreedDto,
  ) {
    const filter = { _id };
    const breed = await this.controllerAdapter.updateOne<Breed>(
      filter,
      updateBreedDto,
    );
    return breed;
  }

  @Delete(':id')
  async remove(@Param('id', MongoIdPipe) _id: Types.ObjectId) {
    const breed = await this.controllerAdapter.removeById<Breed>(_id);
    return breed;
  }
}
