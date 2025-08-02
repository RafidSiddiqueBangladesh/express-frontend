import React from 'react'
import { useEffect } from 'react';
import ProjectDetails from '../components/ProjectDetails';
import ProjectForm from '../components/ProjecForm';
import { useProjectContext } from '../hooks/useProjectContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {
 const {projects,dispatch}=  useProjectContext();
 const{user}=useAuthContext();
useEffect(()=>{
   const getAllProjects=async()=>{
   const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/projects`,{
    headers:{
      Authorization:`Bearer ${user.token}`,
    }
   });
   const json=await res.json();

   if(res.ok){
    dispatch({type:"SET_PROJECTS",payload:json});
   }
  };
  if(user){
getAllProjects();
  }
  
},[dispatch,user]);

  return (
    <div  className='home container mx-auto py-20 grid grid-cols-3 gap-10'>
    <div className='left col-span-2'>

     < h2 className='text-4xl font-medium text-sky-400 mb-10'>
     {projects.length <1 ?'No project':'All projects'}
      </h2>
      <div className="project-wrapper flex gap-10 flex-wrap">    
    {
    projects && projects.map((project) => {return <ProjectDetails key={project._id} project={project} />
    })
     }

   </div>

    </div>
     <ProjectForm/>
     </div>
  )
}

export default Home;