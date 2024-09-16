//import Button from "./component/Button";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'

function App() {

  return (
    <>
      {/* <Button buttonContent = "Login"/>
      <Button buttonContent = "Register"/>
      <Button buttonContent = "Logout"/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
