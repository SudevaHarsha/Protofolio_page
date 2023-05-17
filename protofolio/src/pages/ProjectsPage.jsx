import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import Slider from './Projectslider';
import slides from '../projects';
import {IoCloseOutline} from "react-icons/io5";



const ProjectsPage = () => {

  const [slideIndex,setSlideIndex]=useState();
  const [display,setDisplay]=useState(false);

  const Singlecard=(index)=>{
    const newItem=slides.find((item)=>item.index===index);
    console.log(newItem.des);
    setSlideIndex(index);
    setDisplay(true);
  }

  const Removecard=(index)=>{
    setDisplay(false);
    console.log(index);
  }

  return (
    <>
    <Navbar />
    <div className='project_container'>
      <Slider Singlecard={Singlecard} Removecard={Removecard} />
      {
        display&& <>
        <div className="project_details_container">
          <div className='card'>
            <div className="close_button">
              <IoCloseOutline onClick={Removecard} />
            </div>
            <div className='deatiles'>
              <h1 className='detail_title'>{slides[slideIndex].title}</h1>
              <p className='detail_des'>{slides[slideIndex].des}</p>
              {
                slides[slideIndex].techs.map((tech)=>{
                  return <h4 className='detail_tech'>{tech}</h4>
                })
              }
            </div>
          </div>
        </div>
        </>
      }
    </div>
    
    </>
  )
}

export default ProjectsPage;