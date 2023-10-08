import React, { useEffect }  from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {auth} from '../../config/firebase'

const intailvalue=    {email:"",passWord:""}

export default function Login() {
  const [state, setState]=useState(intailvalue)
  const [user, setUser]=useState({})
   const handelChange=(e)=>{
     setState({...state,[e.target.name]: e.target.value})
   }  
   const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(state)
const {email,password} = state
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential)
    console.log(user)
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
  console.log(error)
    // ..
  });
   }
  useEffect(()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid)
    console.log(user)
    setUser(user)
    // ...
  } else {
    // User is signed out
    // ...
  }
});
  })
  return (
    <>
    {user.email
    ?
    <div className="row">
                <div className="col">
                <h2 className='text-white text-center' >email:{user.email}</h2>
                </div>
                </div>
  :
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card p-2 w-50">
                <h1 className='text-center'>Login page</h1>
                    <form onSubmit={handelSubmit}>
                    <div className="row">
                        <div className="col mb-3">
                    <input type="email" placeholder='enter your email' name='email' onChange={handelChange} className='form-control w-100'/>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col mb-3">
                    <input type="password"  placeholder='enter your Password' name='password' onChange={handelChange} className='form-control w-100'/>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <button type="submit" className='btn btn-success w-50 mb-2'>Login</button>
                        </div>
                    </div>
                    </form>
                    </div>
            </div>
        </div>
    </div>
}
{/* <div class="spinner-border text-primary" role="status">  */}
  {/* <span class="visually-hidden">Loading...</span> */}
 {/* </div> */}
    </>
  )
}
