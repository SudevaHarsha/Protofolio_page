import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import {FaHtml5} from "react-icons/fa";


const AboutPage = () => {

  const skills=[
    {
      logoURL:"https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png",
      skillName:"html",
      percent:90
    },
    {
      logoURL:"https://logodix.com/logo/1111675.png",
      skillName:"css",
      percent:85
    },
    {
      logoURL:"https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
      skillName:"java script",
      percent:50
    },
    {
      logoURL:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      skillName:"react js",
      percent:70
    },
    {
      logoURL:"https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
      skillName:"node js",
      percent:67
    }
  ];

  return (
    <div className="about_page">
      <Navbar />
      <div className="about_hero_section">
        <div className="about_img_container">
          <h4>waanna know more about me?</h4>
        </div>
        <div className="about_skills"> 
          {skills.map((skill)=>{
            return<>
            <div className="about_card">
              <div className='about_card_background'>
                <div className="skill_logo" style={{backgroundImage: 'url(' + skill.logoURL + ')'}}>
                  {/* <img src={skill.logoURL} alt="logo"/> */}
                </div>
                <div className="skill_name">
                  <h4>{skill.skillName}</h4>
                </div>
                <div className="skill_level" style={{'--i':skill.percent+'%'}}>
                  {/* <p>{skill.percent}</p> */}
                </div>
              </div>
            </div>
            </>
          })}
        </div>
        <div className="studies">
          <div className="hr">
          </div>  
        </div>       
          <div className="circle">       
           <img src='https://www.webefficient.agency/themes/web-efficient-2017/assets/images/og/en/servicii-implementare-frontend.png' className='circle_img'/>  
            <div className="skill_category">
              <span className='list' style={{'--v':1}}></span>
              <span className='list' style={{'--v':2}}></span>
              <span  className='list'style={{'--v':3}}>
              </span>
              <span className='list'style={{'--v':4}}>
              </span>
              <span className='list'></span>
            </div>
          </div>
  
      </div>
    </div>
  )
}

export default AboutPage;