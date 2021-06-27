import React from 'react'
import { useForm } from "react-hook-form";
import Axios from 'axios'
import './Register.css'

function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    async function submit(data: any) {
        try {
            await Axios.post('http://localhost:3001/users/', data)
            console.log(data)
            console.log("seccess register")
        } catch (err) {
            console.log(`Post Register , ${err.message}`)
            throw err.message
        }
    }

    return (
        <div className="Register">
            <form onSubmit={handleSubmit(submit)}>
                <div className="item_form_div">
                    <label htmlFor="">First Name </label>
                    <input {...register("userName", { required: true })} placeholder="First name" />
                    {errors.userName && <span>Missing user name</span>}
                </div>
                <div className="item_form_div">
                    <label htmlFor="">Password </label>
                    <input {...register("password", { required: true })} placeholder="Password" />
                    {errors.password && <span>Missing password</span>}
                    <div className="item_form_div">
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
