import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.status(403).json({
        success: false,
        message: "Header is missing",
      });
      return;
    }
    const data = jwt.verify(token, config.jwt_secret);

    if (typeof data === "object" && data?.id) {
      req.userId = data.id as string;
    } else {
      res.status(401).json({
        success: false,
        message: "User is not authenticated",
      });
    }

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "User is not authorized",
    });
  }
}

export default authMiddleware;
