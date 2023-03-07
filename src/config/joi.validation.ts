/* eslint-disable prettier/prettier */

import * as joi from 'joi';

export const JoiValidationSchema = joi.object({
  MONGODB_URI: joi.required(),
})
