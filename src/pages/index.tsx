import { BlogCard, ProjectCard } from '@/components/Cards';
import LogosComponent from '@/components/LogosComponent';
import { StickyBottomRight, StickyDiv } from '@/components/StickyWidgets';
import { fadeIn } from '@/utils/fadeInAnimation';
import { DM_Sans, Reenie_Beanie } from 'next/font/google';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Helmet from '@/components/Helmet';

const reenieBeanie = Reenie_Beanie({ weight: '400', subsets: ['latin'] });
const dmSans = DM_Sans({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Helmet />
      <main className=" mb-12 text-black">
        {/* Hero section */}
        <section className="pt-16 px-6 flex flex-col items-center">
          <div className="py-20 flex flex-col">
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className={dmSans.className}>
              <h1 className="font-extrabold text-[30px] sm:text-[40px] lg:text-[60px]">
                {`Hi, my name is`}
              </h1>
              <h1 className="font-extrabold text-[25px] sm:text-[35px] lg:text-[60px] text-[#6b6c6b]">
                Chukwuemelie Jason Obumse
              </h1>
              <h2 className="font-extrabold text-[22px] sm:text-[30px] lg:text-[50px]">{`I'm a Full Stack Software Engineer.`}</h2>
            </motion.div>
          </div>
        </section>

        {/* About me section */}
        <section className="px-6 sm:px-12 lg:px-32 py-14 sm:py-20 w-full overflow-hidden bg-[#F5F6F4]">
          <div className="space-y-8">
            <div className={reenieBeanie.className}>
              <p className="font-medium text-[36px]">About Me</p>
            </div>
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.005 }}
              className="w-full 2xl:w-[90%]  bg-white border-dotted border-l-[1px] border-black px-4 py-4 text-[#344054] shadow-sm hover:shadow-md">
              <p className="text-[16px] sm:text-[18px]">{`I am a Full Stack Software Engineer with three years of experience. Specialized in backend development and frontend development, experienced in system design, DevOps and database management.`}</p>
              <p className="text-[16px] sm:text-[18px]">{`I have a track record of architecting, developing and deploying highly efficient software, enhancing data visualization, and elevating online visibility through effective SEO. My work has delivered high-quality B2B and B2C software solutions used by thousands across the blue collar, fintech, data and lifestyle sectors while working at companies like LaborHack, Wynk Limited and Peppermint.`}</p>
            </motion.div>
            <div className="mt-[40px]">
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1XMZG3lyUCAIL39IZ9NrOk2m5BsvXreDR/view?usp=sharing">
                <button className="w-[156px] h-[48px] bg-[#171717] hover:bg-[#6b6c6b] text-white rounded-[2px]">
                  View my resume
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section className="space-y-1 py-2">
          <div className={`${reenieBeanie.className} px-6 sm:px-12 lg:px-32`}>
            <p className="font-medium text-[36px]">Core Skills</p>
          </div>
          <LogosComponent />
        </section>

        {/* Projects section */}
        <section className="px-6 sm:px-12 lg:px-32 py-14 sm:py-20  w-full overflow-hidden bg-[#ededec]">
          <div className="space-y-8">
            <div className={reenieBeanie.className}>
              <p className="font-medium text-[36px]">Projects</p>
            </div>
            <motion.div
              variants={fadeIn('right', 0.05)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.005 }}
              className="bg-center lg:bg-right-bottom bg-no-repeat mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ProjectCard
                title="WYNK.NG"
                descriptionParagraphs={[
                  "I rebuilt Wynk's web application while working as an intern at Wynk Limited.",
                  'This web application displays and elaborates on the services provided by Wynk, from ride hailing to payment and lifestyle services, as well as the opportunities in store for partners and potential partners.',
                  'Built with: React, TailwindCSS, Material UI',
                ]}
                image="/images/wynk-landing-page.PNG"
                githubLink=""
                seeLiveLink="https://wynk.ng/"
              />
              <ProjectCard
                title="Zen"
                descriptionParagraphs={[
                  "This is an API designed for fintech applications. It provides features that allow users to have multicurrency wallets, exchange currencies and generate virtual cards. Zen integrates Maplerad's sandbox environment to power most of its features.",
                  'Built with: TypeScript, Node JS, Express JS, MongoDB',
                ]}
                image="/images/pay-online-illustration.jpeg"
                githubLink="https://github.com/jason-ezenwa/zen-api"
                seeLiveLink="https://zen-api-68zd.onrender.com"
              />
              <ProjectCard
                title="Vibes Tailor"
                descriptionParagraphs={[
                  'A web application that gives you music recommendations that match your taste.',
                  'The Vibes Tailor is a music recommender I created for music enthusiasts who are looking for new music to listen to.',
                  'Built with: React, Node JS, Express JS, TailwindCSS, Material UI',
                ]}
                image="/images/vibes-tailor-recommendations.PNG"
                githubLink="https://github.com/jason-ezenwa/Flair_Vibes_Tailor_V2"
                seeLiveLink="https://vibes-tailor.vercel.app/"
              />
              <ProjectCard
                title="Flairbox Admin Dashboard"
                descriptionParagraphs={[
                  'The the Flairbox Admin Dashboard, a comprehensive movie administration hub. It displays an array of views, from upcoming premieres to trending films, and access a complete database of all available movies.',
                  'Built with: React, CSS, Material UI',
                ]}
                image="/images/flairbox-admin.PNG"
                githubLink="https://github.com/jason-ezenwa/movie-admin-dashboard"
                seeLiveLink="https://flairbox-admin.vercel.app/"
              />
            </motion.div>
          </div>
        </section>

        {/* Blogs section */}
        <section className="px-6 sm:px-12 lg:px-32 py-14 sm:py-20 w-full overflow-hidden bg-[#F5F6F4]">
          <div className="space-y-8">
            <div className={reenieBeanie.className}>
              <p className="font-medium text-[36px]">My Blog Posts</p>
            </div>
            <motion.div
              variants={fadeIn('left', 0.05)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.005 }}
              className="bg-center lg:bg-right-bottom bg-no-repeat mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <BlogCard
                title="Beyond Silos: The Cross-Disciplinary Role of the Modern Software Engineer"
                descriptionParagraphs={[
                  'An article about the exposure of software engineers to different fields while working with experts in those fields.',
                  'In this piece, I talk about how engineers work across disciplines to build smarter, more impactful solutions over time.',
                ]}
                image="/images/software_engineer_doing_a_presentation.jpeg"
                link="https://blog.stackademic.com/beyond-silos-the-cross-disciplinary-role-of-the-modern-software-engineer-23305b55389b"
              />
              <BlogCard
                title="The Priceless Influence of Senior Software Engineers on Junior Engineers"
                descriptionParagraphs={[
                  'An article that highlights the multifaceted benefits of working with senior software engineers.',
                  'In this piece, I explore how the mentorship and guidance from experienced engineers can dramatically accelerate the growth and expertise of junior engineers.',
                ]}
                image="/images/senior-and-junior-engineers.jpg"
                link="https://blog.stackademic.com/the-priceless-influence-of-senior-software-engineers-on-junior-engineers-c7c7cac89747"
              />
              <BlogCard
                title="Authentication and Authorization with JSON Web Tokens"
                descriptionParagraphs={[
                  "This blog dives deep into the world of JSON Web Tokens (JWTs), shedding light on how they're used in authentication and authorization processes.",
                  'In this blog post, I explain: What JWTs are and how they work, from token issuance to server verification.',
                ]}
                image="/images/jwt-guide.jpg"
                link="https://medium.com/stackademic/the-definitive-guide-to-authentication-and-authorization-with-json-web-tokens-everything-you-need-5bc7795cb668"
              />
              <BlogCard
                title="Getting Familiar with Props in React"
                descriptionParagraphs={[
                  "This is a guide that explains what 'props' are, and how they work. Taking you on a journey to transform your components from static to dynamic.",
                  'In this blog post, I explain: How to pass data between components using props as well as integration with databases.',
                ]}
                image="/images/understanding-props.PNG"
                link="https://medium.com/@emelieobumse100/getting-familiar-with-props-in-react-5abdcaae8b04"
              />
              <BlogCard
                title="Implementing an Escrow-like State in Node.js: Building Trust and Security in Online Transactions"
                descriptionParagraphs={[
                  'Explains the concept of escrows and a nodejs implementation',
                  'In this blog post, I go through: What escrows are and their importance as well as a step by step implementation in Node.js.',
                ]}
                image="/images/escrow-handshake.jpg"
                link="https://medium.com/@emelieobumse100/building-flair-vibes-tailor-a-personalised-music-recommender-c3a0f042faa2"
              />
              <BlogCard
                title="What Happens When You Type “https://www.google.com” Into Your Browser and Press 'Enter'"
                descriptionParagraphs={[
                  'This blog post, walks through the various steps involved in loading the webpage you see when you try to use google.',
                  'In this blog post, I explain: The DNS process, what it is and how it occurs as well as web servers, application servers and load balancers.',
                ]}
                image="/images/web-application-architecture.PNG"
                link="https://medium.com/@emelieobumse100/what-happens-when-you-type-https-www-google-com-into-your-browser-and-press-enter-bc0b0d8c7d08"
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
