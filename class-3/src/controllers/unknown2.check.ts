import { Request, Response } from "express";

export const processData = (req: Request, res: Response) => {
  // unknown data (safe entry point)

  console.log("Received data:");
  const data: unknown = req.body.data;

  // TYPE NARROWING START
  if (typeof data === "string") {
    return res.json({
      success: true,
      message: "String detected",
      upper: data.toUpperCase()
    });
  }

  if (typeof data === "number") {
    return res.json({
      success: true,
      message: "Number detected",
      doubled: data * 2
    });
  }

  if (Array.isArray(data)) {
    return res.json({
      success: true,
      message: "Array detected",
      length: data.length
    });
  }

  // fallback
  return res.status(400).json({
    success: false,
    message: "Unsupported type"
  });
};