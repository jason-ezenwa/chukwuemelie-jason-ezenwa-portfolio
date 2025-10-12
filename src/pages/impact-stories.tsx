import { DM_Sans } from 'next/font/google';
import {
  FaBriefcase,
  FaBuilding,
  FaUser,
  FaClock,
  FaCode,
  FaListUl,
  FaBullseye,
  FaChartLine,
  FaAngleDoubleDown,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import Footer from "@/components/footer";
import Helmet from "@/components/helmet";
import Link from "next/link";
import { motion } from "framer-motion";
import { StickyBottomRight, StickyDiv } from "@/components/sticky-widgets";
import router from "next/router";

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] });

const ImpactStories = () => {
  return (
    <>
      <Helmet />
      <main className="min-h-screen text-black pb-24 md:pb-0">
        {/* Header / Navigation */}
        <header className="fixed top-0 left-0 right-0 h-20 bg-white/60 backdrop-blur-lg z-50 border-b border-gray-100/50 transition-all duration-300 flex items-center container-spacing">
          <div className="flex justify-between items-center w-full">
            <div className="text-2xl font-bold text-[#171717] tracking-tight hover:scale-105 transition-transform duration-300">
              CJO
            </div>
            <nav>
              <ul className="flex space-x-10">
                <li>
                  <Link
                    href="/"
                    className="text-[#171717] hover:text-gray-600 font-medium relative group transition-colors duration-300">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impact-stories"
                    className="text-[#171717] hover:text-gray-600 font-medium relative group transition-colors duration-300">
                    Impact Stories
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="pt-24 pb-16 container-spacing bg-gradient-to-b from-[#F5F6F4] to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className={dmSans.className}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-hero text-gray-900 mb-6">
                Impact Stories
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-body-large text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Detailed analysis of my most impactful projects and
                contributions
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-gray-900 hover:text-gray-600 font-medium transition-colors duration-300 group">
              <span className="transform rotate-90 group-hover:rotate-180 transition-transform duration-300">
                <FaAngleDoubleDown className="text-sm" />
              </span>
              Back to Home
            </Link>
          </motion.div>

          <div className="flex justify-center mt-8 sm:mt-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
              <a
                href="#blue-collar-empowerment"
                className="px-4 md:px-6 py-2 md:py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all duration-300 text-xs md:text-sm font-medium shadow-sm hover:shadow-md whitespace-nowrap border border-gray-800 hover:border-gray-700 relative group">
                <span className="relative">
                  Blue-Collar Empowerment
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <a
                href="#product-feedback"
                className="px-4 md:px-6 py-2 md:py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all duration-300 text-xs md:text-sm font-medium shadow-sm hover:shadow-md whitespace-nowrap border border-gray-800 hover:border-gray-700 relative group">
                <span className="relative">
                  Product Feedback
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <a
                href="#wynk-limited"
                className="px-4 md:px-6 py-2 md:py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all duration-300 text-xs md:text-sm font-medium shadow-sm hover:shadow-md whitespace-nowrap border border-gray-800 hover:border-gray-700 relative group">
                <span className="relative">
                  Lifestyle Super App
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="container-spacing space-y-16 md:space-y-20">
          <div
            id="blue-collar-empowerment"
            className="mb-12 sm:mb-16 md:mb-20 p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-md lg:rounded-lg shadow-lg border border-gray-300 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-gray-300">
              <div className="w-fit">
                <FaBriefcase className="text-2xl sm:text-3xl text-[#171717]" />
              </div>
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-[#171717] leading-tight">
                Building Scalable Infrastructure for Blue-Collar Empowerment
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10 border-b border-gray-300 pb-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-md">
                    <FaBuilding className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      COMPANY
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm sm:text-base text-gray-800">
                        LaborHack
                      </p>
                      <Link href="https://www.laborhack.com/" target="_blank">
                        <FaExternalLinkAlt className="text-gray-700 text-sm sm:text-base" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-md">
                    <FaUser className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">ROLE</p>
                    <p className="font-medium text-sm sm:text-base text-gray-800">
                      Software Engineer
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-md">
                    <FaClock className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      DURATION
                    </p>
                    <p className="font-medium text-sm sm:text-base text-gray-800">
                      Jan 2024 - Present
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 h-full">
                  <div className="rounded-md mt-1">
                    <FaCode className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      TECH STACK
                    </p>
                    <p className="font-medium text-sm sm:text-base text-gray-800 leading-relaxed">
                      TypeScript, React, Node.js, GraphQL, MongoDB, AWS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="border-b border-gray-300 pb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <FaListUl className="text-[#171717] text-sm sm:text-base" />
                  <h3 className="font-bold text-lg sm:text-xl text-[#171717]">
                    Overview
                  </h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-3 sm:pl-8">
                  LaborHack is a platform that connects skilled blue-collar
                  artisans to jobs, training, and income opportunities. As part
                  of a distributed engineering team, I contributed to the
                  architecture and implementation of several core systems that
                  powered growth, retention, and automation across the platform.
                </p>
              </div>

              <div className="border-b border-gray-300 pb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <FaBullseye className="text-[#171717] text-sm sm:text-base" />
                  <h3 className="font-bold text-lg sm:text-xl text-[#171717]">
                    Key Contributions
                  </h3>
                </div>

                <div className="pl-3 sm:pl-8 space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-[#171717]">
                        Artisan Recruitment & Home Maintenance Tools
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      Collaborated cross-functionally to build and launch three
                      product lines that generated over ₦25m in revenue:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                      <li>
                        <p>
                          Artisan recruitment products, as well as a community
                          management tool for businesses, accelerating
                          onboarding and increasing partner satisfaction.{" "}
                          <Link
                            href="https://www.laborhack.com/businesses"
                            target="_blank">
                            <span className="flex items-center gap-1">
                              View{" "}
                              <FaExternalLinkAlt className="text-gray-700 text-sm sm:text-base" />
                            </span>
                          </Link>
                        </p>
                      </li>
                      <li>
                        A home maintenance product that connects 1,000+
                        homeowners with skilled labor, increasing company
                        revenue.
                        <Link
                          href="https://www.laborhack.com/homeowners"
                          target="_blank">
                          <span className="flex items-center gap-1">
                            View{" "}
                            <FaExternalLinkAlt className="text-gray-700 text-sm sm:text-base" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <h4 className="font-semibold text-base sm:text-lg text-[#171717]">
                        AI-Driven Artisan Portfolio System
                      </h4>
                      <Link
                        href="https://www.laborhack.com/portfolio"
                        target="_blank">
                        <FaExternalLinkAlt className="text-gray-700 text-sm sm:text-base" />
                      </Link>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      Contributed to the design and engineering of a portfolio
                      builder that leverages AI to help 4,000+ artisans present
                      their experience, skills, and past work.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base mt-2 sm:mt-3">
                      This tool exposes artisans to higher-value jobs.
                    </p>
                  </div>

                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-[#171717]">
                      Semi-Automated Payout System
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      Architected and implemented a payout workflow that
                      streamlined payments to artisans and referrers.
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                      <li>Reduced processing time</li>
                      <li>
                        Improved the quality of life of the customer success
                        team
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-[#171717]">
                      Analytics & Funnel Optimization
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      Managed and implemented analytics dashboards for three key
                      products using MongoDB Charts and Google Analytics.
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                      <li>
                        Tracked usage, user behavior, and drop-offs to guide
                        feature improvements
                      </li>
                      <li>
                        Played a key role in reducing churn and improving
                        activation
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-[#171717]">
                      Deployment & Release Engineering
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      Improved the reliability and flexibility of releases by:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                      <li>Introducing feature toggles to control rollout</li>
                      <li>
                        Writing unit tests that boosted confidence in
                        deployments and reduced rollback incidents by 40%
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-[#171717]">
                      SEO & Visibility
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      {`Enhanced the company's online visibility through
                      collaborative SEO strategies with the marketing team.`}
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                      <li>
                        {`Boosted organic traffic by 28% and improved the
                        platform's visibility in search engines by 21%`}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <FaChartLine className="text-[#171717] text-sm sm:text-base" />
                  <h3 className="font-bold text-lg sm:text-xl text-[#171717]">
                    Impact Summary
                  </h3>
                </div>
                <ul className="list-disc pl-6 sm:pl-12 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-3">
                  <li>
                    Built systems for artisan recruitment, home maintenance, and
                    AI-driven portfolios
                  </li>
                  <li>
                    Provided data-driven insights that guided product
                    improvements and optimized funnels
                  </li>
                  <li>Improved platform SEO and organic traffic by 28%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Impact Story 2 */}
          <div
            id="product-feedback"
            className="mb-12 sm:mb-16 md:mb-20 p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-md lg:rounded-lg shadow-lg border border-gray-300 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-gray-300">
              <div className="w-fit">
                <FaBriefcase className="text-2xl sm:text-3xl text-[#171717]" />
              </div>
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-[#171717] leading-tight">
                Product Feedback & Scaling Operations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10 border-b border-gray-300 pb-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-md">
                    <FaBuilding className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      COMPANY
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm sm:text-base text-gray-800">
                        Peppermint Group
                      </p>
                      <Link
                        href="https://www.runpeppermint.com/"
                        target="_blank">
                        <FaExternalLinkAlt className="text-gray-700 text-sm sm:text-base" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-md">
                    <FaUser className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">ROLE</p>
                    <p className="font-medium text-sm sm:text-base text-gray-800">
                      Lead Software Engineer
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-md">
                    <FaClock className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      DURATION
                    </p>
                    <p className="font-medium text-sm sm:text-base text-gray-800">
                      Apr 2024 - Apr 2025
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 h-full">
                  <div className="rounded-md mt-1">
                    <FaCode className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      TECH STACK
                    </p>
                    <p className="font-medium text-sm sm:text-base text-gray-800 leading-relaxed">
                      Next.js, NestJS, TypeScript, MongoDB, AWS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="border-b border-gray-300 pb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <FaListUl className="text-[#171717] text-sm sm:text-base" />
                  <h3 className="font-bold text-lg sm:text-xl text-[#171717]">
                    Overview
                  </h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-3 sm:pl-8">
                  Peppermint Group develops digital tools to help companies
                  collect and analyze product feedback. As a frontend engineer,
                  I worked closely with the team to create user-facing
                  applications that enhanced the product feedback process. My
                  work helped streamline the way companies and testers engage
                  with feedback, leading to better product decisions and faster
                  user onboarding.
                </p>
              </div>

              <div className="border-b border-gray-300 pb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <FaBullseye className="text-[#171717] text-sm sm:text-base" />
                  <h3 className="font-bold text-lg sm:text-xl text-[#171717]">
                    Key Contributions
                  </h3>
                </div>

                <div className="pl-3 sm:pl-8 space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <h4 className="font-semibold text-base sm:text-lg text-[#171717]">
                        Product Feedback Application
                      </h4>
                      <Link
                        href="https://www.runpeppermint.com/"
                        target="_blank">
                        <FaExternalLinkAlt className="text-gray-700 text-sm sm:text-base" />
                      </Link>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      {`Directed engineering efforts to create an AI-powered product feedback
                      application that allowed clients (e.g Kuda) to gather, organize, and
                      analyze detailed feedback from testers. This tool is the core
                      part of Peppermint's offerings, enabling more
                      informed product development decisions.`}
                    </p>
                  </div>

                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <h4 className="font-semibold text-base sm:text-lg text-[#171717]">
                        {`Testers' Application Development`}
                      </h4>
                      <Link
                        href="https://tester.runpeppermint.com/"
                        target="_blank">
                        <FaExternalLinkAlt className="text-gray-700 text-sm sm:text-base" />
                      </Link>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      {`I led the development of a testers' application that
                      helped onboard 10,000+ testers within the first month. The
                      platform was designed for ease of use, and its intuitive
                      interface helped drive high adoption rates among new
                      testers.`}
                    </p>
                  </div>

                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-[#171717]">
                      Performance Optimization & Scaling
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      I led the efforts that made data intensive operations 50x
                      faster through query optimizations and caching.
                    </p>
                  </div>

                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-[#171717]">
                      Technical Leadership
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      I took the lead in assessing new engineering hires,
                      ensuring the team continued to grow with skilled
                      developers. My leadership in recruitment helped maintain
                      the quality and velocity of the engineering team as we
                      expanded, leading to the successful release of Peppermint
                      V1, following the MVP.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <FaChartLine className="text-[#171717] text-sm sm:text-base" />
                  <h3 className="font-bold text-lg sm:text-xl text-[#171717]">
                    Impact Summary
                  </h3>
                </div>
                <ul className="list-disc pl-6 sm:pl-12 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-3">
                  <li>
                    Launched a product feedback application used by companies
                    like Kuda
                  </li>
                  <li>
                    Built an application that onboarded 10,000+ testers in a
                    month
                  </li>
                  <li>Led technical assessment of new engineering hires</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Impact Story 3: Wynk Limited */}
          <div
            id="wynk-limited"
            className="mb-12 sm:mb-16 md:mb-20 p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-md lg:rounded-lg shadow-lg border border-gray-300 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-gray-300">
              <div className="w-fit">
                <FaBriefcase className="text-2xl sm:text-3xl text-[#171717]" />
              </div>
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-[#171717] leading-tight">
                Building a Lifestyle Super App and Web Platform
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10 border-b border-gray-300 pb-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-md">
                    <FaBuilding className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      COMPANY
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm sm:text-base text-gray-800">
                        Wynk Limited
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-md">
                    <FaUser className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">ROLE</p>
                    <p className="font-medium text-sm sm:text-base text-gray-800">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-md">
                    <FaClock className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      DURATION
                    </p>
                    <p className="font-medium text-sm sm:text-base text-gray-800">
                      Sep 2023 - Apr 2024
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 h-full">
                  <div className="rounded-md mt-1">
                    <FaCode className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      TECH STACK
                    </p>
                    <p className="font-medium text-sm sm:text-base text-gray-800 leading-relaxed">
                      JavaScript, Node.js, Express, React
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="border-b border-gray-300 pb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <FaListUl className="text-[#171717] text-sm sm:text-base" />
                  <h3 className="font-bold text-lg sm:text-xl text-[#171717]">
                    Overview
                  </h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-3 sm:pl-8">
                  {`At Wynk Limited, I worked within a cross-functional team on the Wynk Super App, focusing on financial services modules.
                  I rebuilt the company's web application with React, which increased retention by 55%. I also contributed to team growth by evaluating candidates and documenting systems comprehensively.`}
                </p>
              </div>

              <div className="border-b border-gray-300 pb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <FaBullseye className="text-[#171717] text-sm sm:text-base" />
                  <h3 className="font-bold text-lg sm:text-xl text-[#171717]">
                    Key Contributions
                  </h3>
                </div>

                <div className="pl-3 sm:pl-8 space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <h4 className="font-semibold text-base sm:text-lg text-[#171717]">
                        Wynk Super App – Financial Services
                      </h4>
                      <div>
                        <Link
                          href="https://play.google.com/store/apps/details?id=ng.wynk.wynksupappsupapp&pli=1"
                          target="_blank">
                          <FaExternalLinkAlt className="text-gray-700 text-sm sm:text-base" />
                        </Link>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      {`Collaborated with product, design, and QA to build a lifestyle super app and my main focus was to implement the server side for the application's financial services using Node.js and Express.`}
                    </p>
                  </div>

                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <h4 className="font-semibold text-base sm:text-lg text-[#171717]">
                        Web Application Rebuild
                      </h4>
                      <Link href="https://wynk.ng/" target="_blank">
                        <FaExternalLinkAlt className="text-gray-700 text-sm sm:text-base" />
                      </Link>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      {`I rebuilt the company's web application with React, improving visual appeal, user experience and making actionable items clearer. This resulted in a 55% increase in retention.`}
                    </p>
                  </div>

                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-[#171717]">
                      Hiring & Team Scaling
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      {`Assessed technical and cultural fit of candidates, leading to the hiring of 3 software developers and 1 product designer who accelerated delivery.`}
                    </p>
                  </div>

                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-[#171717]">
                      Documentation
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      {`Authored thorough documentation across Wynk-related software to improve onboarding and maintenance.`}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <FaChartLine className="text-[#171717] text-sm sm:text-base" />
                  <h3 className="font-bold text-lg sm:text-xl text-[#171717]">
                    Impact Summary
                  </h3>
                </div>
                <ul className="list-disc pl-6 sm:pl-12 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-3">
                  <li>
                    Contributed to a lifestyle super app, focusing on financial
                    services
                  </li>
                  <li>
                    Rebuilt the company web application in React, increasing
                    retention by 55%
                  </li>
                  <li>Led technical and culture-fit assessment of new hires</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Impact Story 3 */}
          {/* <div
            id="gold-investment"
            className="mb-12 sm:mb-16 md:mb-20 p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-md lg:rounded-lg shadow-lg border border-gray-300 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-gray-300">
              <div className="w-fit">
                <FaBriefcase className="text-2xl sm:text-3xl text-[#171717]" />
              </div>
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-[#171717] leading-tight">
                Laying the Foundation for Secure Gold Investment
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10 border-b border-gray-300 pb-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-md">
                    <FaBuilding className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      COMPANY
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm sm:text-base text-gray-800">
                        Lume Gold
                      </p>
                      <Link href="https://lume.gold/" target="_blank">
                        <FaExternalLinkAlt className="text-gray-700 text-sm sm:text-base" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-md">
                    <FaUser className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">ROLE</p>
                    <p className="font-medium text-sm sm:text-base text-gray-800">
                      Software Engineer
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-md">
                    <FaClock className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      DURATION
                    </p>
                    <p className="font-medium text-sm sm:text-base text-gray-800">
                      Aug 2024 - Jun 2025
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 h-full">
                  <div className="rounded-md mt-1">
                    <FaCode className="text-gray-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      TECH STACK
                    </p>
                    <p className="font-medium text-sm sm:text-base text-gray-800 leading-relaxed">
                      Next.js, Node.js, TypeScript, PostgreSQL, Docker
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="border-b border-gray-300 pb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <FaListUl className="text-[#171717] text-sm sm:text-base" />
                  <h3 className="font-bold text-lg sm:text-xl text-[#171717]">
                    Overview
                  </h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-3 sm:pl-8">
                  {`Lume Gold is a platform designed to democratize access to gold
                  investment. As a founding engineer, I focused on building
                  the core infrastructure for a secure, scalable platform. The
                  goal was to provide a seamless experience for users to buy,
                  track, and trade gold in a secure digital environment.`}
                </p>
              </div>

              <div className="border-b border-gray-300 pb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <FaBullseye className="text-[#171717] text-sm sm:text-base" />
                  <h3 className="font-bold text-lg sm:text-xl text-[#171717]">
                    Key Contributions
                  </h3>
                </div>

                <div className="pl-3 sm:pl-8 space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-[#171717]">
                      Gold Trading Dashboard
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      {`I led the development of a real-time gold trading
                      dashboard that allows users to track their investments and
                      execute orders with ease. The dashboard is designed to be
                      both intuitive and feature-rich, providing users with the
                      tools they need to make informed investment decisions.`}
                    </p>
                  </div>

                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-[#171717]">
                      Wallet System Development
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      I designed and engineered the wallet system that
                      integrates seamlessly with multiple payment channels
                      securely. The wallet supports fund deposits and
                      withdrawals, ensuring smooth and efficient transactions.
                    </p>
                  </div>

                  <div className="bg-white p-3 sm:p-5 border border-gray-300 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-[#171717]">
                      Security Features
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
                      I implemented two-factor authentication (2FA) and
                      comprehensive activity logging for enhanced security.
                      These measures ensure user accounts are protected,
                      mitigating risks associated with financial transactions.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <FaChartLine className="text-[#171717] text-sm sm:text-base" />
                  <h3 className="font-bold text-lg sm:text-xl text-[#171717]">
                    Impact Summary
                  </h3>
                </div>
                <ul className="list-disc pl-6 sm:pl-12 text-sm sm:text-base text-gray-700 space-y-1.5 sm:space-y-3">
                  <li>
                    Lume Gold is in its early stages, and the platform is
                    shaping up to be a secure, user-friendly investment option
                    for individuals interested in gold trading.
                  </li>
                  <li>
                    My contributions laid the foundation for a secure, scalable
                    platform that will support real-time trading and secure
                    transactions.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center py-12">
          <button
            className="btn-primary relative group"
            onClick={() => router.push("/")}>
            <span className="relative">
              Back to Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </button>
        </motion.div>
        <StickyBottomRight>
          <StickyDiv
            text="Connect with me on LinkedIn"
            textColor="text-white"
            bgColor="bg-gray-900"
            link="https://linkedin.com/in/chukwuemelie-obumse"
          />
        </StickyBottomRight>
      </main>
      <Footer />
    </>
  );
};

export default ImpactStories;
