import React, { useState } from 'react'
import "./Navbar.scss";
import {  HiMenuAlt4, HiX } from "react-icons/hi"
import { motion } from 'framer-motion';
import {Link} from "react-scroll";
import Resume from "./Hammed-Blockchain-Resume.pdf"

const Navbar = () => {
   const [toggle, setToggle] = useState(false);
  return (
    <nav  className= "app__navbar">
      <div  className="app__navbar-logo">
        HAMMED
      </div>
      
           <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills','testimonial', 'contact'].map((item) => (
          <Link spy={true} to={item} smooth={true} activeClass="activeClass" key={item}>
           <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
          </Link>
         
        ))}
      </ul>
      
        <a href = {Resume} download> <button>Download CV</button></a>
      

      <div className="app__navbar-menu">
        
            <HiMenuAlt4  onClick={() => setToggle(true)}/>
           {toggle && ( <motion.div 
            whileInView= {{ x: [300, 0]}} 
            transition={{duration: 0.85, ease: "easeOut"}}
            >
              <HiX onClick={() => setToggle(false)}/>
                  <ul>
        {['home', 'about', 'work', 'skills','testimonial', 'contact'].map((item) => (
           <Link spy={true} to={item} smooth={true} activeClass="activeClass" key={item}>
           <li key={item} onClick={() => setToggle(false)}>
            
            <a href={`#${item}`}>{item}</a>
          </li>
          </Link>
         
        ))}
      </ul>
      
            </motion.div>)}
           


      </div>
      
    </nav>
  )
}

export default Navbar