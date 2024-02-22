import { CreateUserDTO } from "../../dto/user/UserDto";
import UserService from "../../services/user/UserService";
import {Request, Response} from 'express'


class UserController {
    async createUser(req: Request, res: Response){
        try {
            const data: CreateUserDTO = req.body
            const response = await UserService.createUser(data)
            return res.status(200).json({
                message: response
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new UserController()