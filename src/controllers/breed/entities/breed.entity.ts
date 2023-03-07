import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Breed extends Document {
  @Prop({
    unique: true,
    index: true,
    required: true,
    set: (name: string) => name.toLowerCase().trim(),
  })
  name: string;

  @Prop()
  image: string;
}

export const BreedSchema = SchemaFactory.createForClass(Breed);
