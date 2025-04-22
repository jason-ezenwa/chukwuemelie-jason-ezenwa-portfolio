import Link from 'next/link';
import { FaBookOpen } from 'react-icons/fa';

interface BlogCardProps {
  title: string;
  descriptionParagraphs: string[];
  link: string;
}

const BlogCard = ({ title, descriptionParagraphs, link }: BlogCardProps) => {
  return (
    <div
      className="border-[1px] w-full border-[#E4E5E7] bg-white
     flex flex-col justify-between items-start rounded-md lg:rounded-lg shadow-md hover:shadow-lg p-5 min-h-[220px]">
      <div className="w-full space-y-3">
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

      <div className="w-full mt-4 pt-2 border-t border-gray-100">
        <Link
          href={link}
          target="_blank"
          className="flex items-center space-x-2 text-[#171717] transition-colors hover:underline">
          <span className="text-sm sm:text-base font-medium">Read article</span>
          <FaBookOpen className="text-xs sm:text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
