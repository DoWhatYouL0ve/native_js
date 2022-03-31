import { StudentType } from "../02_objects_tests/02";
import {GovernmentBuildingsType, HousesType} from "../02_objects_tests/02_02";


export const sum = (a: number, b:number) => {
    return a+b
}

let result1 = sum(sum(1,2), sum(2,3))
let result2 = sum(2,4)

export const addNewSkill = (st: StudentType, technologies: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: technologies
    })
}

export const makeStudentActive = (st: StudentType, isActive: boolean) => {
    st.isActive = isActive
}

export const studentCityLocation = (st: StudentType, city: string) => {
    return st.address.location.city === city
}

export const changeMoneyBudget = (governmentBB: GovernmentBuildingsType, amount: number) => {
    governmentBB.budget += amount
}

export const repairHouse = (house: HousesType) => {
    return house.repaired = true
}

export const staffAmountChanging = (governmentB: GovernmentBuildingsType, staff: number) => {
    governmentB.staffCount += staff
}

