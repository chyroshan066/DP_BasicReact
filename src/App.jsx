//import Button from "./component/Button";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import { useEffect, useState } from 'react'

function App() {

  // Using useState hook to set value
  // syntax::              const [value, setValue] = useState(initialValue)
  /*Example::*/            const [count, setCount] = useState(0)
  
  //This type of variable doesn't changes the state dynmaically or doesnot perform re-rendering. To do so, React provides us with the feature of useState hook
  // let count = 0;
  // function increaseCount(){
  //   count++;
  //   console.log(count)
  // }

  // useEffect hook
  // It is of three types based on the situation in which it is mounted

  // Type-I 
  // the callback function is only called when user visits the page for the first time or when the page refreshes. In    this case dependency array is empty
  // syntax::                useEffect(() => {}, [])
  /* Example::*/             
  useEffect(() => {
    console.log("First type useEffect was called")
  }, [])

  // Type-II
  // the callback function is called when user visits the page for the first time or when the page refreshes and also when the dependent value is changed. In this case dependency array has some value
  // syntax::                useEffect(() => {}, [dependent_value])
  /* Example::*/  
  useEffect(() => {
    console.log("Second type useEffect was called")
  }, [count])

  // Type-II
  // the callback function is always called. In this case dependency array is not included (not a good practice)
  // syntax::                useEffect(() => {})
  /* Example::*/  
  useEffect(() => {
    console.log("Third type useEffect was called")
  })

  return (
    <>
      
      {
      // Concept of Components and props

      /* <Button buttonContent = "Login"/>
      <Button buttonContent = "Register"/>
      <Button buttonContent = "Logout"/> */
      }


      {
      // Concept of routing

      /* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter> */
      }


      {
      /* <h1>{count}</h1>
      <button onClick={increaseCount}>+</button> */
      // The above function is invoked only when the button is clicked

      // <button onClick={increaseCount()}>+</button>
      //But this above function is invoked when the page is rendered or page is refreshed since we used parenthesis along with the function name. So for passing parameters only use fat-arrow function

      // <button onClick={() => increaseCount(1,2)}>+</button>
      // This fat arrow function is suitable for passing parameters since, it doesn't load itself whenever page refreshes
      } 

       {
       // Concept of useState hook.
       // useState hook is an array which has variable in first index & function in second index

      
       } 
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      

    </>
  )
}

export default App
