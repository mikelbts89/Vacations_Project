import React from 'react'
import "./Login.css"
import { useForm } from "react-hook-form";
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import { UserModel } from '../Models/UserModel'
import { useDispatch } from 'react-redux';
import { ActionType } from '../Redux/action_type';

function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();

    async function submit(data: UserModel) {
        try {
            const result = await Axios.post('http://localhost:3001/users/login/', data)
            console.log(result.data)
            Axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
            if (result.data.token) {
                const token = `Bearer ${result.data.token}`
                const currentUserName: string = result.data.userName
                const userRole: string = result.data.userRole
                dispatch({ type: ActionType.SetCurrentUserName, payload: { currentUserName } })
                dispatch({ type: ActionType.userRole, payload: { userRole } })
                sessionStorage.setItem("userName", currentUserName)
                sessionStorage.setItem("userToken", token)
                sessionStorage.setItem("userRole", userRole)
                console.log("seccess login")
                history.push("/users/main_page")
            }
        } catch (err) {
            console.log(`Post Login , ${err.message}`)
            throw err.message
        }
    }
    return (
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(submit)}>
                <div className="item_form_div">
                    <label htmlFor="">First Name </label>
                    <input {...register("userName", { required: true })} placeholder="First name" />
                    {errors.userName && <span>Missing user name</span>}
                </div>
                <div className="item_form_div">
                    <label htmlFor="">Password </label>
                    <input type="password" {...register("password", { required: true })} placeholder="Password" />
                    {errors.password && <span>Missing password</span>}
                    <div className="item_form_div">
                        <input type="submit" value="Submit" />
                    </div>
                    <button onClick={() => {
                        history.push('/')
                    }} >Back</button>
                </div>
            </form>
        </div>
    )
}

export default Login
