import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
  BadRequestException,
  Param,
} from '@nestjs/common';

import { Types } from 'mongoose';
import { MongoIdPipe } from 'src/common/pipes/mongo-id/mongo-id.pipe';
import { ControllerAdapter } from 'src/common/adapters/controller/controller.adapter';

import { Character } from './interfaces/character.interface';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('character')
export class CharacterController {
  constructor(
    private readonly characterService: CharacterService,
    private readonly controllerAdapter: ControllerAdapter,
  ) {
    this.controllerAdapter = new ControllerAdapter(this.characterService);
  }

  @Post()
  async create(@Body() createCharacterDto: CreateCharacterDto) {
    const character = await this.controllerAdapter.create<Character>(
      createCharacterDto,
    );
    return character;
  }

  @Get()
  async findAll(@Query() pagination: PaginationDto) {
    const characters = await this.controllerAdapter.findAll<Character>(
      pagination,
    );
    return characters;
  }

  @Get('search')
  async findOne(
    @Query('id', MongoIdPipe) _id: Types.ObjectId,
    @Query('name') name: string,
  ) {
    if (!!_id) {
      const filter = { _id };
      const character = await this.controllerAdapter.findOne<Character>(filter);
      return character;
    }

    if (!!name) {
      const filter = { name };
      const character = await this.controllerAdapter.findOne<Character>(filter);
      return character;
    }

    throw new BadRequestException("Didn't send either the id or the name");
  }

  @Get(':id')
  async findOneById(@Param('id', MongoIdPipe) _id: Types.ObjectId) {
    const character = await this.controllerAdapter.findOneById<Character>(_id);
    return character;
  }

  @Patch(':id')
  async update(
    @Param('id', MongoIdPipe) _id: Types.ObjectId,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ) {
    const filter = { _id };
    const character = await this.controllerAdapter.updateOne<Character>(
      filter,
      updateCharacterDto,
    );
    return character;
  }

  @Delete(':id')
  async remove(@Param('id', MongoIdPipe) _id: Types.ObjectId) {
    const character = await this.controllerAdapter.removeById<Character>(_id);
    return character;
  }
}
