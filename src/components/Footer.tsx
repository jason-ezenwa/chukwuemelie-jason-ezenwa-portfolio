import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = ({className}: {className?: string}) => {
  return (
    <footer
      className={`bottom-0 flex flex-col items-center
        text-[#62646A]
      w-full px-6 sm:px-12 py-6 lg:px-32 ${className || ""}`}>
      <div
        className="w-full flex flex-col sm:flex-row justify-between"
      >
        <div className="flex items-center space-x-2 mb-4">
         Copyright © 2024 — Chukwuemelie Jason Obumse
        </div>
        <div className="flex">
          <div className="flex space-x-5  items-center mr-8">
            <Link href="mailto:emelieobumse100@gmail.com">
              <MdEmail size={25} />
            </Link>
            <Link href="https://github.com/jason-ezenwa">
              <FaGithub size={25} />
            </Link>
            <Link href="https://www.linkedin.com/in/chukwuemelie-obumse/">
              <FaLinkedin size={25} />
            </Link>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="relative w-[20px] h-[20px]">
              <Image
                src='/images/globe-icon.svg'
                alt="globe-icon"
                fill
              />
            </div>
            <div>
              <p>English</p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
