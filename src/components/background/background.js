import React from 'react';
import './background.css'
import Card from '../card/card';


function Background(){

    return(

      <div className="container">


            <div className="small-glows"></div>

            <div className="glow"><div className="sun"></div></div>

            <div className="waves" >
                <div className="top_wave"></div>
                <div className="wave1"></div>
                <div className="wave2"></div>
                <div className="wave3"></div>
                <div className="wave4"></div>
            </div>
                 
            <div className="mounts">
                <div className="mount1"></div>
                <div className="mount2"></div>
            </div>
           
            <div className="clouds"></div>

            <div className="noise"> <Card></Card> </div>

            <div class="squirtle  jump">
            <div class="tail"></div>
            <div class="body">
              <div class="stomach"></div>
              <div class="shell"></div>
            </div>
            <div class="head">
              <div class="eye"></div>
              <div class="eye"></div>
              <div class="mouth"></div>
            </div>
            <div class="leg back"></div>
            <div class="leg"></div>
            <div class="arm back"></div>
            <div class="arm"></div>
          </div>
         
          

        </div>

    )

}
export default Background;