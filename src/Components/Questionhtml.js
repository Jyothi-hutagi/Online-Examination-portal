import React ,{Component} from "react"
import Question from "./Question";
import Answer from "./Answer";

export  default class Quiz extends Component {

   state={
      questions:{
         1:"Q1: What does HTML stand for?",
         2:"Q2: What is the font-size of the h1 heading tag?",
         3:"Q3: Which of the following attributes is used to add link to any element?",
         4:"Q4: What is the purpose of using div tags in HTML?",
         5:"Q5: Which of the following tags is used to make a portion of text italic in HTML?",
         6:"Q6: Which of the following tags is used to add a line-break in HTML?",
         7:"Q7: Which of the following is the correct way to add background color in HTML?",
         8:"Q8: Which among the following is correct HTML code for making a checkbox?",
         9:"Q9: Which tag is used to add an header in HTML5 table?",
         10:"Q10:Which of the following elements can be used in HTML to create a table?"

      },

      answers:{
         1:{
             1:"Hypertext Machine language",
             2:"Hypertext and links markup language",
             3:"Hypertext Markup Language",
             4:"Hightext machine language"
         },
         2:{
              1: " 3.5 em",
              2:" 2.17 em",
              3:"1.5 em",
              4:" 2em"
              
         },
         3:{
               1:"link",
               2:"ref",
               3:"href",
               4:"newref"
         },
         4:{
               1:"For creating Different styles",
                2:"For creating different sections",
               3:"For adding headings",
              4:"For adding titles"
         },

         5:{
                1:"<italic>",
               2:"<style= “i”>",
               3:"<i>",
               4:"<style=“italic”>"
         },
         6:{
            
                1:"<br>",
                2:"<break>",
                3:" </break>",
                4:"</br>"
             
         },
         7:{
               1:"<body color = “green”>",
               2:"<body bg-color = “green”>",
               3:"<body style = “background-color=green”>",
               4:"<body style = “background-color: green;”>"
         },
         8:{    
               1:" <checkbox>",
               2:"<input type = 'checkbox'>",
               3:" <check>",
               4:"<input type ='check'>", 
                
         },
         9:{
               1:" <theader>",
               2:"<h1>",
               3:"<th>",
               4:"<header>"

         },
         10:{
            1:"<table> , <tbody> , <trow>",
            2: "<table> , <tb> , <trow>",
            3:"<table> , <tbody> , <tr>",
            4:" All of the above"
            
         }
      },
       correctAnswers:{
          1: '3',
          2: '4',
          3: '3',
          4: '2',
          5: '3',
          6: '1',
          7: '4',
          8: '2',
          9:'3',
          10:'3'
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
           <div className="Content" >
              <div>
              {step <= Object.keys(questions).length ?
              (<>
              <Question question={questions[step]}/>
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
   