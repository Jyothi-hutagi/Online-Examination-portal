import React from "react";
import'./Questionhtml'
import'./Questioncss'
import './Questionjs' 
const StudentDashboard= ()=>{
    return(
    <div className="category">
         <h1>Choose any one From the Categories</h1>
         <a href="/html"><button id="html">HTML</button></a><br/>
         <a href="/css"><button id="css">CSS</button></a><br/>
          <a href="/js"><button id="js">JAVASCRIPT</button></a><br/> 
        
    </div>
    );
    
};
export default StudentDashboard;