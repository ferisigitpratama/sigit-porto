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

function Hero() {

  const stats = [
    {
      number: "3+",
      label: "Years Experience",
    },
    {
      number: "4+",
      label: "Featured Projects",
    },
    {
      number: "15+",
      label: "Technologies",
    },
    {
      number: "100%",
      label: "Passion",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-32"
    >

      {/* Background Glow */}

      <div className="absolute left-1/2 top-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <Container>

        <div className="grid min-h-[85vh] items-center gap-20 lg:grid-cols-2">

          {/* ========================= */}
          {/* LEFT CONTENT */}
          {/* ========================= */}

          <div>

            <p className="mb-6 uppercase tracking-[6px] text-cyan-400">
              Welcome To My Portfolio
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">

              Hi, I'm

              <br />

              <span className="text-white">
                FERI SIGIT
              </span>

              <br />

              <span className="text-cyan-400">
                PRATAMA
              </span>

            </h1>

            <div className="mt-8 text-2xl font-semibold text-slate-300">

              <TypeAnimation
                sequence={[
                  "Network Engineer",
                  2000,
                  "Network Operations Center",
                  2000,
                  "Information Technology Enthusiast",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
              />

            </div>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-400">
              Designing, building, and operating scalable enterprise
              network infrastructure with expertise in routing,
              switching, virtualization, Linux, and network
              operations.
            </p>

                {/* PART 2 DIMULAI DARI SINI */}
                        <div className="mt-10 flex flex-wrap gap-5">

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

            {/* Social Media */}

            <div className="mt-12 flex items-center gap-6">

              <a
                href="https://github.com/ferisigitpratama"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 text-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/ferisigitpratama11"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 text-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://dev.to/ferisigitpratama11"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 text-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaDev />
              </a>

            </div>

          </div>

          {/* ========================= */}
          {/* RIGHT CONTENT */}
          {/* ========================= */}

          <div className="relative flex justify-center">

            {/* Glow */}

            <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[120px]"></div>

            <div className="relative">

              <img
                src={profile}
                alt="Feri Sigit Pratama"
                className="w-[420px] rounded-[32px] border border-slate-700 object-cover shadow-2xl shadow-cyan-500/10 transition duration-500 hover:scale-[1.02]"
              />

            </div>

          </div>

        </div>

        {/* PART 3 DIMULAI DARI SINI */}

                <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur lg:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.label}
              className="text-center"
            >

              <h2 className="text-4xl font-black text-cyan-400">
                {item.number}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
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