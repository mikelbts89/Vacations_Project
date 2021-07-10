import React from 'react'
import { Route, Switch } from "react-router-dom";
import Landing_Page from '../Landing_Page/Landing_Page'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Main_Page from '../Main_Page/Main_Page'
import EditVacation from '../Admin_View/EditVacation/EditVacation'
import AddVacation from '../Admin_View/AddVacation/AddVacation'
function Routing(): JSX.Element {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Landing_Page />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/users/main_page">
                    <Main_Page />
                </Route>
                <Route exact path="/vacations/edit/:id">
                    <EditVacation />
                </Route>
                <Route exact path='/vacations/add'>
                    <AddVacation />
                </Route>
            </Switch>
        </div>
    )
}

export default Routing
