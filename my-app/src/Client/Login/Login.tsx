import React from 'react'
import "./Login.css"
import { useForm } from "react-hook-form";
import Axios from 'axios'

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    async function submit(data: any) {
        try {
           const result =  await Axios.post('http://localhost:3001/users/login/', data)
            console.log(result.data.token)
            Axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
            console.log("seccess login")
        } catch (err) {
            console.log(`Post Login , ${err.message}`)
            throw err.message
        }
    }
    return (
        <div className="Login">
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

export default Login
