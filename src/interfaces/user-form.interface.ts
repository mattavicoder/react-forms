export interface IUserForm {
    FirstName: string,
    LastName: string,
    MiddleName: string,
    Email: string,
    Gender: string,
    DateOfBirth: Date,
    PhoneNumber: number,
    Address: IUserAddress
}

export interface IUserAddress {
    City: string,
    State: string
}