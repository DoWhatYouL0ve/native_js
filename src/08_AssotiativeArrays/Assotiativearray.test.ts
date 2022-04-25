type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach(()=>{
    users = {
        '1': {id: 1, name: 'William'},
        '2': {id: 2, name: 'William'},
        '3': {id: 3, name: 'William'},
        '4': {id: 4, name: 'William'}
    }
})

test('value should be updated', ()=>{
    users['2'].name = 'Rita'

    //strict comparison
    expect(users['2'].name).toBe('Rita')
    //not a strict comparison (only values)
    expect(users['2']).toEqual({id: 2, name: 'Rita'})
})

test('value should be deleted', ()=>{
    delete users['4']

    expect(users['4']).toBeUndefined()
})
