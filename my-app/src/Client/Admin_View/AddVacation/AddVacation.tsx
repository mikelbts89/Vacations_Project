import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { VacationModel } from '../../Models/VacationModel';
import axios from 'axios';

function AddVacation() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()

    async function submit(data: VacationModel) {
        try {
            await axios.post('http://localhost:3001/vacations/', data)
            history.push('/users/main_page')
        } catch (err) {
            console.log(err.message)
            throw err.message
        }
    }





    return (
        <div>
            <div className="vacation_form_div" >
                <form >

                    <div className="item_form_div_Edit">
                        <label htmlFor="">Description </label>
                        <input {...register("description", { required: true })} />
                        {errors.description && <span>Missing description</span>}
                    </div>
                    <div className="item_form_div_Edit">
                        <label htmlFor="">Destination </label>
                        <input {...register("destination", { required: true })} />
                        {errors.destination && <span>Missing destination</span>}
                    </div>
                    <div className="item_form_div_Edit">
                        <label htmlFor="">Image </label>
                        <input {...register("image", { required: true })} />
                        {errors.image && <span>Missing Image</span>}
                    </div>
                    <div className="item_form_div_Edit">
                        <label htmlFor="">Depart </label>
                        <input {...register("startDate", { required: true })} />
                        {errors.startDate && <span>Missing Depart</span>}
                    </div>
                    <div className="item_form_div_Edit">
                        <label htmlFor="">Return </label>
                        <input {...register("endDate", { required: true })} />
                        {errors.endDate && <span>Missing Return</span>}
                    </div>
                    <div className="item_form_div_Edit">
                        <label htmlFor="">Price </label>
                        <input {...register("price", { required: true })} />
                        {errors.price && <span>Missing Price</span>}
                    </div>
                    <button onClick={handleSubmit(submit)} >Add Vacation</button>
                </form>
                <button onClick={() => {
                    history.goBack()
                }} >back</button>
            </div>
        </div>
    )
}

export default AddVacation
