import Link from 'next/link';
import React from 'react';

interface StickyDivProps {
  text: string;
  textColor: string;
  bgColor: string;
  link: string;
}

const StickyDiv: React.FC<StickyDivProps> = ({ text, textColor, bgColor, link }) => {
  return (
    <Link href={link} target='_blank'>
      <div className={`p-2 text-[13px] text-center ${textColor} ${bgColor} hover:bg-[#6b6c6b] rounded-md font-[600] shadow-lg`}>
        {text}
      </div>
    </Link>
  );
};

interface StickyBottomRightProps {
  children: React.ReactNode;
}

const StickyBottomRight: React.FC<StickyBottomRightProps> = ({ children }) => {
  return (
		<div className="z-20 fixed bottom-0 md:bottom-16 right-0 md:right-1 m-2 space-y-2 md:space-y-2 flex flex-col items-end animate-bounce hover:animate-none">
			{children}
		</div>
	);
};

export { StickyBottomRight, StickyDiv };
