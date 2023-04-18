import {z} from 'zod';
import {zod} from '../Utils/Constants';

export const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email({message: zod.email}),
  cell: z.string().min(11),
  password: z.string().min(6, {message: zod.min}),
});

export const loginSchema = z.object({
  email: z.string().email({message: zod.email}),
  password: z.string().min(6, {message: zod.min}),
});
