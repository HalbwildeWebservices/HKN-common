import { EPermission, Permissions } from "./permissions";
import { IAddress } from "./address";
import { IPhoneNumber } from "./phoneNumber";

export interface IUser {
    userId: string,
    username: string,
    firstName: string,
    lastName: string,
    isActive: boolean,
    email: string,
    permissions?: EPermission[],
    address?: IAddress,
    phoneNumbers?: IPhoneNumber[],
    password?: string,
}