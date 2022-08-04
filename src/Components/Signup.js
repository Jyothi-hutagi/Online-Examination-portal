import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Signup= ()=>{

    let navigate = useNavigate()
    const[isSubmit,setSubmit]=React.useState(false)
    const [user,setUser]=useState({name:'',email:'',password:'',repassword:'',date:'',textarea:''})
    const inputHandler=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        setUser({...user,[name]:value})
    }
    
     
    const submitHandler=(e)=>{
        e.preventDefault();
        if(isSubmit&&(user.name==='' && user.email==='' && user.password==='' && user.repassword ===''&& user.date ==='' && user.textarea===''))
        {
            alert('Enter your details')
           
         } 
         else{
            navigate("/Login", { replace: true });
           
         }
        }
        return(
           <div className="container" >
            <div className="row">
                <div className="col-md-6 col-md-offset-3 form-div ">
                <form id="form-register" onSubmit={submitHandler}>
                <h1 className="text-center">REGISTER</h1>
                
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
                <label>Confirm password </label>
                <input className=" form-control form-control-lg" type="password"  name="repassword"onChange={inputHandler} />
               </div>

               <div className="form-group">
                 <label >Passing out year</label>
             <input  className=" form-control form-control-lg" type='date'  name="date" onChange={inputHandler} />
             </div>

             <div className="form-group">
             <label> Area of experties</label>
             <textarea  className=" form-control form-control-lg"  rows='4' cols="50" name="textarea" onChange={inputHandler} ></textarea>
             </div>

             <div className="form-group">
             <button id="btn1" onClick={()=>setSubmit(true)} className="btn btn-primary">Submit</button>
             </div>
             <h5 className="text-center"> Already have account? &nbsp; <a href='/Login'>Login</a></h5>
        </form>
        </div>
        </div>
        </div>
            
            
        
    )
}
    export default Signup;
