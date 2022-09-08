import{useState,useEffect}from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Background from './components/background/background';
import Card from './components/card/card';

import sound from './assets/audio1.mp3';

function App() {


  const audio= new Audio(sound)
 
  useEffect(() => {
    
    document.body.classList.add('bg');
    audio.load();
  



}, []);



return(
  <Background></Background>


)
}

  




  //react fonctional component export 


   

    

  

  
  
  



export default App;
