import React from "react";
import Marquee from "react-fast-marquee";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiMysql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const LogosComponent: React.FC = () => {
  const logos = [
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiExpress, name: "Express.js", color: "#000000" },
    { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
    { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#31648C" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade gradients at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="py-2">
        <Marquee speed={30} gradient={false} pauseOnHover={true}>
          <div className="flex items-center space-x-12 md:space-x-16 lg:space-x-24 px-12">
            {logos.map((logo, index) => {
              const IconComponent = logo.icon;
              return (
                <div
                  key={index}
                  className="group relative flex-shrink-0 group flex flex-col items-center gap-1">
                  <IconComponent
                    color={logo.color}
                    className="w-8 h-8 lg:w-12 lg:h-12 filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                    title={logo.name}
                  />
                  <span
                    className={`text-xs lg:text-sm text-gray-500 group-hover:text-gray-900 transition-colors duration-300`}>
                    {logo.name}
                  </span>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default LogosComponent;
