type UserType = {
    name: string
    age: number
}
type UserType2 = {
    name: string
    age: number
    street: {title:string}
}

function changeUserAge (u: UserType) {
    u.age++
}

test('big object test', () => {

    let user: UserType = {
        name: 'William',
        age: 23
    }

    changeUserAge(user)

    expect(user.age).toBe(24)

    let superman = user
    changeUserAge(superman)

    expect(user.age).toBe(25)

    let newman = {...user}
    changeUserAge(newman)

    expect(user.age).toBe(25)
    expect(newman.age).toBe(26)

})

test('bid array test', () => {
    let users = [{
        name: 'William',
        age: 22
    }, {
        name: 'Rita',
        age: 21
    }]

    let superusers = users
    superusers[0].name = "Super William"
    expect(users[0].name).toBe('Super William')

    let newUsers = users.map(u => ({...u}))
    newUsers[0].name = "Super mega William"
    expect(users[0].name).toBe('Super William')
    expect(newUsers[0].name).toBe('Super mega William')
})

test('big object test 2', () => {

    let user: UserType2 = {
        name: 'William',
        age: 23,
        street: {
            title: 'Green'
        }
    }

    let addr = {...user.street}
    addr.title = 'White'

    let user2: UserType2 = {
        name: 'Rita',
        age: 23,
        street: addr
    }

    expect(user.street.title).toBe('Green')
    expect(user2.street.title).toBe('White')

})