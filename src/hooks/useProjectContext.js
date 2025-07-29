import {useContext} from "react";
import { ProjectContext } from "../context/ProjectContest";

export const useProjectContext=()=>{
    const context =useContext(ProjectContext);
    if(!context){
        throw new Error (
            "you must call useProject inside  aProjectContext provider"
        );
    }


    return context;
};