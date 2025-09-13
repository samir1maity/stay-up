import { Router } from "express";
import userController from '../../controllers/user.ts'

const userRoutes = Router()

userRoutes.post('/', userController.create)
userRoutes.patch('/', userController.update)

export default userRoutes