import React  from 'react'
import { useState } from 'react'
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import {auth} from '../../config/firebase'
import { doc,setDoc} from "firebase/firestore/lite"; 
// import { firestore } from '../../config/firebase';
// import { doc } from 'firebase/firestore';
import { firestore } from '../config/firebase';
export default function AddStudent() {
    const intailvalue=
    {name:"",id:"",
number:""}
  const [state, setState]=useState(intailvalue)
   const handelChange=(e)=>{
     setState({...state,[e.target.name]: e.target.value})
   }  
   const handelSubmit= async (e)=>{
    e.preventDefault();
    console.log(state)
    const {name,id,number}= state
 let  randomid= Math.random().toString(36).slice(2)
    try {
         await setDoc(doc(firestore, "students",randomid), {name,id,number});
        // console.log("Document written with ID: ", docRef.id);
        console.log("Document written with ID: ", randomid);
    } catch (e) {
        console.error("Error adding document: ", e);
      }
      
   }
  
  return (
<>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card p-2 w-50">
                <h1 className='text-center'>Add Student</h1>
                    <form onSubmit={handelSubmit}>
                    <div className="row">
                        <div className="col mb-3">
                    <input type="text" placeholder='enter your name' name='name' onChange={handelChange} className='form-control w-100'/>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col mb-3">
                    <input type="Number"  placeholder='enter your id' name='id' onChange={handelChange} className='form-control w-100'/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col mb-3">
                    <input type="Number"  placeholder='enter your discription' name='number' onChange={handelChange} className='form-control w-100'/>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <button type="submit" className='btn btn-success w-50 mb-2'>Add Now</button>
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
