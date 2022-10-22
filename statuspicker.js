// As a client, I want to add an user status picker to the application
// Create a component that shows the word 'Active' on the screen in H2 tag
// Below that, display three statuses as buttons:
// Active
// Away
// Offline
// When any of the status is clicked, update the status in the H2 tag 
// with the clicked status


import React,{useState} from "react";

const StatusStates = () => {
  const [status, setStatus]=  useState(<h2>Active</h2>)
 
 

 
  return (
  <div>
    <pre>{status}</pre>
    <button onClick={()=>setStatus(()=>"Away")} >Away</button>
    <button onClick={()=>setStatus(()=>"Offline")} >Offline</button>
    <button onClick={()=>setStatus(()=>"Active")} >Active</button>


  </div>
  )
}
export default StatusStates;