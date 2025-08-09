import BlogCard from "@/components/blog-card";
import ProjectCard from "@/components/project-card";
import ImpactStoryCard from "@/components/impact-story-card";
import LogosComponent from "@/components/logos-component";
import { StickyBottomRight, StickyDiv } from "@/components/sticky-widgets";
import { fadeIn } from "@/utils/fadeInAnimation";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
import Helmet from "@/components/helmet";

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Helmet />
      <main className="mb-12 text-black">
        {/* Header / Navigation */}
        <header className="fixed top-0 left-0 right-0 h-16 bg-white z-50 shadow-sm flex items-center px-6 sm:px-12 lg:px-32">
          <div className="flex justify-between items-center w-full">
            <div className="text-lg font-bold text-[#171717]">CJO</div>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link
                    href="/"
                    className="text-[#171717] hover:text-gray-600 font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impact-stories"
                    className="text-[#171717] hover:text-gray-600 font-medium">
                    Impact Stories
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero section */}
        <section className="pt-16 px-6 flex flex-col items-center transition-colors duration-300">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className={`${dmSans.className} py-20 flex flex-col gap-4 lg:gap-8`}>
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl">
              {`Hi, my name is`}
            </h1>
            <h1 className="font-extrabold text-4xl lg:text-6xl text-[#6b6c6b]">
              Chukwuemelie Jason Obumse
            </h1>
            <h2 className="font-extrabold text-3xl lg:text-5xl">{`I'm a Full Stack Software Engineer.`}</h2>
          </motion.div>
        </section>

        {/* About me section */}
        <section className="px-6 sm:px-12 lg:px-32 py-14 sm:py-20 w-full overflow-hidden bg-[#F5F6F4] transition-colors duration-300">
          <div className="space-y-8">
            <div className={dmSans.className}>
              <p className="font-semibold lg:font-bold text-[23px] md:text-[36px]">
                About Me
              </p>
            </div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.005 }}
              className="w-full 2xl:w-[90%]  bg-white border-dotted border-l-[1px] border-black px-4 py-4 text-[#344054] shadow-sm hover:shadow-md">
              <p className="text-base lg:text-lg text-[#344054]">{`I am a Full Stack Engineer with 3+ years of experience delivering scalable and maintainable solutions across B2B and B2C domains. I specialize in backend and frontend engineering, with additional strengths in system design and DevOps.`}</p>
              <p className="text-base lg:text-lg text-[#344054]">{`My professional experience spans startups and high-impact teams at LaborHack, Wynk Limited, and Peppermint Group, where I've transformed complex business needs into reliable, user-focused software used by thousands in the fintech, blue-collar, data, and lifestyle sectors.`}</p>
            </motion.div>
            <div className="mt-[40px]">
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1XMZG3lyUCAIL39IZ9NrOk2m5BsvXreDR/view?usp=sharing">
                <button className="w-[156px] h-[48px] bg-[#171717] hover:bg-[#6b6c6b] text-white !text-sm lg:!text-lg rounded-[2px]">
                  View my resume
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section className="space-y-6 lg:space-y-8 py-2 transition-colors duration-300">
          <div className={`${dmSans.className} px-6 sm:px-12 lg:px-32`}>
            <p className="font-semibold lg:font-bold text-[23px] md:text-[36px]">
              Core Skills
            </p>
          </div>
          <LogosComponent />
        </section>

        {/* Impact Stories section */}
        <section className="px-6 sm:px-12 lg:px-32 py-14 sm:py-20 w-full overflow-hidden bg-[#F5F6F4] transition-colors duration-300">
          <div className="space-y-6 lg:space-y-8">
            <div className={dmSans.className}>
              <p className="font-semibold lg:font-bold text-[23px] md:text-[36px]">
                Impact Stories
              </p>
            </div>
            <motion.div
              variants={fadeIn("up", 0.05)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.005 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              <ImpactStoryCard
                title="Building Scalable Infrastructure for Blue-Collar Empowerment"
                role="Software Engineer"
                techStack="TypeScript, React, Node.js, GraphQL, MongoDB, AWS"
                duration="Jan 2024 - Present"
                keyContributions={[
                  "Built systems for artisan recruitment, home maintenance, and AI-driven portfolios",
                  "Provided data-driven insights that guided product improvements and optimized funnels",
                  "Improved platform SEO and organic traffic by 28%",
                ]}
                link="/impact-stories#blue-collar-empowerment"
              />
              <ImpactStoryCard
                title="Product Feedback & Scaling Operations"
                role="Lead Software Engineer"
                techStack="Next.js, NestJS, TypeScript"
                duration="Apr 2024 - Apr 2025"
                keyContributions={[
                  "Launched a product feedback application used by companies like Kuda",
                  "Built an application that onboarded 10,000+ testers in a month",
                  "Led technical assessment of new engineering hires",
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
            </motion.div>
            <div className="flex justify-center mt-8">
              <Link href="/impact-stories">
                <button className="px-6 py-3 bg-[#171717] hover:bg-[#6b6c6b] text-white rounded-[2px] !text-sm lg:!text-lg">
                  View impact stories
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Other Projects section */}
        <section className="px-6 sm:px-12 lg:px-32 py-14 sm:py-20 w-full overflow-hidden transition-colors duration-300">
          <div className="space-y-6 lg:space-y-8">
            <div className={dmSans.className}>
              <p className="font-semibold lg:font-bold text-[23px] md:text-[36px]">
                Other Projects
              </p>
            </div>
            <motion.div
              variants={fadeIn("right", 0.05)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.005 }}
              className="bg-center lg:bg-right-bottom bg-no-repeat mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              <ProjectCard
                title="Zen"
                descriptionParagraphs={[
                  "Zen Finance is a modern fintech application that allows users to manage multi-currency wallets, exchange currencies, and access virtual card services such as creation, funding, and transaction tracking.",
                  "It integrates with Maplerad and Paystack.",
                  "Built with: TypeScript, Next.js, Node.js, MongoDB",
                ]}
                image="/images/pay-online-illustration.jpeg"
                githubLink="https://github.com/jason-ezenwa/zen-finance"
                seeLiveLink="https://try-zen-finance.vercel.app/"
              />

              <ProjectCard
                title="Hunt Assistant"
                descriptionParagraphs={[
                  "This is an AI powered tool that gives you insights on how you fit for a job based on your qualifications & the job's requirements and helps you write a cover letter you can download, tailored to the job.",
                  "If you're like me and you hate writing cover letters, this is for you.",
                  "Built with: TypeScript, Next.js, Node.js, AI",
                ]}
                image="/images/hunt-assistant.jpg"
                githubLink="https://github.com/jason-ezenwa/hunt-assistant"
                seeLiveLink="https://hunt-assistant.vercel.app/"
              />

              <ProjectCard
                title="Prospera AI Dashboard"
                descriptionParagraphs={[
                  "This is a dashboard mockup created for Prospera AI, a company that helps increase lead conversion rates with AI-generated personalised Lead Magnets and Agentic Follow ups.",
                  "Features a user interface with analytics and metrics for intent signal tracking, AI-powered personalized content generation, and automated lead magnet insights.",
                  "Built with: Next.js, Tailwind CSS, Shadcn UI",
                ]}
                image="/images/prospera-ai-dashboard.png"
                githubLink="https://github.com/jason-ezenwa/prospera-ai-dashboard"
                seeLiveLink="https://prospera-ai-dashboard-one.vercel.app/"
              />
            </motion.div>
          </div>
        </section>

        {/* Blogs section */}
        <section className="px-6 sm:px-12 lg:px-32 py-14 sm:py-20 w-full overflow-hidden bg-[#F5F6F4] transition-colors duration-300">
          <div className="space-y-6 lg:space-y-8">
            <div className={dmSans.className}>
              <p className="font-semibold lg:font-bold text-[23px] md:text-[36px]">
                My Blog Posts
              </p>
            </div>
            <motion.div
              variants={fadeIn("left", 0.05)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.005 }}
              className="bg-center lg:bg-right-bottom bg-no-repeat mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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
            </motion.div>
          </div>
        </section>

        <StickyBottomRight>
          <StickyDiv
            text="Have a look at my resume 📄"
            textColor="text-white"
            bgColor="bg-[#171717]"
            link="https://drive.google.com/file/d/1XMZG3lyUCAIL39IZ9NrOk2m5BsvXreDR/view?usp=sharing"
          />
          <StickyDiv
            text="Connect with me on LinkedIn 🚀"
            textColor="text-white"
            bgColor="bg-[#171717]"
            link="https://linkedin.com/in/chukwuemelie-obumse"
          />
        </StickyBottomRight>
      </main>
      {/* Footer section */}
      <Footer />
    </>
  );
}
