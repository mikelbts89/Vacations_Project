import React from 'react'
import { Route, Switch } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import UserNavBar from '../NavBar/UserNavBar/UserNavBar';
function NavBarRouting(): JSX.Element {
    return (
        <div className="NavBarRouting">
            <Switch>
                <Route exact path="/">
                    <NavBar />
                </Route>
                <Route exact path="/users/main_page">
                    <UserNavBar />
                </Route>
            </Switch>
        </div>
    )
}

export default NavBarRouting
