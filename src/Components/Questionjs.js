import React ,{Component} from "react"
import Question from "./Question";
import Answer from "./Answer";

export  default class Quiz2 extends Component {

   state={
      questions:{
         1:"Q1: Inside which HTML element do we put the JavaScript?",
         2:"Q2:Where is the correct place to insert a JavaScript?",
         3:"Q3:Is it necessary for the external script file to contain a <script> tag?",
         4:"Q4:What is the correct syntax for referring to an external script called 'gfg.js'?",
         5:"Q5: How many ways are there with which we can declare a variable in javascript?",
         6:"Q6: Is a variable named 'apple' same as 'Apple' in javascript?",
         7:"Q7:What is the correct precedence of the operator in javascript?",
         8:"Q8: What will be the output of the following code snippet let gfg = ”GeeksforGeeks” console.log(gfg.charAt(4))?",
         9:"Q9: Which of the following represent falsy values in javascript?",
         10:"Q10:The advantages of using strict mode in javascript are ?"
      },

      answers:{
         1:{
             1:" <javascript>",
             2:"<js>",
             3:"<src>",
             4:"<script>"
         },
         2:{
             1:"Both the head section and the body section are correct",
            2:"The head section",
            3:"The body section",
            4:"None of the above"
              
         },
         3:{
              1:" Yes",
              2:" No",
              3:" Depends on the type of include",
              4:" None of the above"
         },
         4:{
             1:" <script name='gfg.js'>",
             2:" <script href='gfg.js'>",
             3:" <script src='gfg.js'>",
             4:"None of these"
         },

         5:{
             1:"Only one",
              2:" Three",
              3:"Infinitely many",
              4:"None of the above"
         },
         6:{
             1:"Yes",
             2:"No",
             3:"Only when we use 'strict'",
             4:"None of the above"
         },
         7:{
              1:" () [] . ++",
              2:" ++ . [] ()",
              3:". ++ [] ()",
              4:"() ++ . ["
         },
         8:{
              1:"o",
              2:"f",
              3:"k",
              4:"s"
         },
         9:{
             1:"false",
             2:" ' ' ",
            3:"undefined",
            4:"All of the above"
         },
         10:{
            1:"Strict mode eliminates some JavaScript silent errors by changing them to throw errors.",
            2:"It disables features that are confusing or poorly thought out.",
            3:"Strict mode makes it easier to write “secure” JavaScript.",
            4:"All of the above"
         }
      },
       correctAnswers:{
          1: '4',
          2: '1',
          3:  '2',
          4:  '3',
          5: '2',
          6:'2',
          7:'1',
          8:'4',
          9:'4',
          10:'4'

       },
          correctAnswer:0,
          clickedAnswer:0,
          step:1,
          score:0
     }
       
     checkAnswer = answer =>{
        const {correctAnswers,step,score} = this.state;
        if(answer === correctAnswers[step]){
           this.setState({
              score: score + 1,
              correctAnswer: correctAnswers[step],
              clickedAnswer:answer
           });

        }else{
           this.setState({
              correctAnswer:0,
              clickedAnswer:answer
           });
        }
     }

     nextStep = step=>{
        this.setState({
           step:step+1,
           correctAnswer:0,
           clickedAnswer:0
        });
     }
     render(){
        let{questions,answers,correctAnswer,clickedAnswer,score,step}=this.state;
        return(
           <div className="Content">
              <div>
              {step <= Object.keys(questions).length ?
              (<>
              <Question question={questions[step]} 
              />
            <Answer
            answer={answers[step]}
            step={step}
            checkAnswer={this.checkAnswer}
            correctAnswer={correctAnswer}
            clickedAnswer={clickedAnswer}
            />
            
            <button
             className="NextStep"
             disabled={
                clickedAnswer && Object.keys(questions).length>= step
                ? false:true
             }
             onClick={()=>this.nextStep(step)}
             >
               Next Question
            </button>
            </>):(
               <div className="finalpage">
                  <h1>Congratulations you have completed the quiz!</h1>
                  <p className="text">Your score is : {score} &nbsp; of &nbsp; {Object.keys(questions).length}</p>
                  <p className="text">Thank you!!!</p>
                  <a href="/StudentDashboard"><button id="dash">Dashboard</button></a>
                   <a href="/"><button id="logout">Logout</button></a>

                  </div>
                 )
               
          }
         </div>
       </div>
         
        );

     }
}
   