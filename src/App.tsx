import React from 'react';
import './App.css';
import {User} from "./06_Callback/Callback";


function App() {
  let students = [
    {
      name: 'William',
      age: 23,
      isMarried: false,
      scores: 120
    },
    {
      name: 'Maks',
      age: 24,
      isMarried: true,
      scores: 88
    },
    {
      name: 'Alice',
      age: 45,
      isMarried: false,
      scores: 98
    },
    {
      name: 'Leo',
      age: 12,
      isMarried: false,
      scores: 45
    }
  ]
  const names = []
  for(let i = 0; i < students.length; i++) {
    let result = {...students[i], scores: students[i].scores + 200}
    names[i] = result
  }
  console.log(names)

 //=========================================================
  // assotiative array
  type UsersType = {
  [key: string]: {id: number, name: string}
  }
  let users: UsersType = {
    '1': {id: 1, name: 'William'},
    '2': {id: 2, name: 'William'},
    '3': {id: 3, name: 'William'},
    '4': {id: 4, name: 'William'}
  }

  let user = {id: 5, name: 'Leo'}

  //adding new element to the assotiative array using it's id as a new assotiative's array id
  users[user.id] = user

  //deleting element from assotiative array
  delete users['3']

  console.log(users)

  //========================================================

  return (
    <div className="App">
      <User/>
    </div>
  );
}

export default App;
