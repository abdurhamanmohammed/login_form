import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
function  Signup() {
const [name,setName]=useState()
const [email,setEmail]=useState()
const [password,setPassword]=useState()
const navigate=useNavigate();
 const handlesubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:1234/register',{name,email,password})
    .then(result=>{console.log(result) 
                navigate("/login")
 })
    .catch(err=>console.log(err))
 }

  return (
    <div className="fone">
        <div className="ftwo">
            <h1>Register</h1>
            <form onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" autoComplete="off" required name="name" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" autoComplete="off" required name="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Password</label>
                    <input type="password" name="password" required placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit">Register</button>
                </form>
                <p>Already Have an Account</p>
                <Link to="/login" className="login">Login</Link>
            
        </div>
    </div>
  )
}

export default Signup