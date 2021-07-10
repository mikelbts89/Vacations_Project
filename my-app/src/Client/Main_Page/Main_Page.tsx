import React from 'react'
import Vacations_List from '../Vacantions_List/Vacations_List'
function Main_Page() {
    return (
        <div className="Main_Page">
            {/* <div className="main_page_header">
                users View
            </div> */}
            <div className='vacantions_list'>
                <Vacations_List />
            </div>
        </div>
    )
}

export default Main_Page
