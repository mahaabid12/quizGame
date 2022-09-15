import{useState,useEffect,useRef}from 'react';
import sound from '../../assets/audio1.mp3'
import Popup from '../Popups/popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import help from '../help/help';
import Help from '../help/help';



function Card() {




  const quiz=[
    {
      question:"العدد الناقص هو",
      instruction:"88= ...  +    55",
      type:"quiz", 
      answerOptions:[
        {
          text:"143",
          isCorrect:false
        },
        {
          text:"33",
          isCorrect:true
        },
        {
          text:"13",
          isCorrect:false
        }

      ],
      
      
    },
    {
      question:"العدد الناقص هو",
      instruction:"16   =   40 - ...",

      answerOptions:[
        {
          text:"56",
          isCorrect:true
        },
        {
          text:"24",
          isCorrect:false
        },
        {
          text:"34",
          isCorrect:false
        },
      ],
      
      
    },
    
      {
        question:"العدد الناقص هو",
        instruction:"50= 17-...",
        answerOptions:[
          {
            text:"67",
            isCorrect:true
          },
          {
            text:"33",
            isCorrect:false
          },
          {
            text:"34",
            isCorrect:false
          },
        ],
        
        
      },
      
        {
          question:"العدد الناقص هو",
          instruction:"15  =  4 -  (... +  10)",
          answerOptions:[
            {
              text:"50",
              isCorrect:false
            },
            {
              text:"29",
              isCorrect:false
            },
            {
              text:"9",
              isCorrect:true
            },
          ],
          
          
        },
        {
          question:"العدد الناقص هو",
          instruction:"41= 14   + (5  - ... )",
          answerOptions:[
            {
              text:"27",
              isCorrect:false
            },
            {
              text:"32",
              isCorrect:true
            },
            {
              text:"36",
              isCorrect:false
            },
          ],
          
          
        },
        {
          question:"أتمم الفراغات بما يناسب",
          instruction:"40/9 = .../18  ",
          answerOptions:[
            {
              text:"80",
              isCorrect:true
            },
            {
              text:"120",
              isCorrect:false
            },
            {
              text:"40",
              isCorrect:false
            },
          ],
          
          
        }





  ]

  const audio= new Audio(sound)
  useEffect(() => {
    audio.load();
  })
  


  const [start, setStart] = useState(false)
 

  const[next , setNext]= useState(false)
  const[score, setScore]=useState(0)
  const[score1, setScore1]=useState(0)
  const[score2, setScore2]=useState(0)
  const[score3, setScore3]=useState(0)
  
  const[currentQuestion, setCurrentQuestion]=useState(0)
  const[showScore , setShowScore]=useState(true)
  const[disabled, setDisabled]=useState(false)
  const [success , setSuccess]=useState(false)
  const [failure , setFailure]=useState(false)


  function handleClick(isCorrect){
      
      setNext(true)
      let changeScore=0
      if (isCorrect===true){
          changeScore= score1+10
         setScore1(changeScore)
         setSuccess(true)
        }
      console.log(changeScore)
      setDisabled(true)
  
   
   }

   function nextQuestion(){
    
     if(currentQuestion< (quiz.length-1)){
      let nextQuestion=currentQuestion+1;
      setCurrentQuestion(nextQuestion)
      setSuccess(false)
      setNext(false)
      setDisabled(false)
     }else{
       setShowScore(false)
       
     
     }}
    const [missed, setMissed]=useState("")
     const[name,setName]=useState("")
     const[begin, setBegin]=useState(false)

     function handleSubmit(event){
       event.preventDefault()
       setName(event.target.name.value)
       if (event.target.name.value==""){
         setBegin(true)
         setMissed("name")
        }else{
       setBegin(false)
       setStart(true)
       audio.play();
       console.log("ok")}

     }

     const props={
       begin,
       success, 
       name,
       missed:missed
     }

     const[nextMission, setNextMission]=useState(false)
     function nextMissionFunction(){
       setNextMission(true)
       setShowScore(true)
       setStart(false)
      }
     const questions=[
      {
        question:"=  27 -  105 ",
        answer:["78"]
      },
      {
        question:"   =  19 - 23,15",
        answer:["4,15", "4.15"]
      },
      {
        question:" = 7,1 - 15,05",
        answer: ["7,95", "7.95"]
      },
      {
        question:"= 3*5 + 25",
        answer:["40"]
      },
      {
        question:"= 7 + 3*55",
        answer:["172"]
      }

    ]
  

  const [nextButton, setNextButton]=useState(false)   
  const [currentQuiz, setCurrentQuiz]=useState(0)
  function handleSubmitForm(event){
    setBegin(false)
  event.preventDefault()
  console.log(event.target.answer.value)
  console.log(questions[currentQuiz].answer)
  if(event.target.answer.value==""){
    setBegin(true)
    setMissed("answer")
  }else{
  if( questions[currentQuiz].answer.includes(event.target.answer.value)){
    let score=score2+10
    setScore2(score)
    setSuccess(true)
  }else{
    console.log("no")
    setSuccess(false)
  }
  setNextButton(true)
}}

const[gameOver, setGameOver]=useState("")

const [thirdMission, setThirdMission]=useState(false)


function MissionNextQuestion(){
  if(currentQuiz< (questions.length-1)){
    let nextQuestion=currentQuiz+1;
    setCurrentQuiz(nextQuestion)
    setNextButton(false)}else{
      setShowScore(false)
     
      setStart(false)
    
      
    }

}

function thirdMissionFunction(){
  setThirdMission(true)
  setShowScore(true)
  setNextMission(false)

}

const numbers=[
  {
    number:310,
    answer:{
      divideBy3:false,
      divideBy2:true,
      divideBy5:true

    }
  },
  {
    number:405,
    answer:{
      divideBy3:true,
      divideBy2:false,
      divideBy5:true

    }
  },
  {
    number:10,
    answer:{
      divideBy3:false,
      divideBy2:true,
      divideBy5:true

    }
  }
  
]


const [thirdMissionCurrentQuestion , setThirdMissionCurrentQuestion]=useState(0)
const[divideBy3, setDividedBy3]=useState(false)
const[divideBy2, setDividedBy2]=useState(false)
const[divideBy5, setDividedBy5]=useState(false)
const[nextThirdButton , setNextThirdButton]=useState(false)

function thirdMissionNextQuestion(e){
  if(thirdMissionCurrentQuestion< (numbers.length-1)){
    let nextQuestion=thirdMissionCurrentQuestion+1;
    setThirdMissionCurrentQuestion(nextQuestion)
    setNextThirdButton(false)
  
  }else{
      setGameOver(true)
      setThirdMission(false)
      let scoreTotal=score1+score2+score3 
      setScore(scoreTotal)
    
      
    }

}


function handleChange3(e){
  let state=e.target.checked
  setDividedBy3(state)
 
}

function handleChange5(e){
  let state=e.target.checked
  setDividedBy5(state)
 
}

function handleChange2(e){
  let state=e.target.checked
  setDividedBy2(state)
 
}

function checkResponse(){
  let answer={
    divideBy3,
    divideBy2,
    divideBy5
  }
  console.log(numbers[thirdMissionCurrentQuestion].answer)
  console.log(answer)
  if (JSON.stringify(numbers[thirdMissionCurrentQuestion].answer)=== JSON.stringify(answer)){
    setSuccess(true)
    let score3Change= score3+10; 
    setScore3(score3Change)
  }else{
    setSuccess(false)
  }
  setNextThirdButton(true)

}

const[helpPopup , setHelpPoupup]=useState(false)
function helpPoupupFunction(){
  setHelpPoupup(true)
  console.log("help")
}




  
        return (
    

          <div className="quiz">
      
          {!start && !nextMission && !thirdMission && !gameOver &&<form onSubmit={handleSubmit} >
          <h1 className="question">مراجعة سنة سابعة أساسي</h1>
          <h3 className="question">Enter your name</h3>
          <input className="answerOption" type="text" name="name"></input>
          <button type="submit" className="startButton">Start</button>
        
          {begin && <Popup {...props} ></Popup>}
          </form>}
      
          {start  && showScore &&
          <div>
          
          <h3 className="level">level {currentQuestion+1}</h3>
          <div className="stars">
          <FontAwesomeIcon icon={faStar} className={`star ${score1 >19 ? 'yellow' :''}`} />
          <FontAwesomeIcon icon={faStar} className={`star ${score1 >39 ? 'yellow' :''}`} />
          <FontAwesomeIcon icon={faStar} className={`star ${score1 >59 ? 'yellow' :''}`} />
          </div>
          <p className="question">{quiz[currentQuestion].question}</p>
          <p className="question2">{quiz[currentQuestion].instruction}</p>
          <div className="answerOptions">
          {quiz[currentQuestion].answerOptions.map((option, index)=>(
          <button 
            
            onClick={()=>handleClick(option.isCorrect, quiz[currentQuestion].score)} disabled={disabled} className={`${!next  ? 'answerOption' : option.isCorrect ? 'answerOption valid' :'answerOption invalid'}`}>{option.text}</button>
          
          ))}
          </div>

          {next && <Popup {...props} ></Popup>}
          {next && <button className="nextButton" onClick={nextQuestion}>Next</button>}
          
       
        
       
          </div>
      }
        {!showScore && !nextMission &&<div>
        <h1 className="title">Good Job {name}</h1>
        <p className="mission">أكملت المرحلة الأولى</p>
        <div className="centerStars">
          <FontAwesomeIcon icon={faStar} className={`starCenter ${score1>19 ? 'yellow' :''}`} />
          <FontAwesomeIcon icon={faStar} className={`starCenter ${score1>39 ? 'yellow' :''}`} />
          <FontAwesomeIcon icon={faStar} className={`starCenter ${score1>59 ? 'yellow' :''}`} />
        </div>
        <button className="nextMission" onClick={nextMissionFunction}>Next Mission</button>
        </div> }

        {nextMission && showScore && <form onSubmit={handleSubmitForm}>
        <h3 className="level">level {currentQuiz+1}</h3>
        <div className="stars">
          <FontAwesomeIcon icon={faStar} className={`star ${score2 >19 ? 'yellow' :''}`} />
          <FontAwesomeIcon icon={faStar} className={`star ${score2 >39 ? 'yellow' :''}`} />
          <FontAwesomeIcon icon={faStar} className={`star ${score2 >59 ? 'yellow' :''}`} />
          </div>
        <h3 className="question">:لنحسب العبارات التالية</h3>
        <h1 className="questionInstruction">{questions[currentQuiz].question}</h1>
        <input className="textInput" type="text" name="answer"></input>
        <button type="submit" className="nextButton" hidden={nextButton}>Submit</button>
       
        {!nextButton&&begin && <Popup {...props} ></Popup>}
        {nextButton && <Popup {...props} ></Popup> }
        {nextButton && <h3 className="rightAnswer">الإجابة الصحيحة: {questions[currentQuiz].answer[0]}</h3>}
        {nextButton && <button className="nextButton" onClick={MissionNextQuestion}>Next</button>}
       </form>}

       {nextMission && !showScore  &&<div>
        <h1 className="title">Good Job {name}</h1>
        <p className="mission">أكملت المرحلة الثانية</p>
           

          <div className="centerStars">
      
          <FontAwesomeIcon icon={faStar} className={`starCenter ${score2>19 ? 'yellow' :''}`} />
          <FontAwesomeIcon icon={faStar} className={`starCenter ${score2>39 ? 'yellow' :''}`} />
          <FontAwesomeIcon icon={faStar} className={`starCenter ${score2>59 ? 'yellow' :''}`} />
          </div>
      
        <button className="nextMission"onClick={thirdMissionFunction}>Next Mission</button>
        </div> }

       {thirdMission && <div>
        <h3 className="level">level {thirdMissionCurrentQuestion+1}</h3>
        <div className="stars">
          <FontAwesomeIcon icon={faStar} className={`star ${score3 >9 ? 'yellow' :''}`} />
          <FontAwesomeIcon icon={faStar} className={`star ${score3 >19 ? 'yellow' :''}`} />
          <FontAwesomeIcon icon={faStar} className={`star ${score3 >29 ? 'yellow' :''}`} />
          </div>

        
        <h3 className="question">اختر  الإجابات الصحيحة</h3>
        <h1 className="questionInstruction">{numbers[thirdMissionCurrentQuestion].number} العدد</h1>
        <div class="row">
        <div class="column"><div className="checkBoxOption">
        <input className="checkBox" type="checkBox" name="dividedBy3" onChange={handleChange3} disabled={nextThirdButton}/><label className="checkboxText">يقبل القسمة على 3 </label> </div>
        <div class="column">
        <div className="checkBoxOption">
          <input className="checkBox" type="checkBox"  name="dividedBy2" onChange={handleChange2} disabled={nextThirdButton}/><label className="checkboxText">يقبل القسمة على 2</label></div>
        </div>
       <div class="column">    <div className="checkBoxOption">
        <input className="checkBox" type="checkBox"  name="dividedBy5" onChange={handleChange5} disabled={nextThirdButton}/><label className="checkboxText">يقبل القسة على 5</label></div></div>
      </div>
      </div>
        
      
    
        
        <button type="submit" className="nextButton" onClick={checkResponse} hidden={nextThirdButton}>Submit</button>
        {nextThirdButton && <button className="nextButton"  onClick={thirdMissionNextQuestion}>Next</button>}
        {nextThirdButton && <Popup {...props}></Popup> }
        


       </div>}
     


       {gameOver&&!thirdMission  &&  <div id="game-over"><div className="game-over-content">
       <div className="over-text-cont">
       <h1 data-heading="Game Over">Game Over</h1>
        <h2>Total Score:{score}</h2>
        <button className="playAgain" onClick={() => window.location.reload(false)}>Play Again</button>
        </div>
        </div>
        </div>
       }
       </div>

       



      
         
      
          
      
        
      
          
        
        
        )

      
    
  ;
}

export default Card;