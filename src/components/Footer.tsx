import Image from "next/image";
import Link from "next/link";

const Footer = ({className}: {className?: string}) => {
  return (
    <footer
      className={`bottom-0 flex flex-col items-center
       space-y-4 lg:space-y-6 text-[#B5B6BA]
      w-full px-6 py-6 lg:px-32 ${className || ""}`}>
      <div
        className="w-full flex flex-row justify-between"
      >
        <div className="flex items-center space-x-2">
          <div className="relative w-[121px] h-[24px]">
            <Image
              src='/images/ppm-footer-logo.svg'
              alt="Peppermint logo"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex  text-[#62646A]">
          <div className="flex space-x-5  items-center mr-8">
            <Link href="mailto:getpeppermint@gmail.com">
              <div className="relative w-[22px] h-[23px]">
                <Image
                  src='/images/email-icon.svg'
                  alt="linkedin-icon"
                  layout="fill"
                />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/company/peppermint-ppm/">
              <div className="relative w-[20px] h-[20px]">
                <Image
                  src='/images/linkedin-icon.svg'
                  alt="linkedin-icon"
                  layout="fill"
                />
              </div>
            </Link>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="relative w-[20px] h-[20px]">
              <Image
                src='/images/globe-icon.svg'
                alt="globe-icon"
                layout="fill"
              />
            </div>
            <div>
              <p>English</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start w-full space-x-4 text-[#898989] text-sm">
        {/* {<Link href={'/'}>
          <p>Terms</p>
        </Link>} */}
        <Link href={'/privacy-policy'}>
          <p>Privacy</p>
        </Link>
        {/* {<Link href={'/'}>
          <p>Blog</p>
        </Link>} */}
      </div>
    </footer>
  );
}

export default Footer;
