import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Sidebar from './Frontend/Sidebar'

// import Header from '../components/Header/header'
// import Footer from '../components/Footer/footer'
// import Register from './Frontend/register'
// import Login from './Frontend/login'
// import Dashboard from './Frontend/dash'
// import { useAuthContext } from '../context/AuthContext'
// import PrivateRoute from '../components/PrivateRouting/PrivateRoute'
// import AddUser from './Frontend/add'
export default function CustomRoutes() {

  return (
    <>
    <BrowserRouter>
    <div style={{display: 'flex'}}>
    <Sidebar/>
    <main>
    <Routes>
        <Route path='/*' element={<Frontend/>}/>
        {/* <Route path='/Login' element={!isAuthenticate? <Login/> : <Navigate to= "/dashboard"/> } /> */}
     
        {/* <Route path='/dashboard' element={<PrivateRoute Component={Dashboard}/>} /> */}
    </Routes>
    </main>
    </div>
    {/* <Footer/> */}
    </BrowserRouter>
    </>
  )
}