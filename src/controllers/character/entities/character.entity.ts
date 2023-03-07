import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Breed } from 'src/controllers/breed/entities/breed.entity';
import { Planet } from 'src/controllers/planet/entities/planet.entity';
import { Saga } from 'src/controllers/saga/entities/saga.entity';
import { Universe } from 'src/controllers/universe/entities/universe.entity';

@Schema()
export class Character extends Document {
  @Prop({
    unique: true,
    index: true,
    required: true,
    set: (name: string) => name.toLowerCase().trim(),
  })
  name: string;

  @Prop()
  image: string;

  @Prop({
    type: Types.ObjectId,
    ref: () => Breed,
  })
  breed: Breed;

  @Prop({
    type: Types.ObjectId,
    ref: () => Saga,
  })
  saga: Saga;

  @Prop({
    type: Types.ObjectId,
    ref: () => Planet,
  })
  planet: Planet;

  @Prop({
    type: Types.ObjectId,
    ref: () => Universe,
  })
  universe: Universe;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
