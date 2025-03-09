import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const LogosComponent: React.FC = () => {
  const logos = [
    '/images/typescript-logo.png',
    '/images/javascript-logo.png',
    '/images/python-logo.png',
    '/images/node-js-logo.png',
    '/images/react-logo.png',
    '/images/next-js-logo.png',
    '/images/express-js-logo.png',
    '/images/graphql-logo.png',
    '/images/mysql-logo.png',
    '/images/mongo-db-logo.png',
  ];


  return (
    <div className="w-[98vw]">
      <Marquee>
        <div className="flex space-x-4 md:space-x-16 xl:space-x-20 pr-4">
          {logos.map((logo, index) => (
            <div
            key={index}
              className="relative w-[47px] sm:w-[60px] lg:w-[60px] h-[40px] sm:h-[50px] lg:h-[50px]"
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