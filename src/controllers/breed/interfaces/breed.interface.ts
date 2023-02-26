/* eslint-disable prettier/prettier */
import { Types } from 'mongoose';
export interface Breed {
  _id?: Types.ObjectId;
  name: string;
  image: string;
}
