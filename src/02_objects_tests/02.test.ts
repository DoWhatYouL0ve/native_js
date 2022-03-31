import {CityType} from "./02_02";

let city: CityType

beforeEach( () => {
    city = {
        title: 'New York',
        houses: [{
            builtAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        },{
            builtAt: 2008,
            repaired: false,
            address: {
                number: 56,
                street: {
                    title: 'Green street'
                }
            }
        },{
            builtAt: 2001,
            repaired: true,
            address: {
                number: 43,
                street: {
                    title: 'Red street'
                }
            }
        }],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'South street'
                    }
                }
            },
            {
                type: 'FIRE STATION',
                budget: 100000,
                staffCount: 120,
                address: {
                    street: {
                        title: 'West street'
                    }
                }
            }
        ],
        citizensNumber: 100000
    }
})

test('test city should contain 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].builtAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('White street')

    expect(city.houses[1].builtAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(56)
    expect(city.houses[1].address.street.title).toBe('Green street')

    expect(city.houses[2].builtAt).toBe(2001)
    expect(city.houses[2].repaired).toBe(true)
    expect(city.houses[2].address.number).toBe(43)
    expect(city.houses[2].address.street.title).toBe('Red street')

})

test('test city should contain hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('South street')

    expect(city.governmentBuildings[1].type).toBe('FIRE STATION')
    expect(city.governmentBuildings[1].budget).toBe(100000)
    expect(city.governmentBuildings[1].staffCount).toBe(120)
    expect(city.governmentBuildings[1].address.street.title).toBe('West street')


})