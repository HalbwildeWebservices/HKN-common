export interface IPhoneNumber {
    phoneId: string,
    number: string,
    description: string,
}

export interface ICreatePhoneNumberRequest extends Omit<IPhoneNumber, 'phoneId'> {}