import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Planet extends Document {
  @Prop({
    unique: true,
    index: true,
    required: true,
    set: (name: string) => name.toLowerCase(),
  })
  name: string;

  @Prop()
  image: string;
}

export const PlanetSchema = SchemaFactory.createForClass(Planet);
