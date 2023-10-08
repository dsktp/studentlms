import React from 'react'
import { Routes,Route } from 'react-router-dom'
// Component
// import Header from '../../components/Header/header'
// import Footer from '../../components/Footer/footer'
// Pages
import Dash from './dash'
import Register from './register'
import AddUser from './add'
import Sidebar from './Sidebar'
import Student from './student'
import Login from './login'
import Courses from './courses'
import Attendance from './attendance'
import AddStudent from '../addstudent'
export default function Index() {
  return (
    <>
    <Routes>
    <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/' element={<Dash/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/Add' element={<AddUser/>}/>
        <Route path='/Student' element={<Student/>}/>
        <Route path='/addstudent' element={<AddStudent/>}/>

    </Routes>
    </>
  )
}