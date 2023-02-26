/* eslint-disable prettier/prettier */
import { Types } from 'mongoose';
export interface Planet {
  _id?: Types.ObjectId;
  name: string;
  image: string;
}
