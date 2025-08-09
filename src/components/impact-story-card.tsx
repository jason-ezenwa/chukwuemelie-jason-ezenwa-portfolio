import Link from 'next/link';
import {
  FaBriefcase,
  FaUser,
  FaCode,
  FaClock,
  FaArrowRight,
} from 'react-icons/fa';

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
    <div
      className="mb-6 border-[1px] w-full border-[#E4E5E7] bg-white
     flex flex-col justify-between items-start rounded-md lg:rounded-lg shadow-md hover:shadow-lg p-6 h-full">
      <div className="w-full space-y-4">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center gap-2 text-[#171717]">
            <h3 className="text-base md:text-lg font-bold">{title}</h3>
          </div>

          <div className="flex flex-col space-y-2 lg:min-h-[100px]">
            <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 text-gray-600">
              <FaUser className="text-sm" />
              <p className="text-sm">Role: {role}</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 text-gray-600">
              <FaCode className="text-sm" />
              <p className="text-sm">Tech Stack: {techStack}</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 text-gray-600">
              <FaClock className="text-sm" />
              <p className="text-sm">Duration: {duration}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700">
            Key Contributions:
          </p>
          <ul className="list-disc pl-5 mt-1">
            {keyContributions.map((contribution, index) => (
              <li key={index} className="text-sm text-gray-600">
                {contribution}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full mt-4 pt-3 border-t border-gray-100">
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-[#171717] font-medium hover:underline">
          <span>Read in full</span>
          <FaArrowRight className="text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default ImpactStoryCard;
