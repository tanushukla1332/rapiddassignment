import React, { useState, useEffect } from 'react';
import Foot from './Footerdata.module.css';

function Footer() {
  const text = [
    'Figma, the design collaboration tool Bringing creativity and teamwork to rule.',
    'Start aligned with the figma',
    'Start desginized with the figma',
  ];

  const [textUpdate, setUpdateText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdateText((textUpdate) => (textUpdate + 1) % text.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className={Foot.footerWrapper}>
      <h1>{text[textUpdate]}</h1>
    </div>
  );
}

export default Footer;
