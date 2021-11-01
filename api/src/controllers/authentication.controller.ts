import { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import { hash, verify } from 'argon2';
import jwt from 'jsonwebtoken';

import UserModel from '../models/user.model';

import { JWT_SECRET, JWT_EXPIRES_IN } from '../constants';

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const isAlreadyRegistered = await UserModel.findOne({ email });
  if (isAlreadyRegistered)
    return res.status(400).json({
      response: 'fail',
      errors: ['User already registered']
    });

  const user = new UserModel({
    email,
    username: username ? username : nanoid(10),
    password: await hash(password)
  });

  await user.save();

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

  return res.status(201).json({
    response: 'success',
    data: token
  });
};

export const authenticate = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user)
    return res.status(404).json({
      response: 'fail',
      errors: ['The credentials are invalid']
    });

  const isEqualPassword = await verify(user.password, password);
  if (!isEqualPassword)
    return res.status(400).json({
      response: 'fail',
      errors: ['The credentials are invalid']
    });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

  return res.status(200).json({
    response: 'success',
    data: token
  });
};
