import React,{useState,useEffect} from 'react'
import { collection, getDocs,setDoc } from "firebase/firestore/lite"; 
import { firestore } from '../../config/firebase';
import { doc, deleteDoc } from "firebase/firestore/lite";
// import AddUser from '../Frontend/add'
import { Link } from 'react-router-dom';
import AddStudent from '../addstudent';
export default function Student() {

  const [users, setUsers]=useState([])
  const [usersEdite,setUserEdite]=useState({})


  const fetchDocuments= async ()=>{
 
    let array = []

    const querySnapshot = await getDocs(collection(firestore, "students"));
 querySnapshot.forEach((doc) => {
  
  let data = doc.data()
  // console.log(data)
  array.push(data)

   console.log(`${doc.id} => ${doc.data()}`);
 });

 setUsers(array)

}
 

const handelChange=(e)=>{
  setUserEdite({...usersEdite,[e.target.name]:e.target.value})
}


useEffect(()=>{
     fetchDocuments()
  }, [])


const handleEdite=(user)=>{
  setUserEdite(users)
  console.log(user)
}

  const handleUpdate=async(user)=>{
    console.log(user)
await setDoc(doc(firestore, "students", user.id), user ,{merge: true });
console.log("document updated")
// let newUsers=users.map((oldUser)=>{
//   if(oldUser.id=user.id){
//     return user
//   }
//   else{
//     return oldUser
//   }
// })
// setUsers(newUsers)
setUserEdite({})
  }



  const handleDelete=async()=>{
// console.log(user)
await deleteDoc(doc(firestore, "students", "user.id"));
     console.log("docment deleted")
// let newdata = users.filter((newuser)=>{
// return users.id !== newuser.id
// }
// setUser(newdata)
     }
 return (
<div className='w-50'>
<div className="container">
  <div className="row">
    <div className='col'>
      <h1 className='text-center'>Student</h1>
      <Link to='/addstudent' element={<AddStudent/>}  className='btn btn-success item-end'>Add New Student</Link>
      <hr />
      { users.length>0
      ?
   <div class="table-responsive">
   <table class="table w-100 table-striped">
     <thead>
       <tr>
         <th scope="col">#</th>
         <th scope="col">Name</th>
         <th scope="col">id</th>
         <th scope="col">Contact</th>
         <th scope='col'>Action</th>
       </tr>
     </thead>
     <tbody>
       {users.map((user,i)=>{
     return <tr key={i}>
     <th scope="row">{i+1}</th>
     <td>{user.name}</td>
     <td>{user.id}</td>
     <td>{user.contact}</td>
     <td>
       <button className='btn btn-info me-3'data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{handleEdite()}}>Update</button>
       <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
     </td>
   </tr>
   
       })}

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     <div className="row">
                        <div className="col mb-3">
                    <input type="text" placeholder='enter your name' name='name'  value={usersEdite.name} onChange={handelChange} className='form-control w-100'/>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col mb-3">
                    <input type="Number"  placeholder='enter your age' name='age' value={usersEdite.age}  onChange={handelChange} className='form-control w-100'/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col mb-3">
                    <textarea type="text"  placeholder='enter your discription' name='discription' value={usersEdite.discription}  onChange={handelChange}  className='form-control w-100'/>
                    </div>
                    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{handleUpdate(usersEdite)}}>Update Now</button>
      </div>
    </div>
  </div>
</div>  
     </tbody>
   </table>   
      </div>
   
   :
   <div className='text-center'>
   <div class="spinner-border text-white" role="status">
   <span class="visually-hidden">Loading...</span>
  </div>
  </div>
}
    </div>
  </div>
</div>

</div>
  )
}
