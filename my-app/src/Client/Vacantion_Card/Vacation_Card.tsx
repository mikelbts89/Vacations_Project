import React from 'react'
import "./Vacations_Card.css"

function Vacation_Card(props: { vacation: any}) {
    return (
        <div className="Vacation_Card">
           
            <img src={props.vacation.image} alt="" />
          
         <label htmlFor="">{props.vacation.destination}</label>
         <br />
         <label htmlFor="">{props.vacation.description}</label>  
         <br /> 
         <label htmlFor="">Depart : {props.vacation.start_date}</label>
         <br />
         <label htmlFor="">Return : {props.vacation.end_date}</label>
         <br />
         <label htmlFor="">{props.vacation.price}$</label>
           
        </div>
    )
}

export default Vacation_Card
