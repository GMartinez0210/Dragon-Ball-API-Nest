/* eslint-disable prettier/prettier */
import { Types } from 'mongoose';
export interface Universe {
  _id?: Types.ObjectId;
  name: string;
  image: string;
  number: number;
}
