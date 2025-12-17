import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  descriptionParagraphs: string[];
  link: string;
}

const BlogCard = ({ title, descriptionParagraphs, link }: BlogCardProps) => {
  return (
    <Card
      className={cn(
        "group h-full transition-all duration-300 hover:shadow-lg",
        "border-border bg-card"
      )}>
      <CardContent className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex-1 space-y-3 md:space-y-4">
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
        </div>
        <div className="pt-4 md:pt-6 border-t border-border w-full">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-3 text-foreground hover:text-muted-foreground font-medium group/link transition-all duration-300">
            <span className="text-sm md:text-base">Read article</span>
            <FaArrowRight className="w-3 lg:w-3.5 h-3 lg:h-3.5 transform group-hover/link:translate-x-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
