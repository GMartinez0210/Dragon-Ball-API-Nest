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

import { Planet } from './interfaces/planet.interface';
import { PlanetService } from './planet.service';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { UpdatePlanetDto } from './dto/update-planet.dto';

import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('planet')
export class PlanetController {
  constructor(
    private readonly planetService: PlanetService,
    private readonly controllerAdapter: ControllerAdapter,
  ) {
    this.controllerAdapter = new ControllerAdapter(this.planetService);
  }

  @Post()
  async create(@Body() createPlanetDto: CreatePlanetDto) {
    const planet = await this.controllerAdapter.create<Planet>(createPlanetDto);
    return planet;
  }

  @Get()
  async findAll(@Query() pagination: PaginationDto) {
    const planets = await this.controllerAdapter.findAll<Planet>(pagination);
    return planets;
  }

  @Get('search')
  async findOne(
    @Query('id', MongoIdPipe) _id: Types.ObjectId,
    @Query('name') name: string,
  ) {
    if (!!_id) {
      const filter = { _id };
      const planet = await this.controllerAdapter.findOne<Planet>(filter);
      return planet;
    }

    if (!!name) {
      const filter = { name };
      const planet = await this.controllerAdapter.findOne<Planet>(filter);
      return planet;
    }

    throw new BadRequestException("Didn't send either the id or the name");
  }

  @Get(':id')
  async findOneById(@Param('id', MongoIdPipe) _id: Types.ObjectId) {
    const filter = { _id };
    const planet = await this.controllerAdapter.findOne<Planet>(filter);
    return planet;
  }

  @Patch(':id')
  async update(
    @Param('id', MongoIdPipe) _id: Types.ObjectId,
    @Body() updatePlanetDto: UpdatePlanetDto,
  ) {
    const filter = { _id };
    const planet = await this.controllerAdapter.updateOne<Planet>(
      filter,
      updatePlanetDto,
    );
    return planet;
  }

  @Delete(':id')
  async remove(@Param('id', MongoIdPipe) _id: Types.ObjectId) {
    const planet = await this.controllerAdapter.removeById<Planet>(_id);
    return planet;
  }
}
