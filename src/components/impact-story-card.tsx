import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ImpactStoryCardProps {
  title: string;
  role: string;
  techStack: string;
  duration: string;
  keyContributions: string[];
  link: string;
}

const ImpactStoryCard = ({
  title,
  role,
  techStack,
  duration,
  keyContributions,
  link,
}: ImpactStoryCardProps) => {
  return (
    <Card
      className={cn(
        "group h-full transition-all duration-300",
        "border-border bg-card",
      )}>
      <CardContent className="p-5 md:p-6 flex flex-col h-full">
        <h3 className="lg:w-[80%] text-base lg:text-xl font-semibold text-foreground transition-colors duration-300 mb-4">
          {title}
        </h3>

        <div className="grid grid-cols-1 gap-2 mb-4">
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide leading-[100%]">
              Role
            </p>
            <p className="text-sm md:text-base text-foreground">{role}</p>
          </div>

          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide leading-[100%]">
              Tech Stack
            </p>
            <p className="text-sm md:text-base text-foreground">{techStack}</p>
          </div>

          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide leading-[100%]">
              Duration
            </p>
            <p className="text-sm md:text-base text-foreground">{duration}</p>
          </div>
        </div>

        <div className="flex-1">
          <p className="font-mono text-xs uppercase text-muted-foreground mb-2">
            Key Contributions
          </p>
          <ul className="list-disc pl-4 space-y-1">
            {keyContributions.map((contribution, index) => (
              <li key={index} className="text-body text-muted-foreground">
                {contribution}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4 md:pt-6 border-t border-border w-full">
          <Link
            href={link}
            className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground font-medium group/link transition-all duration-300">
            <span className="text-sm md:text-base">Read in full</span>
            <FaArrowRight className="w-3 lg:w-3.5 h-3 lg:h-3.5 transform group-hover/link:translate-x-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactStoryCard;
