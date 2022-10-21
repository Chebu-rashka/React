import React,{useState} from "react";

const DemoUsesStates = () => {
  const[bootcamp,setBootcamp]=useState({
    studentCount:1,
    isPartTime:false,
    isGoing:true,
  })
  
  return (
  <div>
        <pre>{JSON.stringify(bootcamp, null, 2)}</pre>
        {bootcamp.isFinished && <div> Hichellee Hii!</div>}

        <button
        onClick={()=>{
               setBootcamp((currState)=> { //arrow f-aar duudaj bn update hiisen dataga butsah ystoi
                return { //dotor shine butsah utga n bn
                    ...currState,
                    isFinished: !currState.isFinished,/// anharal temdeg n shine utga n tru bolno
                }
               }) 
            }}   
       >
        {bootcamp.isFinished? "Finish Class" : bootcamp.isPartTime ? 
        "Finish Class" :"Still"}  
        {/* if=?, else and : */}
        </button>
  </div>
  )
  }
export default DemoUsesStates;