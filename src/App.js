
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  let [text, setText] = useState("default text");
  let [color, setColor] = useState('red');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(users => console.log( users ))
  })

  useEffect(() => {
    console.log('change state');
  })

  return (
    <div>
      {text}
      <button onClick={
        () => {
          setText((prevState) => {
        console.log(prevState);
        return 'new txt'
      })
    }
  }>Change state {color}</button>
    </div>
  );
}

export default App;
