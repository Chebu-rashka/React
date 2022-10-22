// // Create a component that has 4 buttons and an element to display 
// the current state the number
// By default, it should start with 0
// The 4 buttons update the state by the following amounts
// +1
// +10
// -10
// -1



import React,{useState} from "react";

const CounterStates = () => {
  const [count, setCount]=  useState(0)
 
 

 
  return (
  <div>
    <pre>{count}</pre>
    <button onClick={()=>setCount((currState)=>currState+1)} >+1</button>
    <button onClick={()=>setCount((currState)=>currState+10)} >+10</button>
    <button onClick={()=>setCount((currState)=>currState-1)} >-1</button>
    <button onClick={()=>setCount((currState)=>currState-10)} >-10</button>


  </div>
  )
}
export default CounterStates;