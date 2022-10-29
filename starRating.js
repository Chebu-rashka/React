import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar} from "react-icons/ai";

export default function StarRating () {
    const[rating, setRating]=useState(0)

    return (
      <div style={{display:"flex"}}>
        {[...Array(5)].map((star, starIdx) =>  (         
            <button 
            key={starIdx} 
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"transparent",
                border:"none",
                cursor:"pointer",
            }}
            onClick={()=>setRating(starIdx+1)}
            >
                {starIdx+1<=rating?(<AiFillStar style={{color:"red"}}/>
                ):(
                    <AiOutlineStar/>
                )}   
                </button>  
            /* <span className={`star ${starIdx+1<=rating ? "fillthecolor": ""}`}>&#9734;</span>    */
            
           ))}
           {/* {rating} */}
      </div>
  )
}





// import './exercise/starrating.css'
// import StarRating from './exercise/starRating';




// function App() {
//   return (
//     <div className='App'>
//         <StarRating/>
//     </div>
//   )
// }

// export default App