import { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import argon2 from 'argon2';

import User from '../schemas/user.schema';

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const isAlreadyRegistered = await User.findOne({ email });
  if (isAlreadyRegistered)
    return res.status(400).json({
      response: 'fail',
      errors: ['User already registered']
    });

  const user = new User({
    email,
    username: username ? username : nanoid(10),
    password: await argon2.hash(password)
  });

  await user.save();

  return res.status(201).json({
    response: 'success',
    data: 'User created successfully'
  });
};
export const authenticate = () => {};
