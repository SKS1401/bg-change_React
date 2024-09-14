import { useState } from 'react';
import './Bg.css' ;
import { TextPart } from './TextPart';
export function BgChange() {
    const [bgstyle,setbgstyle]=useState(
        {
            backgroundColor : 'white',
            color : 'black',
        }
    );
    const OnRedClick=()=> {
        if(bgstyle.backgroundColor==='red')
            return;
        setbgstyle(
            {
                backgroundColor: 'red',
                color: 'white',
            }
        );
    }
    const OnGreenClick= ()=> {
        if(bgstyle.backgroundColor==='green')
            return;
        setbgstyle(
            {
                backgroundColor: 'green',
                color: 'white',
            }
        );
    }  
    const OnBlueClick= ()=> {
        if(bgstyle.backgroundColor==='blue')
            return;
        setbgstyle(
            {
                backgroundColor: 'blue',
                color: 'white',
            }
        );
    } 
    const OnWhiteClick= ()=> {
        if(bgstyle.backgroundColor==='white')
            return;
        setbgstyle(
            {
                backgroundColor: 'white',
                color: 'black',
            }
        );
    } 
    const OnBlackClick= ()=> {
        if(bgstyle.backgroundColor==='black')
            return;
        setbgstyle(
            {
                backgroundColor: 'black',
                color: 'white',
            }
        );
    } 


    return (
    <div>
     <div  className='button-container'>
        <button className='b1 r' onClick={OnRedClick}>Red</button>
        <button className="b1 g" onClick={OnGreenClick}>Green</button>
        <button className="b1 bl" onClick={OnBlueClick} >Blue</button>
        <button className="b1 w" onClick={OnWhiteClick}>White</button>
        <button className="b1 b" onClick={OnBlackClick}>Black</button>
       
    </div> 
     <div style={bgstyle}  className="text">
          <TextPart/>
    </div>
    </div>
      
   
    );
       
    
}