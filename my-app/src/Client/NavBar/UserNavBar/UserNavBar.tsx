import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AppState } from '../../Redux/app_state'
import logo from '../../Images/logo.png'

import './UserNavBar.css'
import { ActionType } from '../../Redux/action_type'

function UserNavBar() {
    const history = useHistory()
    const dispatch = useDispatch()
    const storageUserRole = sessionStorage.getItem("userRole")
    const userName = sessionStorage.getItem("userName")
    const currentUserName = useSelector((state: AppState) => state.currentUserName)
    const userRole = useSelector((state: AppState) => state.currentAdminStatus)
    const admin = userRole === "Admin" || storageUserRole === "Admin" ? true : false;

    return (
        <div className="UserNavBar">
            <div className="Logo_div">
                <img src={logo} alt="" />
            </div>

            <div className="Btn_div">
                <button onClick={() => {
                    sessionStorage.removeItem('userToken')
                    sessionStorage.removeItem("userRole")
                    history.push('/')
                    dispatch({ type: ActionType.userRole, payload: { userRole: "" } })
                }} >Log Out</button>
            </div>
            {admin && <div className="Btn_div adminView" ><Link to={'/vacations/add'} ><button>Add Vacation</button></Link></div>}
            <div className="Name_div">
                <h1><span className="Name_span">Hi </span>{currentUserName || userName}</h1>
            </div>
            <div className="Hr_div">
                <hr />
            </div>
        </div>
    )
}

export default UserNavBar

/* admin navBar */
// <div className="Btn_div" >
// <NavLink to="/addNewVacation">Add New Vacation</NavLink>
// </div>