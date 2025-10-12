import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

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
    <div className="card-base card-hover group overflow-hidden">
      <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      <div className="p-6 md:p-8 space-y-3 md:space-y-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
          {title}
        </h3>

        <div className="space-y-2 md:space-y-3">
          {descriptionParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-body-large text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex gap-3 md:gap-4 pt-3 md:pt-4">
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 font-medium transition-all duration-300 group/github">
              <span className="text-sm md:text-base">Github</span>
              <FaGithub className="w-3 lg:w-3.5 h-3 lg:h-3.5 group-hover/github:translate-x-1 transition-transform duration-300" />
            </Link>
          )}

          {seeLiveLink && (
            <Link
              href={seeLiveLink}
              target="_blank"
              className="btn-secondary inline-flex items-center gap-2 group/live">
              <span className="text-sm md:text-base">See live</span>
              <FaArrowRight className="w-3 lg:w-3.5 h-3 lg:h-3.5 group-hover/live:translate-x-0.5 transition-transform duration-300" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
