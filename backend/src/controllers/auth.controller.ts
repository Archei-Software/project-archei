import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { loginService, generateToken } from '../services/auth.service';

const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await loginService(email);

    if (!user) {
      res.status(404).send({ message: "Email or Password not found" });
      return;
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      res.status(400).send({ message: "Password not found" });
      return;
    }

    const token = generateToken(user.id);

    res.json({
      message: "Login realizado com sucesso.",
      token,
      id: user.id,
      username: user.username,
      email: user.email,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("An error occurred.");
    }
  }
};

export { login };
