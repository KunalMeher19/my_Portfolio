"use client";

import { useEffect } from 'react';
export default function SEOOptimization() {
  useEffect(() => {
    const metaTags = [
      { name: 'geo.region', content: 'IN-MP' },
      { name: 'geo.placename', content: 'Indore' },
      { name: 'geo.position', content: '22.7196;75.8577' },
      { name: 'ICBM', content: '22.7196, 75.8577' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' },
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.name = tag.name;
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    return () => {
      metaTags.forEach(tag => {
        const meta = document.querySelector(`meta[name="${tag.name}"]`);
        if (meta) document.head.removeChild(meta);
      });
    };
  }, []);

  return (
    <>
      <div className="sr-only" aria-hidden="true">
        <h2>About Ardhendu Abhishek Meher</h2>
        <p>
          Ardhendu Abhishek Meher is a aspiring full-stack developer India, with expertise in React, vite, 
          Node.js, express.js, and UI/UX design. With over 6+ months of experience, Ardhendu has completed more than 10 projects 
          for clients across various industries. 
        </p>
        <h3>Ardhendu's Skills</h3>
        <ul>
          <li>React.js and vite Development</li>
          <li>Node.js and Express.js Backend Development</li>
          <li>UI/UX Design and Implementation</li>
          <li>Tailwind CSS Expertise</li>
          <li>Full-Stack Web Development</li>
          <li>Java Programming</li>
          <li>JavaScript and TypeScript</li>
          <li>Frontend Development</li>
          <li>Responsive Web Design</li>
        </ul>
        <h3>Portfolio and Projects by Ardhendu</h3>
        <p>
          Ardhendu's portfolio showcases various projects including Velo.new (an AI-powered platform), 
          Bytecode (Online coding platform) , Moddy Player (Suggest songs according to mood), and Interactive Bio Page.
        </p>
        <h3>Contact Information</h3>
        <p>Email: meherardhenduabhishek@gmail.com</p>
        <p>Social Media: GitHub, Twitter, Discord</p>
      </div>
    </>
  );
} 