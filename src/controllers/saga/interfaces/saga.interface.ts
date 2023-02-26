/* eslint-disable prettier/prettier */
import { Types } from 'mongoose';
export interface Saga {
  _id?: Types.ObjectId;
  name: string;
  image: string;
}
