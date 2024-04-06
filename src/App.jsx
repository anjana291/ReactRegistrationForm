import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  const [isUsername, setisUsername] = useState(true)
  const [isEmail, setisEmail] = useState(true)
  const [isPassword, setisPassword] = useState(true)


  const validatename=(e)=>{
    setname(e.target.value)
    const username = e.target.value
    // console.log(username);
    if(!!username.match(/^[a-zA-Z][a-zA-Z0-9-_]{2,15}$/)){
      setname(username)
      setisUsername(true)
    }else{
      setisUsername(false)
    }    
  }

  const validatemail=(e)=>{
    setemail(e.target.value)
    const email = e.target.value
    // console.log(email);
    if(!!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/)){
      setemail(email)
      setisEmail(true)
    }
    else{
      setisEmail(false)
    }

  }

  const validatepassword=(e)=>{
    setpassword(e.target.value)
    const pswd = e.target.value
    if(!!pswd.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)){
      setpassword(pswd)
      setisPassword(true)
    }
    else{
      setisPassword(false)
    }
}

const handleReset = () =>{
  setemail("")
  setname("")
  setpassword("")
  setisUsername(true)
  setisEmail(true)
  setisPassword(true)
}

const handleReg = () =>{
  alert("You have registered successfully")
}

  return (
    <>
     <div className='main'>
     <div className='subdiv1'>
        <h3 className='text-center'>Welcome to our page</h3>
        <h5 className='text-center'>Create your Account<i class="fa-solid fa-user fa-xs ms-2"></i></h5>
      </div>
      <div className="subdiv2">
      <h1 className='text-center mt-4'>Register Here</h1>
        <form action="" className='p-2'>

        <TextField id="outlined-basic" label="UserName" variant="outlined" value={name} className='textfield mt-2'
        onChange={(e)=>validatename(e)}/>

        {!isUsername && <p className='text-danger'>Please enter a valid username.</p>}

        <TextField id="outlined-basic" label="Email" variant="outlined" value={email} className='textfield mt-3'
        onChange={(e)=>validatemail(e)}/>

        {!isEmail && <p className='text-danger'>Please enter a valid email address.</p>}

        <TextField id="outlined-basic" label="Password" variant="outlined" value={password} className='textfield mt-3'
        onChange={(e)=>validatepassword(e)}/>

        {!isPassword && <p className='text-danger'>Password must be 7-15 characters long and contain at least one digit and one special character.</p>}

          <div className='button-grp d-flex'>
            <Button variant="contained" className='btn mt-4' style={{marginLeft:'100px',backgroundColor:'transparent',color:'black'}} onClick={handleReset}>Reset</Button>
            <Button variant="contained" className='btn mt-4' style={{marginLeft:'20px',backgroundColor:'#ae4454'}} disabled={name && email && password?false:true} onClick={handleReg}>Register</Button>
          </div>

        </form>
      </div>
     </div>
    </>
  )
}

export default App
