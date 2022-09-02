import{useState,useEffect,useRef}from 'react';
import sound from '../../assets/audio1.mp3'
import Popup from '../Popups/popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



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
  const inputRef = useRef(null);
  let name=""


  const [start, setStart] = useState(false)
  function handleStart(e){
    e.preventDefault();
    name=inputRef.current.value
    console.log(name)
    console.log("start")
    setStart(true)
    audio.play();
    console.log('ok')
  }

  const[next , setNext]= useState(false)
  const[score, setScore]=useState(0)
  const[currentQuestion, setCurrentQuestion]=useState(0)
  const[showScore , setShowScore]=useState(true)
  const[disabled, setDisabled]=useState(false)
  const [success , setSuccess]=useState(false)
  const [failure , setFailure]=useState(false)


  function handleClick(isCorrect){
      
      setNext(true)
      let changeScore=0
      if (isCorrect===true){
          changeScore= score+10
         setScore(changeScore)
         setSuccess(true)
        }
      console.log(changeScore)
      setDisabled(true)
      console.log(name)
  
   
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
     
     }

    

    
  
    
    
    
    }



  
        return (
    

          <div className="quiz">
      
          {!start && <div >
          <h3 className="question">Enter your name</h3>
          <input className="answerOption" type="text"  ref={inputRef}></input>
          <button  className="startButton"  onClick={handleStart}>Start</button></div>}
      
          {start  && showScore &&
          <div>
          
          <h3 className="level">level {currentQuestion+1}</h3>
          <div className="stars">
          <FontAwesomeIcon icon={faStar} className={`star ${score>29 ? 'yellow' :''}`} />
          <FontAwesomeIcon icon={faStar} className={`star ${score>59 ? 'yellow' :''}`} />
          <FontAwesomeIcon icon={faStar} className={`star ${score>89 ? 'yellow' :''}`} />
          </div>
          <p className="question">{quiz[currentQuestion].question}</p>
          <p className="question2">{quiz[currentQuestion].instruction}</p>
          <div className="answerOptions">
          {quiz[currentQuestion].answerOptions.map((option, index)=>(
          <button 
            
            onClick={()=>handleClick(option.isCorrect, quiz[currentQuestion].score)} disabled={disabled} className={`${!next  ? 'answerOption' : option.isCorrect ? 'answerOption valid' :'answerOption invalid'}`}>{option.text}</button>
          
          ))}
          </div>

          {next && <Popup name={name}></Popup>}
          
        
          
        
          {next && <button className="nextButton" onClick={nextQuestion}>Next</button>}
          
       
        
       
          </div>
      }
          {!showScore && <div id="game-over"><div className="game-over-content">
                <div className="over-text-cont">
                    <h1 data-heading="Game Over">Game Over</h1>
                    <h2>Total Score:{score}</h2>
                    <button className="playAgain" onClick={() => window.location.reload(false)}>Play Again</button>
                </div>
                </div>
      
          </div>}

      
         
      
          
      
        
      
          </div>
        
        
        )

      
    
  ;
}

export default Card;