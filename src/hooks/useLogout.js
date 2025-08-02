import{useAuthContext} from "../hooks/useAuthContext";
import { useProjectContext } from "./useProjectContext";

export const useLogout=()=>{
    const{dispatch:logoutDispatch}=useAuthContext();
    const{dispatch:projectDispatch}=useProjectContext();

    const logout=()=>{
        //clear 
localStorage.removeItem("user");

        //dispatch
        logoutDispatch({type:"LOGOUT"});
        projectDispatch({type:'SET_PROJECTS',payload:null});
    };
    return{logout};
}