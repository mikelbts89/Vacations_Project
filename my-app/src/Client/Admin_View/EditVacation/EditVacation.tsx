import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom'
import { VacationModel } from '../../Models/VacationModel';
import "./EditVacation.css"

function EditVacation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [vacations, setVacations] = useState<VacationModel[]>([]);
    const { id } = useParams<{ id: string }>();
    const history = useHistory()

    async function getVacation() {
        const result = await axios.get(`http://localhost:3001/vacations/${id}`)
        setVacations(result.data)
    }

    async function submit(data: VacationModel) {
        console.log(data)
        try {
            await axios.put(`http://localhost:3001/vacations/${id}`, data)
            history.push("/users/main_page")
        } catch (err) {
            console.log(err.message)
            throw err.message
        }
    }

    useEffect(() => {
        getVacation()
    }, [id])

    console.log(vacations)


    return (
        <div>
            <div className="vacation_form_div" >
                <form >
                    <div className="item_form_div_Edit">
                        <label htmlFor="">ID </label>
                        <input readOnly
                            // {...register("id", { required: true })}
                            defaultValue={vacations[0]?.id} />
                    </div>
                    <div className="item_form_div_Edit">
                        <label htmlFor="">Description </label>
                        <input {...register("description", { required: true })} defaultValue={vacations[0]?.description} />
                        {errors.description && <span>Missing description</span>}
                    </div>
                    <div className="item_form_div_Edit">
                        <label htmlFor="">Destination </label>
                        <input {...register("destination", { required: true })} defaultValue={vacations[0]?.destination} />
                        {errors.destination && <span>Missing destination</span>}
                    </div>
                    <div className="item_form_div_Edit">
                        <label htmlFor="">Image </label>
                        <input {...register("image", { required: true })} defaultValue={vacations[0]?.image} />
                        {errors.image && <span>Missing Image</span>}
                    </div>
                    <div className="item_form_div_Edit">
                        <label htmlFor="">Depart </label>
                        <input {...register("startDate", { required: true })} defaultValue={vacations[0]?.start_date} />
                        {errors.startDate && <span>Missing Depart</span>}
                    </div>
                    <div className="item_form_div_Edit">
                        <label htmlFor="">Return </label>
                        <input {...register("endDate", { required: true })} defaultValue={vacations[0]?.end_date} />
                        {errors.endDate && <span>Missing Return</span>}
                    </div>
                    <div className="item_form_div_Edit">
                        <label htmlFor="">Price </label>
                        <input {...register("price", { required: true })} defaultValue={vacations[0]?.price} />
                        {errors.price && <span>Missing Price</span>}
                    </div>
                    <button onClick={handleSubmit(submit)} >Submit</button>
                </form>
                <button onClick={() => {
                    history.goBack()
                }} >back</button>
            </div>
        </div>
    )
}

export default EditVacation
