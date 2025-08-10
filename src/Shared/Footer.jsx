import React from 'react';
import Typewriter from 'typewriter-effect';

const Footer = () => {
  return (
    <div>
      this is footer
      <Typewriter
        options={{
          strings: ['Hello World'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Footer;
