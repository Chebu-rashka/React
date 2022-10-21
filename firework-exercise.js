import React,{useState} from "react";

const FireworkState = () => {
   
  // const [ emoji, setEmoji]=useState("🧨") 
  const [ isExplosed, setisExplosed]=useState(false) 
   return <div>
    {/* <div>Emoji:{isExplosed}</div> */}
     <button onClick={()=>setisExplosed((currState)=>{
      return (
        !currState
      )
     }
      )}> {isExplosed ? "💥" : "🧨"}</button>
   </div>;
};
export default FireworkState;




// {bootcamp.isFinished? "Finish Class" : bootcamp.isPartTime ? 
// "Finish Class" :"Still"}  
// {/* if=?, else and : */}


///Reset it back to a firecracker on second click

// import React,{useState} from "react";

// const FireworkState = () => 
// {
  
//   // const [ emoji, setEmoji]=useState({
//   //   bomb:false,
//   //   explosion:true,
//   // })

//     return (
//         <div>
//               {emoji.isFinished && <div></div>}
//                 <button 
//                  onClick={()=>
//                   {setEmoji((currState)=>
//                   {
//                        return{
//                         ...currState,
//                       isFinished: !currState.isFinished,
//                              }
//                   })
//                   }
//                         }
//                           >
//             {emoji.isFinished?"🧨" : emoji.bomb? "💥" : "💥 "} 
//                   </button>
//         </div>
//           )
// }
// export default FireworkState;
