export interface IAddress {
    addressId: string,
    street: string,
    houseNumber: string,
    zipCode: string,
    town: string,
    country: string,

}

export interface ICreateAddressRequest extends Omit<IAddress, 'addressId'> {}

