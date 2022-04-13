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

  return (
    <div className="App">
      <User/>
    </div>
  );
}

export default App;
