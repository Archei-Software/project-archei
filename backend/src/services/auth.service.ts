import jwt, { Secret } from 'jsonwebtoken';
import User from '../models/User';

const loginService = (email: string) => User.findOne({ email: email });

const generateToken = (id: string) => {
  const secret: Secret = process.env.SECRET_JWT || '';

  if (!secret) {
    throw new Error('JWT secret is not defined');
  }

  return jwt.sign({ id: id }, secret, { expiresIn: 86400 });
};

export { loginService, generateToken };
