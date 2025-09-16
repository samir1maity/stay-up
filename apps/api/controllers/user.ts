import type { Request, Response } from "express";
import { prismaClient } from "store/client";
import { userSignup } from "types/type";
import { userLogin } from "types/type";
import jwt from "jsonwebtoken";
import config from "../config/config";

async function signup(req: Request, res: Response) {
  try {
    const result = userSignup.safeParse(req.body);

    if (result.error) {
      res.status(411).json({
        success: false,
        message: "Validation failed in user signup",
      });
      return;
    }

    const { name, email, password } = result.data;

    const user = await prismaClient.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    res.status(201).json({
      success: true,
      message: "User signup successful",
      id: user.id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User signup failed",
    });
  }
}

async function login(req: Request, res: Response) {
  try {
    const result = userLogin.safeParse(req.body);

    if (result.error) {
      res.status(411).json({
        success: false,
        message: "validation failed in login user",
      });
      return;
    }

    const { email, password } = result.data;

    const user = await prismaClient.user.findFirst({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
      return;
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      config.jwt_secret
    );

    res.status(200).json({
      success: true,
      message: "User login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrongß",
    });
  }
}

const userController = {
  signup,
  login,
};

export default userController;
