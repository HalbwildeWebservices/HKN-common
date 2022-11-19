export interface IAddress {
    addressId: string,
    street: string,
    houseNumber: string,
    zipCode: string,
    town: string,
    country: string,

}

export interface ICreateAddressRequest {
    street: string,
    houseNumber: string,
    zipCode: string,
    town: string,
    country: string,
}

