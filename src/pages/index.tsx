import BlogCard from '@/components/BlogCard';
import ProjectCard from '@/components/ProjectCard';
import ImpactStoryCard from '@/components/ImpactStoryCard';
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
          <div className="py-20 flex flex-col">
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className={dmSans.className}>
              <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl">
                {`Hi, my name is`}
              </h1>
              <h1 className="font-extrabold text-4xl lg:text-6xl text-[#6b6c6b]">
                Chukwuemelie Jason Obumse
              </h1>
              <h2 className="font-extrabold text-3xl lg:text-5xl">{`I'm a Full Stack Software Engineer.`}</h2>
            </motion.div>
          </div>
        </section>

        {/* About me section */}
        <section className="px-6 sm:px-12 lg:px-32 py-14 sm:py-20 w-full overflow-hidden bg-[#F5F6F4] transition-colors duration-300">
          <div className="space-y-8">
            <div className={reenieBeanie.className}>
              <p className="font-medium text-[28px] md:text-[36px]">About Me</p>
            </div>
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.005 }}
              className="w-full 2xl:w-[90%]  bg-white border-dotted border-l-[1px] border-black px-4 py-4 text-[#344054] shadow-sm hover:shadow-md">
              <p className="text-base lg:text-lg text-[#344054]">{`I am a Full-Stack Software Engineer with 3+ years of experience delivering scalable and maintainable solutions across B2B and B2C domains. I specialize in backend and frontend engineering, with additional strengths in system design, DevOps, and database management.`}</p>
              <p className="text-base lg:text-lg text-[#344054]">{`My professional experience spans startups and high-impact teams at LaborHack, Wynk Limited, and Peppermint Group, where I've transformed complex business needs into reliable, user-focused software used by thousands in the fintech, blue-collar, data, and lifestyle sectors.`}</p>
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
        <section className="space-y-1 py-2 transition-colors duration-300">
          <div className={`${reenieBeanie.className} px-6 sm:px-12 lg:px-32`}>
            <p className="font-medium text-[28px] md:text-[36px]">
              Core Skills
            </p>
          </div>
          <LogosComponent />
        </section>

        {/* Impact Stories section */}
        <section className="px-6 sm:px-12 lg:px-32 py-14 sm:py-20 w-full overflow-hidden bg-[#F5F6F4] transition-colors duration-300">
          <div className="space-y-8">
            <div className={reenieBeanie.className}>
              <p className="font-medium text-[28px] md:text-[36px]">
                Impact Stories
              </p>
            </div>
            <motion.div
              variants={fadeIn('up', 0.05)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.005 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ImpactStoryCard
                title="Building Scalable Infrastructure for Blue-Collar Empowerment"
                role="Software Engineer"
                techStack="TypeScript, React, Node.js, GraphQL, MongoDB, AWS"
                duration="Jan 2024 - Present"
                keyContributions={[
                  'Built systems for artisan recruitment, home maintenance, and AI-driven portfolios',
                  'Provided data-driven insights that guided product improvements and optimized funnels.',
                  'Improved platform SEO and organic traffic by 28%',
                ]}
                link="/impact-stories#blue-collar-empowerment"
              />
              <ImpactStoryCard
                title="Product Feedback & Scaling Operations"
                role="Frontend Engineer (Founding Engineer)"
                techStack="Next.js, TypeScript"
                duration="Apr 2024 - Apr 2025"
                keyContributions={[
                  'Built an application that onboarded 10,000+ testers in a month',
                  'Developed product feedback application for better data-driven decisions',
                  'Led technical assessment of new engineering hires',
                ]}
                link="/impact-stories#product-feedback"
              />
              <ImpactStoryCard
                title="Laying the Foundation for Secure Gold Investment"
                role="Software Engineer (Founding Engineer)"
                techStack="Next.js, Node.js, TypeScript, PostgreSQL, Docker"
                duration="Aug 2024 - Present"
                keyContributions={[
                  'Leading development of a gold sourcing and purchase platform',
                  'Building secure wallet and authentication systems',
                  'Shaping secure, scalable infrastructure for gold investment platform',
                ]}
                link="/impact-stories#gold-investment"
              />
            </motion.div>
            <div className="flex justify-center mt-8">
              <Link href="/impact-stories">
                <button className="px-6 py-3 bg-[#171717] hover:bg-[#6b6c6b] text-white rounded-[2px] !text-sm lg:!text-lg">
                  View All Impact Stories
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Other Projects section */}
        <section className="px-6 sm:px-12 lg:px-32 py-14 sm:py-20 w-full overflow-hidden transition-colors duration-300">
          <div className="space-y-8">
            <div className={reenieBeanie.className}>
              <p className="font-medium text-[28px] md:text-[36px]">
                Other Projects
              </p>
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
                  'Built with: React, Tailwind CSS, Material UI',
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
            </motion.div>
          </div>
        </section>

        {/* Blogs section */}
        <section className="px-6 sm:px-12 lg:px-32 py-14 sm:py-20 w-full overflow-hidden bg-[#F5F6F4] transition-colors duration-300">
          <div className="space-y-8">
            <div className={reenieBeanie.className}>
              <p className="font-medium text-[28px] md:text-[36px]">
                My Blog Posts
              </p>
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
                link="https://blog.stackademic.com/beyond-silos-the-cross-disciplinary-role-of-the-modern-software-engineer-23305b55389b"
              />
              <BlogCard
                title="The Priceless Influence of Senior Software Engineers on Junior Engineers"
                descriptionParagraphs={[
                  'An article that highlights the multifaceted benefits of working with senior software engineers.',
                  'In this piece, I explore how the mentorship and guidance from experienced engineers can dramatically accelerate the growth and expertise of junior engineers.',
                ]}
                link="https://blog.stackademic.com/the-priceless-influence-of-senior-software-engineers-on-junior-engineers-c7c7cac89747"
              />
              <BlogCard
                title="Authentication and Authorization with JSON Web Tokens"
                descriptionParagraphs={[
                  "This blog dives deep into the world of JSON Web Tokens (JWTs), shedding light on how they're used in authentication and authorization processes.",
                  'In this blog post, I explain: What JWTs are and how they work, from token issuance to server verification.',
                ]}
                link="https://medium.com/stackademic/the-definitive-guide-to-authentication-and-authorization-with-json-web-tokens-everything-you-need-5bc7795cb668"
              />
              <BlogCard
                title="Getting Familiar with Props in React"
                descriptionParagraphs={[
                  "This is a guide that explains what 'props' are, and how they work. Taking you on a journey to transform your components from static to dynamic.",
                  'In this blog post, I explain: How to pass data between components using props as well as integration with databases.',
                ]}
                link="https://medium.com/@emelieobumse100/getting-familiar-with-props-in-react-5abdcaae8b04"
              />
              <BlogCard
                title="Implementing an Escrow-like State in Node.js: Building Trust and Security in Online Transactions"
                descriptionParagraphs={[
                  'Explains the concept of escrows and a nodejs implementation',
                  'In this blog post, I go through: What escrows are and their importance as well as a step by step implementation in Node.js.',
                ]}
                link="https://medium.com/@emelieobumse100/building-flair-vibes-tailor-a-personalised-music-recommender-c3a0f042faa2"
              />
              <BlogCard
                title='What Happens When You Type "https://www.google.com" Into Your Browser and Press Enter'
                descriptionParagraphs={[
                  'This blog post, walks through the various steps involved in loading the webpage you see when you try to use google.',
                  'In this blog post, I explain: The DNS process, what it is and how it occurs as well as web servers, application servers and load balancers.',
                ]}
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
