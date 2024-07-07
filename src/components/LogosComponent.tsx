import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const LogosComponent: React.FC = () => {
  const logos = [
    '/images/typescript-logo.png',
    '/images/javascript-logo.png',
    '/images/python-logo.png',
    '/images/react-logo.png',
    '/images/next-js-logo.png',
    '/images/node-js-logo.png',
    '/images/graphql-logo.png',
    '/images/express-js-logo.png',
    '/images/mongo-db-logo.png',
    '/images/mysql-logo.png',
  ];


  return (
    <div className="w-[98vw]">
      <Marquee>
        <div className="flex space-x-12 pr-12">
          {logos.map((logo, index) => (
            <div
            key={index}
              className="relative w-[80px] lg:w-[120px]  h-[50px] lg:h-[70px]"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                layout="fill"
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