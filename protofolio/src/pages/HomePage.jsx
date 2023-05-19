import React from 'react';
import { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import useLogout from '../hooks/logout';
import { useNavigate,Link } from 'react-router-dom';


const HomePage = () => {

  const texts=["developer","designer","web animator"];
  const [index,setIndex]=useState(0);
  const [letter,setLetter]=useState(0);
  const [result,setResult]=useState("");
  const [deleting,setDeleting]=useState(false);
  const [delay,setDelay]=useState(300-Math.random()*100)

  const logout = useLogout();
  const navigate = useNavigate();
  const signOut =async () =>{
    await logout();
    navigate('/login');
  }
  /* var widthsvg="3000";
  var xsvg="20"; */
/*   var svgtext="Sudeva Harsha" 
  
  const setsvgtime=()=>{
    const svgtime=setTimeout(()=>{
      svgtext="SH";
    },2000);
    return ()=>clearTimeout(svgtime);
  }
  
  
  useEffect(()=>{    
    setsvgtime();
  },[svgtext]); */

  useEffect(()=>{    
    changeLetters();
  },[letter,deleting]);
 

  const changeLetters=()=>{
    const id=setTimeout(()=>{
      if(letter<texts[index].length && !deleting){
        let incletter=letter+1;
        setLetter(incletter);
        /* let res=texts[index].charAt(letter); */
        setResult(result+texts[index].charAt(letter));
      }
      /* const j=texts[index].length && !deleting ? true :false;
      setDeleting(j); */
      if(letter>=texts[index].length && !deleting){
        setDeleting(true);
        /* DeleteLetters(); */
      }
      if(deleting){
        let decletter=letter-1;
        setLetter(decletter);
        setResult(texts[index].substring(0,letter));
      }
    
      if(letter===0 && deleting){
        /* setLetter(0); */
        setDeleting(false);
        setResult("");
        console.log(index);
        const i=texts.length-1===index ? 0 :index+1;
        setIndex(i);
      }
      /* if(index>=texts.length){
        setIndex(0)
      } */
    },delay);
    return ()=>clearTimeout(id);

    
  }


  return (
    <div className='parent'>
    <div className="display">
      <Navbar/>
        <div className="hero_section">
          <div className='img_container'> 
          </div>
          <div className="hero_text">
            <h1 className="fixed_text">I Am Sudeva harsha</h1>
            <div className="changing_text">
              <h1 className="animate_text">i am a <span className='result'>{result}</span></h1>
            </div>
            <div className="about_me">
              <p className="paragraph">hi i am an passionate web developer and an eager developer to learn and know about new technologies and frameworks</p>
            </div>
          </div>
  {/*         <div className='s_container'> */}
            
          {/* </div> */}
          <svg width="300" height="300">
            <text className='ending' x="50%" y="70%" fill="tranparent" textAnchor='middle'>sh</text>
          </svg>        
        </div>
        </div>
      <svg viewBox='0 0 1350 600'>
          <text id="starting" className='starting' x="50%" y="40%" width="200" height="200" fill="tranparent" textAnchor='middle'>
            <tspan>Sudeva</tspan>
            <tspan x="50%" dy="150">Harsha</tspan>
            </text>        
      </svg>
      <button onClick={signOut}>sign out</button>
      <Footer/>
    </div>
  )
};

export default HomePage;