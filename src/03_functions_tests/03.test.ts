import {StudentType} from "../02_objects_tests/02";
import {addNewSkill, makeStudentActive, studentCityLocation} from "./03";

let student: StudentType

beforeEach( () => {
    student = {
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
})

test('new technologies skill should be added', () => {
    expect(student.technologies.length).toBe(4)
    addNewSkill(student, 'GitHub')
    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe('GitHub')
    expect(student.technologies[4].id).toBeDefined()
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student, true)
    expect(student.isActive).toBe(true)
})

test('does student live in correct city?', () => {
    let result1 = studentCityLocation(student, 'Berlin')
    let result2 = studentCityLocation(student, 'Wroclaw')

    expect(result1).toBe(false)
    expect(result2).toBe(true)

})