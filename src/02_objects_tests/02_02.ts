type HousesAddressStreetType = {
    title: string
}
type HousesAddressType = {
    number: number
    street: HousesAddressStreetType
}
export type HousesType = {
    builtAt: number
    repaired: boolean
    address: HousesAddressType
}

type GBAddressStreetType = {
    title: string
}
type GBAddressType = {
    street: GBAddressStreetType
}
export type GovernmentBuildingsType = {
    type: "FIRE STATION" | "HOSPITAL"
    budget: number
    staffCount: number
    address: GBAddressType
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

