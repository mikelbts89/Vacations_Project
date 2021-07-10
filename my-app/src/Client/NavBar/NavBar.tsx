import React, { useEffect } from 'react'
import "./NavBar.css"
import logo from '../Images/logo.png'
import { AppState } from '../Redux/app_state'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { ActionType } from '../Redux/action_type'
import { NavLink } from "react-router-dom";


function NavBar() {

    const vacationsState = useSelector((state: AppState) => state.vacantionState)
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()

    function setSearchValue(e: any) {
        const searchValue = e.target.value
        setInputValue(searchValue)
    }

    const filteredVacations = vacationsState?.filter((vacation: { destination: string }) => { return vacation.destination.toLowerCase().includes(inputValue) })
    dispatch({ type: ActionType.SetFilteredState, payload: { filteredVacations } })




    return (
        <div className="NavBar">

            <div className="Logo_div">
                <img src={logo} alt="" />
            </div>
            <div className="Btn_div">
                <label htmlFor="">Travel to </label>  <input onChange={(e) => { setSearchValue(e) }} placeholder="Choose you destination" type="text" id="search_text" />
                <NavLink className="navBar_link" style={{ textDecoration: "none" }} to="/login">Login</NavLink>
                <NavLink className="navBar_link" style={{ textDecoration: "none" }} to="/register">Register</NavLink>
            </div>
            <div className="Hr_div">
                <hr />
            </div>

        </div>
    )
}

export default NavBar
