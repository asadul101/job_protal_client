import { useContext } from "react"
import AuthContext from "../Context/AuthContext"

const useAuth=()=>{
   const countex=useContext(AuthContext)
   return countex;
}
 
export default useAuth;