import { Request, Response } from "express";
import { users } from "../data/users";

export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};