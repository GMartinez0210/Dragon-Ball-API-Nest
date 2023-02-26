/* eslint-disable prettier/prettier */

import { Types } from 'mongoose';
import { Breed } from "src/controllers/breed/entities/breed.entity";
import { Planet } from "src/controllers/planet/entities/planet.entity";
import { Saga } from "src/controllers/saga/entities/saga.entity";
import { Universe } from "src/controllers/universe/entities/universe.entity";

export interface Character {
  _id?: Types.ObjectId;
  name: string;
  image: string;
  power: number;
  breed: Breed;
  saga: Saga;
  planet: Planet;
  universe: Universe;
}
