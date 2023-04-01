import React from 'react';
import { useState,useEffect } from 'react';
import Navbar from '../Navbar';

const HomePage = () => {

  const texts=["dev","de","we"];
  const [index,setIndex]=useState(0);
  const [letter,setLetter]=useState(0);
  const [result,setResult]=useState("");
  const [del,setDel]=useState(false);


  useEffect(()=>{    
    changeLetters();
  },[letter]);


  const changeLetters=()=>{
    const id=setTimeout(()=>{
      let incletter=letter+1;
      setLetter(incletter);
      setResult(result+texts[index].charAt(letter));
      if(letter>=texts[index].length){
        setLetter(0);
        setResult("");
        console.log(index);
        const i=texts.length-1==index ? 0 :index+1;
        setIndex(i);
      }
      /* if(index>=texts.length){
        setIndex(0)
      } */
    },2000);
    /* return ()=>clearTimeout(id); */
  }

  return (
    <>
      <Navbar/>
      <div className="hero_section">
        <div className='img_container'> 
        </div>
        <div className="hero_text">
          <h1 className="fixed_text">I Am Sudeva harsha</h1>
          <div className="changing_text">
            <h1 className="animate_text">{result}</h1>
          </div>
        </div>
      </div>
    </>
  )
};

export default HomePage;