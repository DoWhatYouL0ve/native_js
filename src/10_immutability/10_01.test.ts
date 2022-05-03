import {UserType, UserWithBooksType, UserWithCarType, WithCompaniesType} from "./10_01";

function increaseMoney(u:UserType, money: number, title: string) {
    const copy = {...u, millionsDollars: u.millionsDollars + money, address: {...u.address}}
    copy.address.title = title
    return copy
}

function increaseMoney2(u:UserWithCarType, money: number, title: string) {
    return {...u, millionsDollars: u.millionsDollars + money, address: {...u.address, title: title}}
}

function userWithBooks(u: UserWithBooksType, newBook: Array<string>) {
    return {...u, books: [...u.books, newBook]}
}

function userWithUpdatedBook(u: UserWithBooksType, updatedBook: Array<string>) {
    return {...u, books: [...u.books].map(u => u === updatedBook[0] ? updatedBook[1] : u)}
}

function userWithRemovedBook(u: UserWithBooksType, removedBook: string) {
    return {...u, books: [...u.books].filter(u => u !== removedBook)}
}

function addCompanyWorker(u: UserWithBooksType & WithCompaniesType, newCompany: string) {
    let newAddedCompany = {
        id: 4,
        title: newCompany
    }
    return {...u, companies: [...u.companies, newAddedCompany]}
}

test('reference type test', () => {
    let user: UserType = {
        name: 'William',
        millionsDollars: 32,
        address: {
            title: 'Wroclaw',
            street: 'White'
        }
    }

    const wealthUser = increaseMoney(user, 23, 'Berlin')

    expect(user.millionsDollars).toBe(32)
    expect(user.address.title).toBe('Wroclaw')
    expect(wealthUser.millionsDollars).toBe(55)
    expect(wealthUser.address.title).toBe('Berlin')
})

test('user with car', () => {

    let user: UserWithCarType = {
        name: 'William',
        millionsDollars: 32,
        address: {
            title: 'Wroclaw',
            street: 'White'
        },
        carName: {car: 'Lexus'}
    }

    const wealthUser = increaseMoney2(user, 21, 'Berlin')

    expect(user.millionsDollars).toBe(32)
    expect(user.address.title).toBe('Wroclaw')
    expect(wealthUser.millionsDollars).toBe(53)
    expect(wealthUser.address.title).toBe('Berlin')
    expect(user.carName.car).toBe('Lexus')
    expect(wealthUser.carName.car).toBe('Lexus')
})

test('user with books', () => {

    let user: UserWithBooksType = {
        name: 'William',
        millionsDollars: 32,
        address: {
            title: 'Wroclaw',
            street: 'White'
        },
        books: ['Book1', 'Book2', 'Book3']
    }

    const userWithBooksCopy = userWithBooks(user, ['CSS book', 'JS'])

   expect(user.books.length).not.toBe(userWithBooksCopy.books.length)
   expect(userWithBooksCopy.books[4]).not.toBe('CSS book')
   expect(userWithBooksCopy.books[5]).not.toBe('JS')
   expect(userWithBooksCopy.books.length).not.toBe(5)
})

test('user with books wants to update one book', () => {

    let user: UserWithBooksType = {
        name: 'William',
        millionsDollars: 32,
        address: {
            title: 'Wroclaw',
            street: 'White'
        },
        books: ['Book1', 'Book2', 'Book3']
    }

    const userWithUpdatedBookCopy = userWithUpdatedBook(user, ['Book3', 'CSS book'])

    expect(user.books.length).toBe(userWithUpdatedBookCopy.books.length)
    expect(userWithUpdatedBookCopy.books[2]).toBe('CSS book')
    expect(userWithUpdatedBookCopy.books.length).toBe(3)
})

test('user with books wants to remove one book', () => {

    let user: UserWithBooksType = {
        name: 'William',
        millionsDollars: 32,
        address: {
            title: 'Wroclaw',
            street: 'White'
        },
        books: ['Book1', 'Book2', 'Book3']
    }

    const userWithRemovedBookCopy = userWithRemovedBook(user, 'Book1')

    expect(user.books.length).not.toBe(userWithRemovedBookCopy.books.length)
    expect(userWithRemovedBookCopy.books[1]).toBe('Book3')
    expect(userWithRemovedBookCopy.books.length).toBe(2)
})

test('user that worked in different companies', () => {
    let companyWorker: UserWithBooksType & WithCompaniesType= {
        name: 'William',
        millionsDollars: 32,
        address: {
            title: 'Wroclaw',
            street: 'White'
        },
        books: ['Book1', 'Book2', 'Book3'],
        companies: [
            {id: 1, title: 'IBM'},
            {id: 2, title: 'Rambler'},
            {id: 3, title: 'Google'},
        ]
    }

    const companyWorkerCopy = addCompanyWorker(companyWorker, 'Apple')

    expect(companyWorkerCopy.companies.length).toBe(4)
    expect(companyWorkerCopy.companies[3].title).toBe('Apple')

})