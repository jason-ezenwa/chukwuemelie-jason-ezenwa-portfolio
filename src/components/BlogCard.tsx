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
      className="mb-12 border-[1px] w-full border-[#E4E5E7] bg-white
     flex flex-col justify-between items-start rounded-2xl shadow-md hover:shadow-lg p-5 min-h-[220px]">
      <div className="w-full space-y-3">
        <div>
          <h3 className="text-[#171717] text-base sm:text-lg md:text-xl font-bold line-clamp-2">
            {title}
          </h3>
        </div>
        <div>
          {descriptionParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm md:text-base w-[95%] text-gray-600 mt-2">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="w-full mt-4 pt-2 border-t border-gray-100">
        <Link
          href={link}
          target="_blank"
          className="flex items-center space-x-2 text-[#171717] hover:text-gray-700 transition-colors">
          <FaBookOpen className="text-xs sm:text-sm" />
          <span className="text-sm sm:text-base font-medium">Read Article</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
