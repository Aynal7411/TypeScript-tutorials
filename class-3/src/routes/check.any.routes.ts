import { Router } from "express";

import { users } from "../data/users";


const router = Router();

router.get("/users", (req, res) => {
  res.json({
    success: true,
    data: users
  });
});

export default router;
