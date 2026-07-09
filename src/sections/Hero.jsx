import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaDev,
} from "react-icons/fa";

import {
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";

import Button from "../components/Button";
import Container from "../components/Container";
import profile from "../assets/images/profile.jpg";
import TiltedCard from "../components/TiltedCard";

function Hero() {

  const stats = [
    {
      number: "4+",
      label: "Years Experience",
    },
    {
      number: "5",
      label: "Projects",
    },
    {
      number: "20+",
      label: "Networking Technologies",
    },
    {
      number: "24/7",
      label: "Continuous Learning",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-32 pb-20"
    >

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-400/5 blur-[150px]" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute left-20 top-40 h-3 w-3 rounded-full bg-cyan-400/40 blur-sm" />

        <div className="absolute right-40 top-64 h-2 w-2 rounded-full bg-sky-400/40 blur-sm" />

        <div className="absolute bottom-40 left-1/3 h-2 w-2 rounded-full bg-cyan-300/30 blur-sm" />

        <div className="absolute right-24 bottom-20 h-4 w-4 rounded-full bg-cyan-400/20 blur-md" />

      </div>

      <Container>

        <div className="grid min-h-[82vh] items-center gap-20 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div className="relative z-10">

            <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2">

              <span className="text-xs font-semibold uppercase tracking-[4px] text-cyan-400">

                NETWORK OPERATIONS CENTER

              </span>

            </div>

            <p className="mt-5 text-sm uppercase tracking-[3px] text-slate-500">

              Information Technology Enthusiast

            </p>

            <h1 className="mt-8 text-6xl font-black leading-none md:text-7xl lg:text-8xl">

              <span className="block text-white">

                FERI

              </span>

              <span className="mt-2 block text-white">

                SIGIT

              </span>

              <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 bg-clip-text text-transparent">

                PRATAMA

              </span>

            </h1>
                        <div className="mt-8 text-2xl font-semibold text-slate-300">

              <TypeAnimation
                sequence={[
                  "Network Operations Center",
                  2000,

                  "Network Engineer",
                  2000,

                  "Information Technology Enthusiast",
                  2000,

                ]}
                speed={45}
                repeat={Infinity}
              />

            </div>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-400">

              Designing, building, and maintaining reliable
              enterprise and ISP network infrastructure
              with expertise in routing, switching,
              Linux, virtualization, and network operations.

              Passionate about creating scalable,
              secure, and high-availability network
              solutions.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Button>

                <span className="flex items-center gap-2">

                  View Projects

                  <FiArrowRight size={18} />

                </span>

              </Button>

              <a
                href="/resume/Feri-Sigit-Pratama-Resume.pdf"
                download
              >

                <Button variant="secondary">

                  <span className="flex items-center gap-2">

                    Download Resume

                    <FiDownload size={18} />

                  </span>

                </Button>

              </a>

            </div>

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="https://github.com/ferisigitpratama"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/40 px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400"
              >

                <FaGithub className="text-xl text-white transition group-hover:text-cyan-400" />

                <span className="text-sm font-medium">

                  GitHub

                </span>

              </a>

              <a
                href="https://linkedin.com/in/ferisigitpratama11"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/40 px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400"
              >

                <FaLinkedin className="text-xl text-white transition group-hover:text-cyan-400" />

                <span className="text-sm font-medium">

                  LinkedIn

                </span>

              </a>

              <a
                href="https://dev.to/ferisigitpratama11"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/40 px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400"
              >

                <FaDev className="text-xl text-white transition group-hover:text-cyan-400" />

                <span className="text-sm font-medium">

                  Dev Community

                </span>

              </a>

            </div>

          </div>

          {/* ================================ */}
          {/* RIGHT CONTENT */}
          {/* ================================ */}

<div className="relative flex items-center justify-center">

  <div
className="
absolute

h-[700px]
w-[700px]

rounded-full

bg-cyan-500/10

blur-[220px]
"
/>

  <div
    className="
      absolute
      h-[650px]
      w-[650px]
      rounded-full
      bg-cyan-500/10
      blur-[180px]
    "
  />

  <div
    className="
      w-full
      max-w-[430px]
    "
  >

    <TiltedCard
      imageSrc={profile}
      altText="Feri Sigit Pratama"

      containerHeight="620px"
      containerWidth="100%"

      imageHeight="620px"
      imageWidth="100%"

      rotateAmplitude={10}

      scaleOnHover={1.03}

      showTooltip={false}

      showMobileWarning={false}

      displayOverlayContent={false}

    />

  </div>

</div>

</div>

        {/* ====================================== */}
        {/* STATS */}
        {/* ====================================== */}

        <div className="mt-24 grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.label}
              className="text-center"
            >

              <h2 className="text-5xl font-black text-cyan-400">

                {item.number}

              </h2>

              <p className="mt-3 text-slate-400">

                {item.label}

              </p>

            </div>

          ))}

        </div>

      </Container>
      </section>
  );
}

export default Hero;