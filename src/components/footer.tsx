import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { cn } from "@/lib/utils";
import { GITHUB_URL, EMAIL_URL, LINKEDIN_URL } from "@/utils/constants";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={cn(
        // Layout
        "w-full flex flex-col items-center justify-between",
        // Size and spacing
        "section-spacing gap-2 lg:gap-6",
        // Text
        "text-[#62646A]",
        // Effects and interactive states
        "transition-all duration-300",
        className
      )}>
      <div className="flex">
        <div className="flex space-x-5  items-center mr-8">
          <Link href={EMAIL_URL}>
            <MdEmail className="size-6 lg:size-7" />
          </Link>
          <Link href={GITHUB_URL}>
            <FaGithub className="size-6 lg:size-7" />
          </Link>
          <Link href={LINKEDIN_URL}>
            <FaLinkedin className="size-6 lg:size-7" />
          </Link>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="relative w-[20px] h-[20px]">
            <Image src="/images/globe-icon.svg" alt="globe-icon" fill />
          </div>
          <div>
            <p>English</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-sm sm:text-base">
        {`Copyright © ${new Date().getFullYear()} — Chukwuemelie Jason Obumse`}
      </div>
    </footer>
  );
};

export default Footer;
