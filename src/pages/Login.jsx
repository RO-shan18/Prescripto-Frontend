import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = (event)=>{
    event.preventDefault()
  }
  return (
    <div className='min-h-[60vh] flex items-center justify-center'>
    <form className='border border-gray-400 px-8 py-10 rounded-lg shadow-lg' onClick={(e)=> onSubmitHandler(e)}>
        <p className='text-2xl text-gray-800 font-semibold pb-2'>{state === "Login"? "Login" : "Create Account"}</p>
        <p className='text-gray-600 pb-4 '>Please {state === "Login"? "Login" : "sign up"} to book appointment </p>
        {state === "Sign Up" && <div className='flex flex-col'>
           <p className='text-gray-600 text-sm'>Full Name</p>
           <input className="border border-gray-300 mb-2 py-1 rounded-sm" type="text" value={name} onChange={()=> setName(e.target.value)}/>
        </div>}
        <div className='flex flex-col'>
           <p className='text-gray-600 text-sm'>Email</p>
           <input className="border border-gray-300 mb-2 py-1 rounded-sm" type="text" value={email} onChange={()=> setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-col'>
           <p className='text-gray-600 text-sm'>Password</p>
           <input className="border border-gray-300 mb-2 py-1 rounded-sm" type="text" value={password} onChange={()=> setPassword(e.target.value)}/>
        </div>

        <button className='bg-primary text-center w-full text-white py-2 rounded-lg mt-3 mb-5'>{state === "Login"? "Login" : "Create Account"}</button>

        <div>
          {
            state === "Login" ? 
            (<p className='text-gray-600 text-sm'>Don't have an account? <span className='text-primary underline text-sm cursor-pointer' onClick={()=>setState('Sign Up')}>Signup here</span></p>) :
            (<p className='text-gray-600 text-sm'>Already have an account?<span className='text-primary underline text-sm cursor-pointer' onClick={()=>setState('Login')}>Login here</span></p>)
          }
        </div>
    </form>
    </div>
  )
}

export default Login
