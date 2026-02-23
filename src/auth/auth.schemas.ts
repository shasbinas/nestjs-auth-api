import * as Joi from 'joi';

export const registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid email address (e.g., user@example.com)',
    'string.empty': 'Email is required',
    'any.required': 'Email is a mandatory field',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long',
    'string.empty': 'Password cannot be empty',
    'any.required': 'Password is required',
  }),
  name: Joi.string().optional().allow(''),
  avatar: Joi.any().optional(),
}).unknown(true); // Allow additional fields from Multer file object

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Please enter a valid email address',
    'string.empty': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required',
  }),
});
