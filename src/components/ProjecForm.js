import React, { useState } from 'react'
import { useProjectContext } from '../hooks/useProjectContext';

const ProjecForm = () => {
const[title,setTitle]=useState("");
const[tech,setTech]=useState("");
const[budget,setBudget]=useState("");
const[duration,setDuration]=useState("");
const[manager,setManager]=useState("");
const[dev,setDev]=useState("");
const[error,setError]=useState(null);
const{dispatch}=useProjectContext();

const handleSubmit=async(e)=>{
    e.preventDefault();


    //post
    const projectObj={title,tech,budget,duration,manager,dev};

    //post req
     const res=await fetch('http://localhost:5000/api/projects',{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(projectObj),
        
     });
     const json = await res.json();
    //if not 
    if(!res.ok){
        setError(json.error);
    }
    //reset
    if(res.ok){
        setTitle('');
        setTech('');
        setBudget('');
        setDuration('');
        setManager('');
        setDev('');
        setError(null);
        dispatch({type:"CREATE_PROJECT",payload:json});
        
    }
}





  return (
   < form className='project form  flex flex-col gap-5' onSubmit={handleSubmit}>
   < h2 className='text-4xl font-medium text-sky-400 mb-10'> Add a new  Projects</h2>

    <div className='form-control flex flex-col gap-2'>
     <label
     htmlFor='title'className='cursor-pointer hover:text-sky-400 duration-300'>Project title</label>
     <input  value={title}
     onChange={(e)=>setTitle(e.target.value)}type='text' placeholder='Enter project title' id='title'
     className='bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300'/>
   </div>
   
 <div className='form-control flex flex-col gap-2'>
     <label htmlFor='tech'className='cursor-pointer hover:text-sky-400 duration-300'>technologies</label>
     <input  value={tech}
     onChange={(e)=>setTech(e.target.value)}
     type='text' placeholder='Enter tech react redux' id='tech'
     className='bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300'/>
   </div>
   
    <div className='form-control flex flex-col gap-2'>
     <label htmlFor='budget'className='cursor-pointer hover:text-sky-400 duration-300'>Budget </label>
     <input type='number'  value={budget}
     onChange={(e)=>setBudget(e.target.value)}
     placeholder='Enter project budget in US dollar' id='budget'
     className='bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300'/>
   </div>
   
    <div className='form-control flex flex-col gap-2'>
     <label htmlFor='duration'className='cursor-pointer hover:text-sky-400 duration-300'>Duration in weeks</label>
     <input type='number'
      value={duration}
     onChange={(e)=>setDuration(e.target.value)}
     placeholder='1 week' id='duration'
     className='bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300'/>
   </div>
   
    <div className='form-control flex flex-col gap-2'>
     <label htmlFor='manager'className='cursor-pointer hover:text-sky-400 duration-300'>Manager</label>
     <input type='text'
      value={manager}
     onChange={(e)=>setManager(e.target.value)}
     placeholder='give name ' id='manager'
     className='bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300'/>
   </div>
   
    <div className='form-control flex flex-col gap-2'>
     <label htmlFor='dev'className='cursor-pointer hover:text-sky-400 duration-300'>Dev</label>
     <input type='text' 
      value={dev}
     onChange={(e)=>setDev(e.target.value)}
     placeholder='dev name ' id='dev'
     className='bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300'/>
   </div>
   

   <button  type="submit" className='bg-sky-400 text-slate-900 py-3 rounded-lg hover:bg-sky-50'> Add Project</button>
   {error && <p className='bg-rose-500/20 rounded-lg p-5 text-rose-500 border-rose-500'>{error}</p>}
   
   
   </form>
  )
}

export default ProjecForm