import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Universe extends Document {
  @Prop({
    unique: true,
    index: true,
    required: true,
    set: (name: string) => name.toUpperCase(),
  })
  name: string;

  @Prop()
  image: string;

  @Prop()
  number: number;
}

export const UniverseSchema = SchemaFactory.createForClass(Universe);
