import { IPermission } from "./permissions";
import { IAddress, ICreateAddressRequest } from "./address";
import { ICreatePhoneNumberRequest, IPhoneNumber } from "./phoneNumber";

export interface IUser {
    userId: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    email: string;
    permissions: IPermission[];
    address: IAddress;
    phoneNumbers: IPhoneNumber[];
    createdAt: string;
    updatedAt: string;
}
export interface ICreateUserRequest {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    address: ICreateAddressRequest,
    phoneNumbers: ICreatePhoneNumberRequest[],
}

export interface IPatchUserRequest {
    firstName: string,
    lastName: string,
    email: string,
    address: ICreateAddressRequest,
}

export interface IUserResponse {
    userId: string;
    username: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    email: string;
    permissions: IPermission[];
    address: IAddress;
    phoneNumbers: IPhoneNumber[];
    createdAt: string;
    updatedAt: string;
}
