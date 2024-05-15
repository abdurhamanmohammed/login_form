import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate();
     const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:1234/login',{email,password})
        .then(result=>{console.log(result) 
            if(result.data==="success"){
                navigate("/home")

            }
     })
        .catch(err=>console.log(err))
     }
    
      return (
        <div className="fone">
            <div className="ftwo">
                <h1>Login</h1>
                <form onSubmit={handlesubmit}>
                 
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" autoComplete="off" name="email"  placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="name">Password</label>
                        <input type="text" name="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit">Login</button>
                    </form>
                    <p>To create new account</p>
                    <Link to="/register" className="login">Sign Up</Link>
                
            </div>
        </div>
      )
}

export default Login