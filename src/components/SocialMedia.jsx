import React from 'react';
import { BsTwitter, BsInstagram,BsGithub, BsFacebook } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <BsFacebook/>
    </div>
    <div>
      <BsInstagram />
    </div>
      <div>
      <BsGithub />
    </div>
  </div>
);

export default SocialMedia;