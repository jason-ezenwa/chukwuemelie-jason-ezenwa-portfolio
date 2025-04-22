import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  descriptionParagraphs: string[];
  image: string;
  githubLink?: string;
  seeLiveLink?: string;
}

const ProjectCard = ({
  title,
  descriptionParagraphs,
  image,
  githubLink,
  seeLiveLink,
}: ProjectCardProps) => {
  return (
    <div
      className="border-[1px] w-full border-[#E4E5E7] bg-white
     flex flex-col items-start rounded-md lg:rounded-lg shadow-md hover:shadow-lg overflow-hidden">
      <div className="py-4 px-4 sm:px-6 w-full space-y-3">
        <div>
          <h3 className="text-[#171717] text-base md:text-lg font-bold">
            {title}
          </h3>
        </div>
        <div>
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index} className="text-sm w-[95%] text-gray-600 mt-2">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="px-4 sm:px-6 w-full flex space-x-4 mt-2 mb-4 z-10">
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            className="flex items-center space-x-2 text-[#171717] transition-colors hover:underline">
            <span className="text-sm sm:text-base font-medium">Github</span>
            <FaGithub className="text-base sm:text-lg" />
          </Link>
        )}

        {seeLiveLink && (
          <Link
            href={seeLiveLink}
            target="_blank"
            className="flex items-center space-x-2 text-[#171717] transition-colors hover:underline">
            <span className="text-sm sm:text-base font-medium">See live</span>
            <FaExternalLinkAlt className="text-xs sm:text-sm" />
          </Link>
        )}
      </div>

      <div className="w-full h-[200px] sm:h-[300px] 2xl:h-[355px] border-t-[1px] border-t-gray-100 relative">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
