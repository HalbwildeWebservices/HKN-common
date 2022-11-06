import { Permissions } from "./permissions";
import { IAddress } from "./address";
import { IPhoneNumber } from "./phoneNumber";

export interface IUser {
    userId: string,
    username: string,
    firstName: string,
    lastName: string,
    isActive: boolean,
    email: string,
    permissions?: Permissions[],
    address?: IAddress,
    phoneNumbers?: IPhoneNumber[],
    password?: string,
}