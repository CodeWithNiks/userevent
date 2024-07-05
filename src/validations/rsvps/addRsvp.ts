import { celebrate, Joi } from 'celebrate';

export const addRsvp = celebrate({
  body: Joi.object({
    // Optional offset parameter for pagination
    e_id: Joi.number().required(),
    id: Joi.number().required(), // Optional filter by artist

    // Optional filter by duration
  }),
});