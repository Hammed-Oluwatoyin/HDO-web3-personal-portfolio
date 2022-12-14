import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './About.scss';


const About = () => {
  // const abouts = [
  //   {title: 'Web Development', description:"I am a good Web Developer", imgUrl: images.about01},
  //    {title: 'UI/UX Developer', description:"I am a good UI/UX Developer", imgUrl: images.about02},
  //     {title: 'Blockchain Developer', description:"I am a good blockchain Developer", imgUrl: images.about03},
  //      {title: 'Smart Contract Development', description:"I am a good Smart Contract Developer", imgUrl: images.about04}
  // ]

   const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);




  return (
    <>
      <h2 className="head-text">I know that <span>sophisticated and reliable smart contracts</span> means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default  AppWrap(About, 'about') 

