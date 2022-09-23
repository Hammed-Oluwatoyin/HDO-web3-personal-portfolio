import React from 'react';
import { BsTwitter, BsInstagram,BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a  href="https://twitter.com/hammed_tuhlyeen"><BsTwitter/></a>  
    </div>
    <div>
      <a href="https://github.com/Hammed-Oluwatoyin"><BsGithub /></a>   
    </div>
    <div>
      <a href="https://www.linkedin.com/in/hammed-dauda-520a0318a/"><BsLinkedin/></a>    
    </div>
      <div>
        <a href="https://www.instagram.com/hammed_tuhlyeen/"><BsInstagram/></a>
    </div>
  </div>
);

export default SocialMedia;