import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Impact Stories", href: "/impact-stories" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        // Size and spacing
        "h-20",
        // Layout
        "fixed top-1.5 left-2.5 right-2.5 z-50 flex items-center container-spacing",
        // Border
        "border border-border rounded-2xl",
        // Background
        "bg-background/80 backdrop-blur-md",
        // Effects and interactive states
        "transition-all duration-300 shadow-md"
      )}>
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            // Text
            "text-2xl font-bold text-foreground tracking-tight",
            // Effects and interactive states
            "hover:scale-105 transition-transform duration-300"
          )}>
          CJO
        </div>
        <nav>
          <ul className="flex space-x-10">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    // Text
                    "text-foreground font-medium",
                    // Layout
                    "relative group",
                    // Effects and interactive states
                    "transition-colors duration-300"
                  )}>
                  {item.label}
                  <span
                    className={cn(
                      // Size and spacing
                      "-bottom-1 left-0 h-0.5",
                      // Layout
                      "absolute",
                      // Background
                      "bg-foreground",
                      // Effects and interactive states
                      "transition-all duration-300",
                      pathname === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}