import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionType } from '../Redux/action_type'
import { AppState } from '../Redux/app_state'
import Vacation_Card from '../Vacantion_Card/Vacation_Card'
import "./Vacations_List.css"
import Axios from 'axios'
import { VacationModel } from '../Models/VacationModel'

function Vacations_List() {

    const dispatch = useDispatch()
    const [vacantionsState, setVacantionsState] = useState<VacationModel[]>([])
    const filteredVacationsState = useSelector((state: AppState) => state.filteredVacations)

    async function getAllVacations() {
        const result = await Axios.get('http://localhost:3001/vacations')
        const vacationsFromApi = result.data
        dispatch({ type: ActionType.SetState, payload: { vacationsFromApi } })
        setVacantionsState(vacationsFromApi)
    }

    useEffect(() => {
        getAllVacations()
    }, [])

    useEffect(() => {
        setVacantionsState(filteredVacationsState)
    }, [filteredVacationsState])

    return (
        <div>
            <div className="Vacations_List">
                {vacantionsState?.map((vacation: VacationModel) => {
                    return <div key={vacation.id}>
                        <Vacation_Card vacation={vacation} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Vacations_List
