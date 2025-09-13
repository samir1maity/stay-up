import { Router } from "express";
import websiteController from '../../controllers/website.ts'

const websiteRoutes = Router()

websiteRoutes.post('/', websiteController.create)
websiteRoutes.patch('/:websiteId', websiteController.update)

export default websiteRoutes