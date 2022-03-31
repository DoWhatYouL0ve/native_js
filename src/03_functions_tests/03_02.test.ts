import {CityType} from "../02_objects_tests/02_02";
import {changeMoneyBudget, repairHouse, staffAmountChanging} from "./03";

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

test('Budget should be changed for HOSPITAL', () => {
    changeMoneyBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE STATION', () => {
    changeMoneyBudget(city.governmentBuildings[1], -50000)

    expect(city.governmentBuildings[1].budget).toBe(50000)
})

test('house should be repaired', () => {
    repairHouse(city.houses[1])

    expect(city.houses[1]).toBeTruthy()
})

test('staff should be changed', () => {
    staffAmountChanging(city.governmentBuildings[0], 20)
    staffAmountChanging(city.governmentBuildings[1], -20)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
    expect(city.governmentBuildings[1].staffCount).toBe(100)
})