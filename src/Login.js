import { useState } from "react"
import { useAuth } from "./auth";
import useLocalStorage from "./useLocalStorage";
import { Link } from "react-router-dom";
import './App.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError ] = useState(false);
    const auth = useAuth()

    const [database] = useLocalStorage("database", [
            {
              user: "a@gmail.com",
              password: "abc"
            },
            {
              user: "Kanchi@gmail.com",
              password: "password1"
            }
        ])
    console.log([database]);
    console.log(auth)

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = database.find((data) => data.user === email)
        console.log(email)
        console.log(user)
        if(user && user.password === password){
            setSuccess(true)
            setError(false)
            auth.login();
        }else{
            setSuccess(false)
            setError(true)
        }

    }

    return(
        <>
        <div className="form-container">
            <h1>Login Form</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input name="email" id="email" type="email" placeholder="abc@gmail.com"
                value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input name="password" id="password" type="password" placeholder="*******"
                value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
                <div className="error-message">{error && "error message"}</div>
                <div className="success-message">{success && "Success message"}</div>

            </form>
            <span>Don't have an account? <Link to='/register'>Sign up here!</Link></span>

        </div>
        </>
    )
}

export default Login;