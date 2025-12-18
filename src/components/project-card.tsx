import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-300 hover:shadow-lg",
        "border-border"
      )}>
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

      <CardContent className="p-6 md:p-8 space-y-3 md:space-y-4">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground group-hover:text-muted-foreground transition-colors duration-300">
          {title}
        </h3>

        <div className="space-y-2 md:space-y-3">
          {descriptionParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-body-large text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-6 md:px-8 pb-6 md:pb-8 w-full">
        <div className="flex flex-row gap-3 md:gap-4 pt-3 md:pt-4 w-full">
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground font-medium transition-all duration-300 group/github">
              <span className="text-sm md:text-base">Github</span>
              <FaGithub className="w-3 lg:w-3.5 h-3 lg:h-3.5 group-hover/github:translate-x-1 transition-transform duration-300" />
            </Link>
          )}

          {seeLiveLink && (
            <Link
              href={seeLiveLink}
              target="_blank"
              className="w-fit inline-flex items-center gap-2 text-foreground hover:text-muted-foreground font-medium transition-all duration-300 group/live border border-border rounded-md px-4 py-2 hover:bg-accent">
              <span className="text-sm md:text-base">See live</span>
              <FaArrowRight className="w-3 lg:w-3.5 h-3 lg:h-3.5 group-hover/live:translate-x-0.5 transition-transform duration-300" />
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
