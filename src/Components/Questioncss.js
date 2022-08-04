import React ,{Component} from "react"
import Question from "./Question";
import Answer from "./Answer";
export  default class Quiz1 extends Component {

   state={
      questions:{
         1:"Q1: Which of the below is the abbreviation of CSS ?",
         2:"Q2:Which of the correct syntax to add the external stylesheet in CSS ?",
         3:"Q3: Which of the below CSS properties is used to change the background color of CSS ?",
         4:"Q4: Which of the below CSS class is used to change the text color of CSS ?",
         5:"Q5: Which of the below is correct syntax when we put a line over text in CSS ?",
         6:"Q6: Which below property in CSS is used to set the indentation of the first line in a block of text ?",
         7:"Q7: Which of the below CSS properties represent the order of flex items in the grid container ?",
         8:"Q8: How do we set the default width of the font in CSS ?",
         9:"Q9: Which element is used to represent the transparency of an element in CSS ?",
         10:"Q10:Which of the below CSS property is used to add a stroke in the text ?"
      },

      answers:{
         1:{
             1:"Cascade sheets style",
             2:"Color and style sheets",
             3:"Cascading style sheets",
             4:"Coded Style Sheet"
         },
         2:{
              1:"<style src = quiz.css>",
              2:" <style src = quiz.css>",
              3:"<stylesheet> quiz.css </stylesheet>",
              4:"<link rel='stylesheet' type='quiz/css' href='quiz.css'>"
              
         },
         3:{
             1:"bg color",
            2:"color-background",
            3:"background-color",
            4:"color"
         },
         4:{
            1:" background-color",
            2:"color",
            3:"color-background",
            4:"None of the above"
         },

         5:{
             1:" text-decoration: line",
             2:" text-decoration: none",
             3:" text-decoration: overline",
             4:"text-decoration: underline"
         },
         6:{
             1:"text-indent property",
             2:"text-underlne-property",
             3:"text-decoration none",
             4:"text-overflow property"
         },
         7:{
             1:"order",
             2:"float",
             3:"overflow",
             4:"All of the above"
         },
         8:{
             1:" font-stretch",
            2:"font-weight",
            3:"text-transform",
            4:"font-variant"
         },
         9:{
             1:"Hover",
             2:"Opacity",
            3:"Transparent",
            4:"Overlay"
         },
         10:{
              1:"text-stroke",
              2:"text-transform",
              3:"text-decoration",
              4:"None of the above"
         }
      },
       correctAnswers:{
          1: '3',
          2: '4',
          3:  '3',
          4:  '2',
          5: '3',
          6:'1',
          7:'1',
          8:'1',
          9:'2',
          10:'1'

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
         
        );

     }
}
   