import BlogCard from "@/components/blog-card";
import ProjectCard from "@/components/project-card";
import ImpactStoryCard from "@/components/impact-story-card";
import LogosComponent from "@/components/logos-component";
import { StickyBottomRight, StickyDiv } from "@/components/sticky-widgets";
import { fadeIn } from "@/utils/fadeInAnimation";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
import Helmet from "@/components/helmet";
import router from "next/router";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { LINKEDIN_URL, RESUME_URL } from "@/utils/constants";

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Helmet />
      <Header />
      <main className="min-h-screen text-foreground">
        {/* Hero section */}
        <section
          className={cn(
            // Size and spacing
            "py-32 container-spacing",
            // Layout
            "flex flex-col items-center",
            // Effects and interactive states
            "transition-colors duration-300"
          )}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`${dmSans.className} flex flex-col gap-6 lg:gap-10 text-center max-w-5xl`}>
            <motion.h1
              variants={fadeIn("up", 0.1)}
              className="text-hero text-foreground/85">
              {`Hi, my name is`}
            </motion.h1>
            <motion.h1
              variants={fadeIn("up", 0.2)}
              className="text-hero text-foreground bg-clip-text font-extrabold tracking-tight">
              Chukwuemelie Jason Obumse
            </motion.h1>
            <motion.h2
              variants={fadeIn("up", 0.3)}
              className="text-section text-muted-foreground">
              {`I'm a Full Stack Software Engineer.`}
            </motion.h2>
          </motion.div>
        </section>

        {/* About me section */}
        <section
          className={cn(
            // Size and spacing
            "section-spacing",
            // Border
            "border-y border-border",
            // Effects and interactive states
            "transition-colors duration-300"
          )}>
          <div className={dmSans.className}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-section text-foreground mb-12">
              About Me
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative">
            <div
              className={cn(
                // Size and spacing
                "w-1 top-6 bottom-6",
                // Layout
                "absolute left-0",
                // Background
                "bg-linear-to-b from-border via-muted-foreground to-border",
                // Border
                "rounded-full"
              )}></div>
            <div
              className={cn(
                // Size and spacing
                "p-5 lg:p-8 md:p-12 ml-5 lg:ml-8",
                // Border
                "border border-border rounded-2xl",
                // Background
                "bg-card",
                // Effects and interactive states
                "shadow-sm hover:shadow-lg transition-all duration-300"
              )}>
              <div className="space-y-6">
                <p className="text-body-large text-foreground leading-relaxed">
                  {`I am a Full Stack Engineer with 3+ years of experience building reliable and revenue-generating products across B2B and B2C domains. I specialize in TypeScript, React, and Node.js, with experience spanning system design, DevOps, and data analytics.`}
                </p>
                <p className="text-body-large text-foreground leading-relaxed">
                  {`I've helped companies like LaborHack, Peppermint and Wynk Limited turn complex business problems into scalable products that drive growth and efficiency — from AI-powered systems for blue collar workers, to external APIs for third party integrators and platforms that enable data-driven product development for top companies like Kuda.`}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-start">
            <Button
              className="relative group px-3 py-6"
              onClick={() => window.open(RESUME_URL, "_blank")}>
              <span className="relative">
                View my resume
                <span
                  className={cn(
                    // Size and spacing
                    "-bottom-1 left-0 w-0 h-0.5",
                    // Layout
                    "absolute",
                    // Background
                    "bg-primary-foreground",
                    // Effects and interactive states
                    "transition-all duration-300 group-hover:w-full"
                  )}></span>
              </span>
            </Button>
          </motion.div>
        </section>

        {/* Skills section */}
        <section
          className={cn(
            // Background
            "bg-muted/45",
            // Size and spacing
            "w-full max-w-screen-2xl mx-auto py-12 md:py-16 lg:py-20 xl:py-24",
            // Effects and interactive states
            "transition-colors duration-300"
          )}>
          <div
            className={cn(
              // Text
              `${dmSans.className} text-center`,
              // Effects and interactive states
              "transition-colors duration-300"
            )}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-section text-foreground mb-12">
              Core Skills
            </motion.h2>
          </div>
          <LogosComponent />
        </section>

        {/* Impact Stories section */}
        <section
          className={cn(
            // Size and spacing
            "section-spacing",
            // Border
            "border-y border-border",
            // Effects and interactive states
            "transition-colors duration-300"
          )}>
          <div
            className={cn(
              // Size and spacing
              "mb-12",
              // Text
              `${dmSans.className} text-center`,
              // Effects and interactive states
              "transition-colors duration-300"
            )}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-section text-foreground mb-4">
              Impact Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Detailed analysis of my most impactful projects and contributions
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <ImpactStoryCard
              title="Building Scalable Infrastructure for Blue-Collar Empowerment"
              role="Software Engineer"
              techStack="TypeScript, React, Node.js, GraphQL, MongoDB, AWS"
              duration="Jan 2024 - Present"
              keyContributions={[
                "Built systems for artisan recruitment, home maintenance, and AI-driven portfolios, generating over ₦35m in revenue",
                "Provided data-driven insights that guided product improvements and optimized funnels",
                "Improved the flexibility and reliability of software deployments ensuring 99.9% uptime",
              ]}
              link="/impact-stories#blue-collar-empowerment"
            />
            <ImpactStoryCard
              title="Product Feedback & Scaling Operations"
              role="Lead Software Engineer"
              techStack="Next.js, NestJS, TypeScript, MongoDB, AWS"
              duration="Apr 2024 - Nov 2025"
              keyContributions={[
                "Launched an AI-powered product feedback application used by companies like Kuda",
                "Architected in-app usability tests and surveys which generated over $1,000 within 3 months",
                "Built the testers' application that onboarded 10,000+ testers in a month",
              ]}
              link="/impact-stories#product-feedback"
            />
            {/* <ImpactStoryCard
                title="Laying the Foundation for Secure Gold Investment"
                role="Software Engineer"
                techStack="Next.js, Node.js, TypeScript, PostgreSQL, Docker"
                duration="Aug 2024 - Jun 2025"
                keyContributions={[
                  "Led the development of a gold sourcing and purchase platform",
                  "Built secure wallet and authentication systems",
                  "Shaped secure, scalable infrastructure for the gold investment platform",
                ]}
                link="/impact-stories#gold-investment"
              /> */}
            <ImpactStoryCard
              title="Building a Lifestyle Super App and Web Platform"
              role="Full Stack Developer"
              techStack="JavaScript, Node.js, Express, React"
              duration="Sep 2023 - Apr 2024"
              keyContributions={[
                "Contributed to a lifestyle super app, focusing on financial services",
                "Rebuilt the company web application in React, increasing retention by 55%",
                "Led technical and culture-fit assessment of new hires",
              ]}
              link="/impact-stories#wynk-limited"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12">
            <Button
              className="relative group px-3 py-6"
              onClick={() => router.push("/impact-stories")}>
              <span className="relative">
                View impact stories
                <span
                  className={cn(
                    // Size and spacing
                    "-bottom-1 left-0 w-0 h-0.5",
                    // Layout
                    "absolute",
                    // Background
                    "bg-primary-foreground",
                    // Effects and interactive states
                    "transition-all duration-300 group-hover:w-full"
                  )}></span>
              </span>
            </Button>
          </motion.div>
        </section>

        {/* Other Projects section */}
        <section
          className={cn(
            // Size and spacing
            "section-spacing",
            // Effects and interactive states
            "transition-colors duration-300"
          )}>
          <div
            className={cn(
              // Size and spacing
              "mb-12",
              // Text
              `${dmSans.className} text-center`,
              // Effects and interactive states
              "transition-colors duration-300"
            )}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-section text-foreground mb-4">
              Other Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Personal projects showcasing various technologies and
              problem-solving approaches
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <ProjectCard
              title="Hunt Assistant"
              descriptionParagraphs={[
                "A comprehensive AI-powered job hunting platform that analyzes your resume against job requirements, generates tailored cover letters, and helps you track all your applications in one place.",
                "Features include user authentication, persistent application tracking and AI-powered insights.",
                "Built with: TypeScript, Next.js, MongoDB, AI",
              ]}
              image="/images/hunt-assistant-dashboard.jpeg"
              githubLink="https://github.com/jason-ezenwa/hunt-assistant"
              seeLiveLink="https://hunt-assistant.vercel.app/"
            />

            <ProjectCard
              title="Zen"
              descriptionParagraphs={[
                "Zen Finance is a modern fintech application that allows users to manage multi-currency wallets, exchange currencies, and access virtual card services such as creation, funding, and transaction tracking.",
                "It integrates with Maplerad and Paystack.",
                "Built with: TypeScript, Next.js, Node.js, MongoDB",
              ]}
              image="/images/zen-dashboard.jpeg"
              githubLink="https://github.com/jason-ezenwa/zen-finance"
              seeLiveLink="https://try-zen-finance.vercel.app/"
            />

            <ProjectCard
              title="Prospera AI Dashboard"
              descriptionParagraphs={[
                "This is a dashboard mockup created for Prospera AI, a company that helps increase lead conversion rates with AI-generated personalised Lead Magnets and Agentic Follow ups.",
                "Features a user interface with analytics and metrics for intent signal tracking, AI-powered personalized content generation, and automated lead magnet insights.",
                "Built with: Next.js, Tailwind CSS, Shadcn UI",
              ]}
              image="/images/prospera-ai-dashboard.jpeg"
              githubLink="https://github.com/jason-ezenwa/prospera-ai-dashboard"
              seeLiveLink="https://prospera-ai-dashboard-one.vercel.app/"
            />
          </div>
        </section>

        {/* Blogs section */}
        <section
          className={cn(
            // Size and spacing
            "section-spacing",
            // Border
            "border-y border-border",
            // Effects and interactive states
            "transition-colors duration-300"
          )}>
          <div
            className={cn(
              // Size and spacing
              "mb-12",
              // Text
              `${dmSans.className} text-center`,
              // Effects and interactive states
              "transition-colors duration-300"
            )}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-section text-foreground mb-4">
              My Blog Posts
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Thoughts on software engineering, technology trends, and industry
              insights
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <BlogCard
              title="MVPs and the Engineering Trap: Building What Actually Matters"
              descriptionParagraphs={[
                "Many startups fail not because they can't build, but because they build the wrong things — perfectly.",
                "Here, I explore how clarity beats code in early-stage startups, and why your MVP should be a learning engine focused on understanding user needs rather than perfect architecture.",
              ]}
              link="https://blog.stackademic.com/mvps-and-the-engineering-trap-building-what-actually-matters-6c253bb5b3cd"
            />
            <BlogCard
              title="The Irreplaceable Software Engineer: Thriving in the Age of AI"
              descriptionParagraphs={[
                "The rapid advancement of AI has raised the question: Will AI replace software engineers? The reality is that some engineers will remain indispensable.",
                "In this article, I discuss how adaptability, cross-disciplinary thinking, and effectively leveraging AI are the keys to staying irreplaceable in an AI-powered world.",
              ]}
              link="https://blog.stackademic.com/the-irreplaceable-software-engineer-thriving-in-the-age-of-ai-569525593922"
            />
            <BlogCard
              title="Beyond Silos: The Cross-Disciplinary Role of the Modern Software Engineer"
              descriptionParagraphs={[
                "An article about the exposure of software engineers to different fields while working with experts in those fields.",
                "In this piece, I talk about how engineers work across disciplines to build smarter, more impactful solutions over time.",
              ]}
              link="https://blog.stackademic.com/beyond-silos-the-cross-disciplinary-role-of-the-modern-software-engineer-23305b55389b"
            />
            <BlogCard
              title="The Priceless Influence of Senior Software Engineers on Junior Engineers"
              descriptionParagraphs={[
                "An article that highlights the multifaceted benefits of working with senior software engineers.",
                "In this piece, I explore how the mentorship and guidance from experienced engineers can dramatically accelerate the growth and expertise of junior engineers.",
              ]}
              link="https://blog.stackademic.com/the-priceless-influence-of-senior-software-engineers-on-junior-engineers-c7c7cac89747"
            />
            <BlogCard
              title="Implementing an Escrow-like State in Node.js: Building Trust and Security in Online Transactions"
              descriptionParagraphs={[
                "Explains the concept of escrows and a nodejs implementation",
                "In this blog post, I go through: What escrows are and their importance as well as a step by step implementation in Node.js.",
              ]}
              link="https://blog.stackademic.com/implementing-an-escrow-like-state-in-node-js-building-trust-and-security-in-online-transactions-a8058144c005"
            />
            <BlogCard
              title="Authentication and Authorization with JSON Web Tokens"
              descriptionParagraphs={[
                "This blog dives deep into the world of JSON Web Tokens (JWTs), shedding light on how they're used in authentication and authorization processes.",
                "In this blog post, I explain: What JWTs are and how they work, from token issuance to server verification.",
              ]}
              link="https://medium.com/stackademic/the-definitive-guide-to-authentication-and-authorization-with-json-web-tokens-everything-you-need-5bc7795cb668"
            />
          </div>
        </section>

        <StickyBottomRight>
          <StickyDiv
            text="Have a look at my resume"
            textColor="text-primary-foreground"
            bgColor="bg-primary"
            link={RESUME_URL}
          />
          <StickyDiv
            text="Connect with me on LinkedIn"
            textColor="text-primary-foreground"
            bgColor="bg-primary"
            link={LINKEDIN_URL}
          />
        </StickyBottomRight>
      </main>
      {/* Footer section */}
      <Footer />
    </>
  );
}
