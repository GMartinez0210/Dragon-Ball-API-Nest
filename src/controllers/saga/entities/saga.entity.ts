import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Saga extends Document {
  @Prop({
    unique: true,
    index: true,
    required: true,
    set: (name: string) => name.toLowerCase().trim(),
  })
  name: string;

  @Prop()
  image: string;

  @Prop()
  year: number;

  @Prop()
  chapters: number;
}

export const SagaSchema = SchemaFactory.createForClass(Saga);
