import React from 'react'
import { useHistory } from 'react-router-dom'

function EditVacation() {
    const history = useHistory()
    return (
        <div>
            <button onClick={() => {
                history.goBack()
            }} >back</button>
        </div>
    )
}

export default EditVacation
