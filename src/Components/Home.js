import React from "react";
// import { Link } from "react-router-dom";

 
const Home= ()=>{
    return(
        <div className="main" id="main1">
        <h1>Welcome to Online Examination Portal</h1>
        <h3>Just go ahead and give your best shot <br/><br/>All the best for your exams!!</h3>
        <a href="/Signup"><button id="btn">Signup</button></a>
        </div>
    );

};
    
export default Home;