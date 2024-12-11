
import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/friebase.init';
const googlePorvider=new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loder, setLoder] = useState(true)

   const creatUsers=(email,password)=>{
      setLoder(true)
      return createUserWithEmailAndPassword(auth,email,password)
   }
   const handelLoing=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
   }
   const handleSinOut=()=>{
      return signOut(auth)
   }
   const handleGoogle=()=>{
      return signInWithPopup(auth,googlePorvider)
   }
   useEffect(()=>{
      const unsribcre=onAuthStateChanged(auth,crruentUSer=>{
         setUser(crruentUSer)
         setLoder(false)
         console.log(crruentUSer);
      })
      return()=>{
         unsribcre()
      }
   },[])

   const information = {
      user,
      loder,
      creatUsers,
      handelLoing,
      handleGoogle,
      handleSinOut
   }
   return (
      <AuthContext.Provider value={information}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;