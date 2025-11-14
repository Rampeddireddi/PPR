import React from "react";

const Banner = () => {
  const items = [
    "C++ Programmer",
    "MERN Stack Developer",
    "AWS Certified Developer – Associate",
    "Aspiring Software Engineer",
    "Tech Enthusiast",
     "C++ Programmer",
    "MERN Stack Developer",
    "AWS Certified Developer – Associate",
    "Aspiring Software Engineer",
    "Tech Enthusiast",
  ];

  return (
    <div className="w-full flex justify-center py-30">
      
      {/* Outer layer – rotates the banner */}
      <div className="rotate-banner">

      

          {/* Your fancy banner */}
          <div className="fancy-banner">
            <div className="fancy-track animate-scroll animation-hover-pause">
              {[...items, ...items, ...items].map((text, i) => (
                <div key={i} className="fancy-pill mx-4">
                  <span className="fancy-text">{text}</span>
                </div>
              ))}
            </div>
          </div>

        
      </div>

    </div>
  );
};

export default Banner;
