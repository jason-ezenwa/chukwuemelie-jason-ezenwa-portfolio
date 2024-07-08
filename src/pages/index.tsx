import {BlogCard, ProjectCard} from "@/components/Cards";
import LogosComponent from "@/components/LogosComponent";
import StickyBottomRight, { StickyDiv } from "@/components/StickyWidgets";
import { fadeIn } from "@/utils/fadeInAnimation";
import { DM_Sans, Reenie_Beanie } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Helmet from "@/components/Helmet";

const reenieBeanie = Reenie_Beanie({ weight: "400", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] });


export default function Home() {
  return (
    <>
    <Helmet/>
    <main className="space-y-14 mb-12 text-black">
      {/* Hero section */}
      <section className="pt-16 px-6 flex flex-col items-center">
        <div className="pace-y-1 py-14 flex flex-col">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.3}}
            className={dmSans.className}>
            <h1 className="font-extrabold text-[30px] lg:text-[60px]">
              {`Hi, my name is`}
            </h1>
            <h1 className="font-extrabold text-[25px] lg:text-[60px] text-[#6b6c6b]">
              Chukwuemelie Jason Obumse
            </h1>
            <h2 className="font-extrabold text-[22px] lg:text-[50px]">{`I'm a Full Stack Software Engineer.`}</h2>
          </motion.div>
        </div>
      </section>

      {/* About me section */}
      <section
        className="px-6 sm:px-12 lg:px-32 py-8 lg:py-12 w-full overflow-hidden space-y-8 bg-[#F5F6F4]">
        <div>
          <div className={reenieBeanie.className}>
            <p className="font-medium text-[36px]">About Me</p>
          </div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.3}}
            className="bg-white border-dotted border-l-[1px] border-black pl-4 py-4 text-[#344054] shadow-sm hover:shadow-md">
            <p className="text-[16px] sm:text-[18px]">{`I am a Full Stack Software Engineer with two years of experience in software development, specialized in backend development and frontend development, experienced in DevOps and database management. I am adept at crafting clean and testable code, to develop and seamlessly integrate secure RESTful and GraphQL API paradigms, with frontend mobile and web applications. I am also skilled in integrating data analytics tools to support informed business decisions.`}</p>
            <p className="text-[16px] sm:text-[18px]">{`I have successfully delivered high-quality software solutions utilized by thousands of individuals across the blue collar, fintech, lifestyle and transportation industries while working at LaborHack, Wynk Nigeria and TruckDispatch.`}</p>
          </motion.div>
          <div className="mt-[40px]">
            <Link href="https://drive.google.com/file/d/1v7kS616Zg8uiIM1oxIIrSSuPbJKC-2uS/view?usp=drivesdk">
              <button
                className="w-[156px] h-[48px] bg-[#171717] text-white rounded-md hover:shadow-lg"
              >
                View my resume
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col  items-center space-y-4">
          <p className="text-ppmblack text-lg lg:text-xl font-medium">Core Skills</p>
          <LogosComponent />
        </div>
      </section>

      {/* Projects section */}
      <section className="px-6 sm:px-12 lg:px-32 w-full overflow-hidden space-y-4">
        <div>
          <div className={reenieBeanie.className}>
            <p className="font-medium text-[36px]">Projects</p>
          </div>
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.05}}
            className="bg-center lg:bg-right-bottom bg-no-repeat mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ProjectCard
              title="WYNK.NG"
              descriptionParagraphs={
                [
                  "I rebuilt Wynk's web application while working as an intern at Wynk Nigeria.",
                  "This web application displays and elaborates on the services provided by Wynk Nigeria, from ride hailing to payment and lifestyle services, as well as the opportunities in store for partners and potential partners.",
                  "Built with: React, TailwindCSS, Material UI"
                ]}
              image="/images/wynk-landing-page.PNG"
              githubLink=""
              seeLiveLink="https://wynk.ng/"
            />
            <ProjectCard
              title="Vibes Tailor"
              descriptionParagraphs={
                [
                  "A web application that gives you music recommendations that match your taste.",
                  "The Vibes Tailor is a music recommender I created for music enthusiasts who are looking for new music to listen to.",
                  "Built with: React, Node JS, Express JS, TailwindCSS, Material UI"
                ]}
              image="/images/vibes-tailor-recommendations.PNG"
              githubLink="https://github.com/jason-ezenwa/Flair_Vibes_Tailor_V2"
              seeLiveLink="https://vibes-tailor.vercel.app/"
            />
            <ProjectCard
              title="Flair-Commerce"
              descriptionParagraphs={
                [
                  "Flair-Commerce is the server-side of an e-commerce web application with user creation and authentication, products management and order management features.",
                  "Built with: Node JS, Express JS, MongoDB"
                ]}
              image="/images/trolly.PNG"
              githubLink="https://github.com/jason-ezenwa/flair-commerce/tree/main/backend"
              seeLiveLink=""
            />
            <ProjectCard
              title="DocuHelp Landing Page Clone"
              descriptionParagraphs={
                [
                  "A clone of the docuhelp.ai landing page that makes a compelling case of why you should use docuhelp to write business documents.",
                  "Built with: React, TailwindCSS, Material UI"
                ]}
              image="/images/docuhelp-landing-page.PNG"
              githubLink="https://github.com/jason-ezenwa/docuhelp-landing-page"
              seeLiveLink="https://docuhelp-landing-page.vercel.app/"
            />
            <ProjectCard
              title="Flairbox Admin Dashboard"
              descriptionParagraphs={
                [
                  "The the Flairbox Admin Dashboard, a comprehensive movie administration hub. It displays an array of views, from upcoming premieres to trending films, and access a complete database of all available movies.",
                  "Built with: React, CSS, Material UI"
                ]}
              image="/images/flairbox-admin.PNG"
              githubLink="https://github.com/jason-ezenwa/movie-admin-dashboard"
              seeLiveLink="https://flairbox-admin-2.vercel.app/"
            />
            <ProjectCard
              title="Files Manager API"
              descriptionParagraphs={
                [
                  "This collaborative project was developed by Chukwuemelie Obumse and Afeez Abu.",
                  "The Files Manager API is a RESTful API with user authentication as well as temporary and persistent storage features.",
                  "Built with: Node JS, Express JS, MongoDB"
                ]}
              image="/images/files-manager.jpeg"
              githubLink="https://github.com/jason-ezenwa/alx-files_manager"
              seeLiveLink=""
            />
          </motion.div>
        </div>
      </section>

      {/* Blogs section */}
      <section className="px-6 sm:px-12 lg:px-32 py-14 sm:py-20 w-full overflow-hidden space-y-4 bg-[#f6f6f4]">
        <div>
          <div className={reenieBeanie.className}>
            <p className="font-medium text-[36px]">My Blog Posts</p>
          </div>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.05}}
            className="bg-center lg:bg-right-bottom bg-no-repeat mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <BlogCard
              title="Authentication and Authorization with JSON Web Tokens"
              descriptionParagraphs={
                [
                  "This blog dives deep into the world of JSON Web Tokens (JWTs), shedding light on how they're used in authentication and authorization processes.",
                  "In this blog post, I explain: What JWTs are and how they work, from token issuance to server verification."
                ]}
              image="/images/jwt-guide.jpg"
              link="https://medium.com/stackademic/the-definitive-guide-to-authentication-and-authorization-with-json-web-tokens-everything-you-need-5bc7795cb668"
            />
            <BlogCard
              title="Getting Familiar with Props in React"
              descriptionParagraphs={
                [
                  "This is a guide that explains what 'props' are, and how they work. Taking you on a journey to transform your components from static to dynamic.",
                  "In this blog post, I explain: How to pass data between components using props as well as integration with databases."
                ]}
              image="/images/understanding-props.PNG"
              link="https://medium.com/@emelieobumse100/getting-familiar-with-props-in-react-5abdcaae8b04"
            />
            <BlogCard
              title="Implementing an Escrow-like State in Node.js: Building Trust and Security in Online Transactions"
              descriptionParagraphs={
                [
                  "Explains the concept of escrows and a nodejs implementation",
                  "In this blog post, I go through: What escrows are and their importance as well as a step by step implementation in Node.js."
                ]}
              image="/images/escrow-handshake.jpg"
              link="https://medium.com/@emelieobumse100/building-flair-vibes-tailor-a-personalised-music-recommender-c3a0f042faa2"
            />
            <BlogCard
              title="What Happens When You Type “https://www.google.com” Into Your Browser and Press 'Enter'"
              descriptionParagraphs={
                [
                  "This blog post, walks through the various steps involved in loading the webpage you see when you try to use google.",
                  "In this blog post, I explain: The DNS process, what it is and how it occurs as well as web servers, application servers and load balancers."
                ]}
              image="/images/web-application-architecture.PNG"
              link="https://medium.com/@emelieobumse100/what-happens-when-you-type-https-www-google-com-into-your-browser-and-press-enter-bc0b0d8c7d08"
            />
          </motion.div>
        </div>
      </section>

      <StickyBottomRight>
        <StickyDiv
          text="Have a look at my resume 🗎"
          textColor="text-white"
          bgColor="bg-[#171717]"
          link="https://drive.google.com/file/d/1v7kS616Zg8uiIM1oxIIrSSuPbJKC-2uS/view?usp=drivesdk"
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
    <Footer/>
    </>
  );
}
