import { Router } from "express";
import userRoutes from "./user";
import websiteRoutes from "./website";

const v1Router = Router()

v1Router.use('/user', userRoutes)
v1Router.use('/website', websiteRoutes)

export default v1Router;