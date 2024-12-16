
import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/friebase.init';
import axios from 'axios';
const googlePorvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loder, setLoder] = useState(true)

   const creatUsers = (email, password) => {
      setLoder(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const handelLoing = (email, password) => {
      setLoder(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
   const handleSinOut = () => {
      return signOut(auth)
   }
   const handleGoogle = () => {
      setLoder(true)
      return signInWithPopup(auth, googlePorvider)
   }
   useEffect(() => {
      const unsribcre = onAuthStateChanged(auth, crruentUSer => {
         setUser(crruentUSer)
         console.log(crruentUSer);
         console.log(crruentUSer?.email);
         if (crruentUSer?.email) {
            const user = { userEmail: crruentUSer.email }
            axios.post('https://job-protal-server-sooty.vercel.app/jwt', user, { withCredentials: true })
               .then(res => {
                  console.log(res.data);
                  setLoder(false)
               })
         }
         else {
            axios.post('https://job-protal-server-sooty.vercel.app/logOut', {}, { withCredentials: true })
               .then(res => {
                  console.log(res.data)
                  setLoder(false)
               })
         }


      })
      return () => {
         unsribcre()
      }
   }, [])

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