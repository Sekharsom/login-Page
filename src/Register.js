import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { Link } from "react-router-dom";
import './App.css';

const Register = (props) => {
    const [name, setName] = useState("");
    const [email,  setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [database, setDatabase ] = useLocalStorage("database", [])
    console.log(database)

    const handleSubmit = (e)=>{
        e.preventDefault();
        database.push({user: email, password: password})
        setDatabase(database)
        console.log(email)
    }
   
    return (
        <div className="form-container">
            <h1>Register</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter full name" 
                value={name} onChange={(e)=>setName(e.target.value)} required />
                <label htmlFor="email">Email</label>
                <input name="email" id="email" placeholder="Enter email address"
                value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <label htmlFor="password">Password</label>
                <input name="password" id="password" placeholder="********"
                value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <button className="register-button" type="submit">Register</button>
            </form>
            <span>Already have an account? <Link to='/login'>Login here!</Link></span>
            

        </div>
    )
}

export default Register;