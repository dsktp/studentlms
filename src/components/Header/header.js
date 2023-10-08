import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from "firebase/auth";
import {auth} from '../../config/firebase'

export default function header() {
  const handelLogout=()=>{
    console.log("logout button clicked")
    signOut(auth)
    .then(()=>{
      console.log('user signed out')
    })
   .catch((err )=>{
    console.error(err)
   })
   }
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Register</Link>
        </li>
        <li className="nav-item">
        <Link to="/Login" className="nav-link active" aria-current="page">Login</Link>
        </li>
        <li className="nav-item">
        <Link to="/Add" className="nav-link active" aria-current="page">AddUser</Link>
        </li>
        <li className="nav-item">
        <Link to="/dashboard" className="nav-link active" aria-current="page">Dashboard</Link>
        </li>
        <li className="nav-item">
        <Link to="/Student" className="nav-link active" aria-current="page">Student</Link>
        </li>
        <li className="nav-item">
        <Link to="/Sidebar" className="nav-link active" aria-current="page">Sidebar</Link>
        </li>
        {/* <li className="nav-item"> */}
          {/* <a className="nav-link" href="#">Link</a> */}
        {/* </li> */}
        {/* <li className="nav-item dropdown"> */}
          {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
            {/* Dropdown */}
          {/* </a> */}
          {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown"> */}
            {/* <li><a className="dropdown-item" href="#">Action</a></li> */}
            {/* <li><a className="dropdown-item" href="#">Another action</a></li> */}
            {/* <li><hr className="dropdown-divider"/></li> */}
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          {/* </ul> */}
        {/* </li> */}
        {/* <li className="nav-item"> */}
          {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
        {/* </li> */}
      </ul>
      <form className="d-flex">
        <button className="btn btn-danger" onClick={handelLogout}>Logout</button>
      </form>
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
    </>
  )
}
