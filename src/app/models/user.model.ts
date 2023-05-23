import { RoleModel } from "./role.model"

export type UserModel = {
    id: string,
    username: string,
    password: string,
    name: string,
    surname: string,
    role: string
}