import React, { useState } from 'react'
import "./Navbar.scss";
import { HiMenu, HiMenuAlt4, HiX } from "react-icons/hi"
import { motion } from 'framer-motion';

const Navbar = () => {
   const [toggle, setToggle] = useState(true);
  return (
    <nav  className= "app__navbar">
      <div  className="app__navbar-logo">
        HAMMED
      </div>
      
           <ul className="app__navbar-links">
        {['Home', 'services', 'Experience', 'Portfolio', 'Testimonials'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <button>Contact</button>

      <div className="app__navbar-menu">
        
            <HiMenuAlt4/>
{toggle && ( <motion.div 
            whileInView= {{ x: [300, 0]}} 
            transition={{duration: 0.85, ease: "easeOut"}}
            >
                hammed
            </motion.div>)}
           


      </div>
      
    </nav>
  )
}

export default Navbar