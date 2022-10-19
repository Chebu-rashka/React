// import React from 'react'

// const PersonComponent = (props) => {
//     console.log(props)
//     return (
//         <div>Hello, {props.firstName}!</div>
//     )
// }

// export default PersonComponent

import React from 'react'
import CarOwnerChild from './child'


const owners=[
    {name:"John", carBrand:"Lexus", carYear:2020, carColor:"white"},
    {name:"Jenny", carBrand:"Toyota", carYear:2021, carColor:"black"}
]

const CarOwnerParent = () => {
    return (
        <div> 
            {owners.map((owner, ownerIdx)=>{
            return(
                <CarOwnerChild ownerInfo={owner} ownerIdx={ownerIdx}
                key={ownerIdx}/>
            )
            })}
        </div>  
    )
}

export default CarOwnerParent

