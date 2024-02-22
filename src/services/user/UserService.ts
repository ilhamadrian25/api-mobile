import { CreateUserDTO } from "../../dto/user/UserDto";
import { UserModel } from "../../models/user/UserModel";


const UserService = class {
    async createUser(data: CreateUserDTO){
        return await UserModel.create(data)
    }
}

export default new UserService();
