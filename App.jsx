import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function changeBgColor(color){
  let body= document.querySelector("body");
  body.style.backgroundColor=color;
}

function App() {
  const [bgcolor, setBgcolor] = useState("olive");
  return (
    <>
      <div className='buttons'>
         <button className='btn green' style={{backgroundColor:"green"}}  onClick={()=>changeBgColor("green")}>Green</button>
         <button className='btn orange' style={{backgroundColor:"orange"}}  onClick={()=>changeBgColor("orange")} >Orange</button>
         <button className='btn purple' style={{backgroundColor:"purple"}}  onClick={()=>changeBgColor("purple")}>Purple</button>
         <button className='btn red' style={{backgroundColor:"red"}}  onClick={()=>changeBgColor("red")}>Red</button>
         <button className='btn red' style={{backgroundColor:"gray"}}  onClick={()=>changeBgColor("gray")}>Gray</button>
         <button className='btn red' style={{backgroundColor:"olive"}}  onClick={()=>changeBgColor("olive")}>olive</button>
         <button className='btn red' style={{backgroundColor:"brown"}}  onClick={()=>changeBgColor("brown")}>Brown</button>
      </div>
    </>
  )
}

export default App
