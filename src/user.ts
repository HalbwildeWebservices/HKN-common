import { IPermission } from "./permissions";
import { IAddress, ICreateAddressRequest } from "./address";
import { ICreatePhoneNumberRequest, IPhoneNumber } from "./phoneNumber";


export interface IUser {
    userId: string,
    username: string,
    firstName: string,
    lastName: string,
    isActive: boolean,
    email: string,
    permissions: IPermission[],
    address: IAddress,
    phoneNumbers: IPhoneNumber[],
    password: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface ICreateUserRequest extends Omit<IUser, 'userId' | 'isActive' | 'permissions' | 'address' | 'phoneNumbers' | 'createdAt' | 'updatedAt'>{
    address: ICreateAddressRequest,
    phoneNumbers: ICreatePhoneNumberRequest[],
}

export interface IUserResponse extends Omit<IUser, 'password'> {}