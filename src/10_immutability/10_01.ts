export type UserType = {
    name: string
    millionsDollars: number
    address: {title: string, street?: string}
}

type CarType = {
    car: string
}

export type UserWithCarType = UserType & {
    carName: CarType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}
