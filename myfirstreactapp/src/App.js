import {useState, useEffect} from 'react'
import LargeScreenComponent from './components/LargeScreenComponent';
import MobileComponent from './components/MobileComponent';

function App(){

  const [counter, setCounter] = useState(10);
  const [control, setControl] = useState(false);
  const [mobile, setMobile] = useState(false);
  // let a = 20;

  useEffect(() =>{
    alert('1234')
  }, [])

  const clickHandler = () => {
    //setCounter(counter+10);
    // alert(`The button is clicked : ${a}`)
    setMobile(!mobile);
  }

  const getView = () => {
    if(mobile)
    {
      return <MobileComponent counterVariable={counter} name={'Kamil'}/>
    }
    return <LargeScreenComponent />
  }

  return(
    <>
      <h1>This is my first component {counter}</h1>

      {getView()}
      {/* {mobile ? <MobileComponent /> : <LargeScreenComponent />} */}

      <h2>This is h2</h2>
      <button onClick={clickHandler}>Click me</button>
    </>
  )
}

export default App;