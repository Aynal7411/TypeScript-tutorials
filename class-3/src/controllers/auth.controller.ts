import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password required"
    });
  }

  return res.json({
    success: true,
    message: "Login successful",
    data: { email }
  });
};