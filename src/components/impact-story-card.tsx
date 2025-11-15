import Link from 'next/link';
import {
  FaBriefcase,
  FaUser,
  FaCode,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

interface ImpactStoryCardProps {
  title: string;
  role: string;
  techStack: string;
  duration: string;
  keyContributions: string[];
  link: string;
}

const ImpactStoryCard = ({
  title,
  role,
  techStack,
  duration,
  keyContributions,
  link,
}: ImpactStoryCardProps) => {
  return (
    <div className="card-base card-hover group h-full">
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex items-start gap-3 mb-4 md:mb-6">
          <div className="flex-1">
            <h3 className="lg:w-[80%] text-base md:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300 mb-1">
              {title}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="flex items-start gap-3">
            <FaUser className="lg:h-[1lh] w-4 text-gray-500 text-xs md:text-sm" />
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wide leading-[100%]">
                Role
              </p>
              <p className="text-sm md:text-base font-medium text-gray-700">
                {role}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaCode className="lg:h-[1lh] w-4 text-gray-500 text-xs md:text-sm" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide leading-[100%]">
                Tech Stack
              </p>
              <p className="text-sm md:text-base font-medium text-gray-700">
                {techStack}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaClock className="lg:h-[1lh] w-4 text-gray-500 text-xs md:text-sm" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide leading-[100%]">
                Duration
              </p>
              <p className="text-sm md:text-base font-medium text-gray-700">
                {duration}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-sm md:text-base font-semibold text-gray-900 mb-3">
            Key Contributions:
          </p>
          <ul className="space-y-2">
            {keyContributions.map((contribution, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-body-large text-gray-600">
                <FaCheckCircle className="text-gray-400 text-sm mt-1.5 flex-shrink-0" />
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 md:pt-6 border-t border-gray-100 mt-4 md:mt-6">
          <Link
            href={link}
            className="inline-flex items-center gap-3 text-gray-900 hover:text-gray-600 font-medium group/link transition-all duration-300">
            <span className="text-sm md:text-base">Read in full</span>
            <FaArrowRight className="w-3 lg:w-3.5 h-3 lg:h-3.5 transform group-hover/link:translate-x-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImpactStoryCard;
