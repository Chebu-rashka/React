// import './App.css';
// import PersonComponent from './person';


// const studentNames=["Anar", "Bolor", "Bold"]

// // const people={
// //   name:"Jamia",
// //   seatNumber:3
// // },
// // {
// //   name:"Bolor",
// //   seatNumber:2
// // }


// function App() {
//   return (
//     <div className="App">
//       {studentNames.map((firstName,nameIdx)=>{
//         return (<PersonComponent firstName={firstName} 
//           key={nameIdx}/>
//         )
        
//       })}
   
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import CarOwnerParent from './car-owners-prop/parent';

//ene door bga car owner gesen dasgaliinh

// function App() {
//   return (
//     <div className='App'>
//       <CarOwnerParent />
//     </div>
//   )
// }

// export default App;

// import './airbnb/airbnb.css'
// import AirbnbParent from './airbnb/airbnb-parent'
// import NavParent from './airbnb/navbar'
// import IconBar from './airbnb/iconbar'

// function App() {
//   return (
//     <div className='App'>
//       <NavParent/>
//       <IconBar/>
//       <AirbnbParent/>
//     </div>
//   )
// }

// export default App;


// import './App.css';
// import FireworkState from './Component/exercise/counter';

// function App() {
//   return (
//     <div className='App'>
//       {/* <DemoUsesStates /> */}
//       < FireworkState/>
//     </div>
//   );
// }

// export default App;
// import './App.css';
// import SampleData from './Component/exercise/jsondata';



// function App() {
//   return (
//     <div className='App'>
//       {/* <CounterStates /> */}
//       {/* < FireworkStates/> */}
//        < SampleData/>

//     </div>
//   );
// }

// export default App;
// import './App.css';
// import LanguagePicker from './Component/exercise/languagePicker'



// function App() {
//   return (
//     <div className='App'>
//       <LanguagePicker />
//       {/* <ToDoListParent /> */}
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import CarOwnerParent from './car-owners-prop/parent';



// function App() {
//   return (
//     <div className='App'>
//        < CarOwnerParent/>

//     </div>
//   )
// }

// export default App
// import React,{useState} from "react";
// import './App.css'

// const App=()=>{
// const[state, setState]=useState(true)
// return(
//   <div className={state ? "green": "red"}>
//     {state ? "true" : "false"}
//     <button onClick={()=>setState((curr)=>!curr)}>Change status</button>

//   </div>
// )

// }

// export default App

import './exercise/statuspicker.css';
import StatusPicker from './exercise/statuspicker';



function App() {
  return (
    <div className='App'>
      < StatusPicker/>
      {/* <LanguagePicker /> */}
      {/* <ToDoListParent /> */}
    </div>
  )
}

export default App