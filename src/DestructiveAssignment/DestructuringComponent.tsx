import React from "react";

type LessonType = {
    title: string
}
type StreetNameType = {
    streetName: string
}
type AddressType = {
    street: StreetNameType
}
export type ManType = {
    name: string
    age: number
    lesson: Array<LessonType>
    address: AddressType
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

export const DestructuringComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    // const {title, man, ...restProps} = props

    return (
        <div>
            <h1>{title}</h1>
            <div>{man.name}</div>
            <div>{props.car.model}</div>
        </div>
    )
}