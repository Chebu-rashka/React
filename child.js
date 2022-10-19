import React from "react";

const CarOwnerChild=(props)=>{
    return (
        <div>
            {props.ownerInfo.name}    bought     {props.ownerInfo.carColor}    {props.ownerInfo.carYear}
                      {props.ownerInfo.carBrand} - {props.ownerIdx}
        </div>
    )
}
    export default CarOwnerChild