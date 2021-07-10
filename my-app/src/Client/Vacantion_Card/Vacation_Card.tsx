import React from 'react'
import "./Vacations_Card.css"
import { VacationModel } from '../Models/VacationModel'
import { useSelector } from 'react-redux'
import { AppState } from '../Redux/app_state'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Vacation_Card(props: { vacation: VacationModel }) {

    const userRole = useSelector((state: AppState) => state.currentAdminStatus)
    const storageUserRole = sessionStorage.getItem("userRole")

    async function addFollow() {
        const vacationId = props.vacation.id
        console.log(vacationId)
        const data = { id: vacationId }
        await axios.post('http://localhost:3001/users/follow', data)
    }

    const admin = userRole === "Admin" || storageUserRole === "Admin" ? true : false;
    const costumer = userRole === "Costumer" || storageUserRole === "Costumer" ? true : false;

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
            <br />
            {admin && <Link to={`/vacations/edit/${props.vacation.id}`} ><button>Edit</button></Link>}
            {costumer && <button onClick={() => { addFollow() }} >Follow</button>}

        </div>
    )
}

export default Vacation_Card
