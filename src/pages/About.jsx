import React from 'react';
import '../styles/About.css';
import mascotAbout from '../assets/mascot-about.png';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <section className="p-4">
        <p>Welcome to our Kids Toy Review Site! We're passionate about sharing top-rated, fun, and educational toys that your children will love.</p>
        <p>As Amazon affiliates, we curate the best toys to save you time and money. Happy shopping!</p>
        <img
          src={mascotAbout}
          alt="About Mascot"
          className="float-right ml-4 mb-2 rounded-xl shadow-md"
          style={{ width: '350px', maxWidth: '100%' }}
        />
      </section>
    </div>
  );
};
 
export default About;
