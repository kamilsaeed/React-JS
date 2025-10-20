import {useState} from 'react'

export default App;

function App(){

  const [counter, setCounter] = useState(10);
  // let a = 20;

  const clickHandler = () => {
    setCounter(counter+20);
    // alert(`The button is clicked : ${a}`)
  }

  return(
    <>
      <h1>This is my first component {counter}</h1>
      <h2>This is h2</h2>
      <button onClick={clickHandler}>Click me</button>
    </>
  )
}