import React  from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, firestore} from '../../config/firebase'
import { setDoc,doc } from 'firebase/firestore/lite';

export default function Register() {
    const intailvalue=
    {email:"",passWord:""}
  const [state, setState]=useState(intailvalue)
   const handelChange=(e)=>{
     setState({...state,[e.target.name]: e.target.value})
   }  
   const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(state)
    const {email,password}= state
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)

    try{
     setDoc(doc(firestore,"user",user.uid),{fullName: '',Uid:user.uid})
    }
    catch(e){
  console.log(e)
    }
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // ..
    console.log(error)
  });
   }
  
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card p-2 w-50">
                <h1 className='text-center'>Register page</h1>
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
                            <button type="submit" className='btn btn-success w-50 mb-2'>Register Now</button>
                        </div>
                    </div>
                    </form>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}
