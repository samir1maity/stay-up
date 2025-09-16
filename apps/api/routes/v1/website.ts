import { Router } from "express";
import websiteController from '../../controllers/website.ts'
import authMiddleware from "../../middleware/authMiddleware.ts";

const websiteRoutes = Router()

websiteRoutes.post('/', authMiddleware, websiteController.create)

export default websiteRoutes