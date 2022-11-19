export interface IPhoneNumber {
    phoneId: string,
    number: string,
    description: string,
}

export interface ICreatePhoneNumberRequest {
    number: string, 
    description: string,
}

export interface IPatchPhoneNumberRequest extends IPhoneNumber {}