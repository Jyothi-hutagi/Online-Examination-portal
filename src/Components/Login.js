import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
  let navigate = useNavigate()
    const[isSubmit,setSubmit]=React.useState(false)
    const [user,setUser]=useState({name:'',email:'',password:''})

    const inputHandler=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        setUser({...user,[name]:value})
    }
      
    
    const submitHandler=(e)=>{
        e.preventDefault()
        if(isSubmit&& (user.name!=='' && user.email!=='' && user.password!==''))
        {
          
           navigate("/StudentDashboard", { replace: true });
         }
         else
         {
             alert("Please enter details")
         }
        }
        

      return(
       <div className="container" >
        <div className="row">
                <div className="col-md-6 col-md-offset-3 form-data ">
                <form id="form-register" onSubmit={submitHandler}>
                <h1 className="text-center">LOGIN</h1>
                
                <div className="form-group">
                <label>Enter full name</label>
                <input className=" form-control form-control-lg" type="text"  name="name" onChange={inputHandler}/>
               </div>

               <div className="form-group">
               <label>Enter your email</label>
               <input  className=" form-control form-control-lg" type="email"  name="email" onChange={inputHandler}  />
               </div>

                <div className="form-group">
                <label> Enter password</label>
                <input className=" form-control form-control-lg" type="password"  name="password" onChange={inputHandler} />
                </div>

               

             <div className="form-group">
             <button id="btn2" onClick={()=>setSubmit(true)} className="btn btn-primary">Submit</button>
             </div>
        </form>
        </div>
        </div>
         </div>
      )
    }

 export default Login;