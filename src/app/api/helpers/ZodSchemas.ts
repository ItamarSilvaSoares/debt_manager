import {z} from 'zod';
import {zod} from '../Utils/Constants';

export const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email({message: zod.email}),
  cell: z.string().min(11),
  password: z.string().min(6, {message: zod.min}),
});

export const userUpdateSchema = z.object({
  username: z.string().min(3).optional(),
  email: z.string().email({message: zod.email}).optional(),
  cell: z.string().min(11).optional(),
  password: z.string().min(6, {message: zod.min}).optional(),
});

export const loginSchema = z.object({
  email: z.string().email({message: zod.email}),
  password: z.string().min(6, {message: zod.min}),
});

export const debitCreateSchema = z.object({
  type: z.number().min(1),
  value: z.number().min(1),
  description: z.string(),
  dueDate: z.string(),
  payed: z.boolean().optional(),
  extraInfos: z
    .object({
      to: z.string().optional(),
      scannableLines: z.string().optional(),
    })
    .optional(),
});

export const debitUpdateSchema = z.object({
  type: z.number().min(1).optional(),
  value: z.number().min(1).optional(),
  description: z.string().optional(),
  dueDate: z.date().optional(),
  payed: z.boolean().optional(),
  extraInfos: z
    .object({
      to: z.string().optional(),
      scannableLines: z.string().optional(),
    })
    .optional(),
});
