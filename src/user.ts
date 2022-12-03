import { IPermission } from "./permissions";
import { IAddress, ICreateAddressRequest } from "./address";
import { ICreatePhoneNumberRequest, IPhoneNumber } from "./phoneNumber";
import { ILegal, IAcceptLegal } from "./legal";

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
    legal: ILegal;
    phoneNumbers: IPhoneNumber[];
    createdAt: Date;
    updatedAt: Date;
}
export interface ICreateUserRequest {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    address: ICreateAddressRequest,
    phoneNumbers: ICreatePhoneNumberRequest[],
    legal: IAcceptLegal,
}

export interface IPatchUserRequest {
    firstName: string,
    lastName: string,
    email: string,
    address: ICreateAddressRequest,
    legal: IAcceptLegal,
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
