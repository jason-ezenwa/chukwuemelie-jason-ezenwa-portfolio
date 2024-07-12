import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const LogosComponent: React.FC = () => {
  const logos = [
    '/images/grouped-core-skills.PNG'
  ];


  return (
    <div className="w-[98vw]">
      <Marquee>
        <div className="flex space-x-8">
          {logos.map((logo, index) => (
            <div
            key={index}
              className="relative w-[750px] sm:w-[800px] lg:w-[1350px] h-[67px] sm:h-[74px] lg:h-[110px]"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                fill
                sizes="100vw"
              />
            </div>
          ))}
        </div>
    </Marquee>
    </div>
  );
};

export default LogosComponent;