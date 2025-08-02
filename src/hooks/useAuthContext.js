import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext=()=>{
    const context =useContext(AuthContext);
    if(!context){
        throw new Error (
            "you must call uase auth inside  a use authContext provider"
        );
    }


    return context;
};