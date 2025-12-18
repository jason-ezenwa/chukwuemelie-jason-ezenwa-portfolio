import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { cn } from "@/lib/utils";

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
        "transition-all duration-300"
      )}>
      <div className="flex">
        <div className="flex space-x-5  items-center mr-8">
          <Link href="mailto:chukwuemelie.ezenwa@gmail.com">
            <MdEmail className="size-6 lg:size-7" />
          </Link>
          <Link href="https://github.com/jason-ezenwa">
            <FaGithub className="size-6 lg:size-7" />
          </Link>
          <Link href="https://www.linkedin.com/in/chukwuemelie-obumse/">
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
