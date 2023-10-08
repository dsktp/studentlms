// import React ,{useContext,createContext,useEffect,useState} from 'react'
// import { auth } from '../config/firebase';
// import { onAuthStateChanged } from "firebase/auth";


// const AuthContext = createContext()

// export default function AuthContextProvider({Children}) {
//  const [user,setUser]=useState({})
//  const [isAuthenticate,setIsAuthenticate]= useState(false)
//  useEffect(()=>{
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/auth.user
//         //   const uid = user.uid;
//         //   console.log(uid)
//         //   console.log(user)
//           setUser(user)
//           setIsAuthenticate(true)
//           // ...
//         } else {
//           // User is signed out
//           // ...
//         }
//       });
//  })   
//  return (
//     <>
//     <AuthContext.Provider value={{}}>
//         {Children}
//     </AuthContext.Provider>
//     </>
//   )
// }
// export const useAuthContext=()=>{
//     return useContext(AuthContext)
//   }