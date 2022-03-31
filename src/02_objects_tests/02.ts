type TechnologiesType = {
    id: number
    title: string
}

type LocationType = {
    city: string
    country: string
}

type AddressType = {
    streetName: string
    location: LocationType
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType,
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    id: 1,
    name: 'Valodos',
    age: 36,
    isActive: false,
    address: {
        streetName: 'Parkowaja',
        location: {
            city: 'Wroclaw',
            country: 'Poland'
        }
    },
    technologies: [
        {id: 1, title: 'CSS'},
        {id: 2, title: 'HTML'},
        {id: 3, title: 'JavaScript'},
        {id: 4, title: 'React'},
    ]
}

