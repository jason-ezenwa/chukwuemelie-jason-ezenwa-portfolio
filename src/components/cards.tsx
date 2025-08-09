import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  descriptionParagraphs: string[];
  image: string;
  githubLink?: string;
  seeLiveLink?: string;
}

export const ProjectCard = ({
  title,
  descriptionParagraphs,
  image,
  githubLink,
  seeLiveLink,
}: ProjectCardProps) => {
  return (
    <div
      className="mb-12 border-[1px] w-full border-[#E4E5E7] backdrop-blur-sm bg-white
     flex flex-col items-start rounded-md lg:rounded-lg shadow-md hover:shadow-lg min-h-[487px] sm:min-h-[507px] lg:min-h-[540px] max-h-[527px] sm:max-h-[507px] lg:max-h-[540px] 2xl:min-h-[587px] relative">
      <div className="py-3 px-3 lg:py-4 sm:px-6 w-full space-y-3">
        <div>
          <h3 className="text-ppmblack text-lg font-bold">{title}</h3>
        </div>
        <div>
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index} className="text-sm w-[90%] text-gray-500">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="px-3 sm:px-6 w-full flex space-x-4">
        {githubLink && (
          <Link href={githubLink} target="_blank">
            <div className="flex space-x-2 items-center">
              <p className="text-ppmblack font-semibold">Github Repository</p>
              <div className="relative w-4 h-4">
                <Image src="/images/arrow-right.svg" alt="Arrow right" fill />
              </div>
            </div>
          </Link>
        )}
        {seeLiveLink && (
          <Link href={seeLiveLink} target="_blank">
            <div className="flex space-x-2 items-center">
              <p className="text-ppmblack font-semibold">See Live</p>
              <div className="relative w-4 h-4">
                <Image src="/images/arrow-right.svg" alt="Arrow right" fill />
              </div>
            </div>
          </Link>
        )}
      </div>
      <div className="absolute bottom-0 w-full h-[200px] sm:h-[300px] 2xl:h-[355px] border-t-[1px] border-t-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="rounded-b-2xl"
        />
      </div>
    </div>
  );
};

interface BlogCardProps {
  title: string;
  descriptionParagraphs: string[];
  image: string;
  link: string;
}

export const BlogCard = ({
  title,
  descriptionParagraphs,
  image,
  link,
}: BlogCardProps) => {
  return (
    <div
      className="mb-12 border-[1px] w-full border-[#E4E5E7] bg-white backdrop-blur-sm
     flex flex-col items-start rounded-md lg:rounded-lg shadow-md hover:shadow-lg min-h-[510px] sm:min-h-[567px] lg:min-h-[550px] max-h-[527px] sm:max-h-[527px] lg:max-h-[560px] 2xl:min-h-[607px] relative">
      <div className="py-3 px-3 lg:py-4 sm:px-6 w-full space-y-3">
        <div>
          <h3 className="text-ppmblack text-lg font-bold">{title}</h3>
        </div>
        <div>
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index} className="text-sm w-[90%] text-gray-500">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="px-3 sm:px-6 w-full flex space-x-4">
        <Link href={link} target="_blank">
          <div className="flex space-x-2 items-center">
            <p className="text-ppmblack font-semibold">Read Here</p>
            <div className="relative w-4 h-4">
              <Image src="/images/arrow-right.svg" alt="Arrow right" fill />
            </div>
          </div>
        </Link>
      </div>
      <div className="absolute bottom-0 w-full h-[200px] sm:h-[300px] 2xl:h-[355px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="rounded-b-2xl"
        />
      </div>
    </div>
  );
};
