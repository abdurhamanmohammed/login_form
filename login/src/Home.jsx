import axios from 'axios'
import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

function Home() {
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:1234/home')
    .then(result=>{console.log(result) 
      if(result.data!=="success"){
                        // navigate("/login")

      }
 })
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      <h1 className='dashborad'>Dashboared</h1>
    </div>
  )
}

export default Home