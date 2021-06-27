import React from 'react'
import './Landing_Page.css'
import Vacations_List from '../Vacantions_List/Vacations_List'
function Landing_Page(): JSX.Element {

    return (
        <div className="Landing_Page">
            <Vacations_List />
        </div>
    )
}

export default Landing_Page
