import {ManType} from "./DestructuringComponent";
import exp from "constants";

let props: ManType

beforeEach(()=>{
    props = {
        name: 'William',
        age: 23,
        lesson: [{title: 'JS'}, {title: 'React'}],
        address: {
            street: {
                streetName: 'Green street'
            }
        }
    }
})

test('', () => {

    //const age = user.age
    //const lesson = user.lesson

    // зная св-ва в обьекте можно присвоить их напрямую переменным через запись ниже
    // св-ва должны иметь точно такие же имена, но только в первом уровне вложиности
    // это позволит сразу обращаться к ним без надобности писать props.age
    let {age, lesson} = props



    expect(age).toBe(23)
    expect(lesson.length).toBe(2)
})

test('function test', () => {

    const l1 = props.lesson[0]
    const l2 = props.lesson[1]

    const [ls1, ls2] = props.lesson

    expect(l1.title).toBe('JS')
    expect(l2.title).toBe('React')

    expect(ls1.title).toBe('JS')
    expect(ls2.title).toBe('React')

})