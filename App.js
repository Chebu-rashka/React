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

import './App.css';
import CarOwnerParent from './car-owners-prop/parent';



function App() {
  return (
    <div className='App'>
      <CarOwnerParent />
    </div>
  )
}

export default App;
