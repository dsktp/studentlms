import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../../config/firebase'
import { Link } from 'react-router-dom'
import '../../scss/_bootstrap.scss'
export default function Sidebar() {
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
     <nav id="sidebar">
     <Link to='/login' className='btn btn-success ' style={{textAlign:"end"}}>Login</Link>\   <Link to='/Register' className='btn btn-primary '>Register</Link>
     
     <h1 className='fs-5 mb-5 mt-5'>Sidebar</h1>
     
      <ul className="list-unstyled">
        <li>
          <Link to="/dash">Dashboard</Link>
        </li>
        <li>
          <Link to="Student">Student</Link>
        
        </li>
        <li>
          <Link to="courses">Courses</Link>
        
        </li>
        <li>
          <Link to="attendance">Attendance</Link>
        
        </li>
      </ul>
      <button className="btn btn-danger" onClick={handelLogout} style={{marginTop:300, marginLeft:150}}>Logout</button>
    </nav>
    </>
  )
}
























// import React from 'react';
// import { Layout, Space } from 'antd';
// // import Link from 'antd/es/typography/Link';
// const {  Sider, Content } = Layout;
// // const headerStyle = {
// //   textAlign: 'center',
// //   color: '#fff',
// //   height: 64,
// //   paddingInline: 50,
// //   lineHeight: '64px',
// //   backgroundColor: '#7dbcea',
// // };
// const contentStyle = {
//   textAlign: 'center',
//   minHeight: 100,
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#108ee9',
// };
// const siderStyle = {
// textDecoration: 'none',
//     textAlign: 'center',
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#3ba0e9',
// };
// // const footerStyle = {
// //   textAlign: 'center',
// //   color: '#fff',
// //   backgroundColor: '#7dbcea',
// // };
// const App = () => (
  
//     <Layout>
//       {/* <Header style={headerStyle}>Header</Header> */}
//       <Layout hasSider>
//         <Sider style={siderStyle}>
//         <div className='Sidebar d-flex flex-column justify-content-between bg-dark text-white  vh-100'>
//         <a className='align-items-center d-flex fs-5'>
//     <span>Sidebar</span>
//         </a>
//         <ul>
//             <li className='py-2'>
//                 <Link  to='/Dashboard' className='nav-link text-white fs-5'>   
//                 <span>Dashboard</span>
//                 </Link>
//             </li>
//         </ul>
//         <ul>
//             <li className='py-1'>
//                 <Link  className='nav-link text-white fs-5'>
//                     <span>Student</span>
//                 </Link>
//             </li>
//         </ul>
//         <ul>
//             <li className='py-1'>
//                 <Link  className='nav-link text-white fs-5'>
//                     <span>Courses</span>
//                 </Link>
//             </li>
//         </ul>
//         <ul>
//             <li py-1>
//                 <Link  className='nav-link text-white fs-5'>
//                     <span>Attendance</span>
//                 </Link>
//             </li>
//         </ul>
//     </div>
//         </Sider>
//         <Content  style={contentStyle } className='w-100'>Content</Content>
//       </Layout>
//       {/* <Footer style={footerStyle}>Footer</Footer> */}
//     </Layout>
// );
// export default App;