import { motion } from "motion/react";
import {
  Network,
  Server,
  Activity,
  Terminal,
} from "lucide-react";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const stats = [
  {
    value: "4+",
    label: "Years Experience",
    icon: Activity,
  },
  {
    value: "20+",
    label: "Network Labs",
    icon: Network,
  },
  {
    value: "10+",
    label: "Technologies",
    icon: Server,
  },
  {
    value: "24/7",
    label: "Operations Mindset",
    icon: Terminal,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-800 bg-slate-950 py-24"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionTitle
              subtitle="Network Profile"
              title="About Me"
            />
          </motion.div>

          <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* PROFILE SUMMARY */}

            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 lg:p-10"
            >
              {/* Decorative Glow */}

              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/5 blur-3xl" />

              {/* Status */}

              <div className="relative flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                  <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                  <span className="h-3 w-3 rounded-full bg-slate-600" />
                </div>

                <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Profile Online
                </span>
              </div>

              {/* Title */}

              <div className="relative mt-10">
                <p className="font-mono text-sm uppercase tracking-[0.35em] text-cyan-400">
                  Network Operations Center
                </p>

                <h3 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
                  Network Operations &
                  <span className="text-cyan-400">
                    {" "}
                    Infrastructure Enthusiast
                  </span>
                </h3>
              </div>

              {/* Description */}

              <div className="relative mt-8 space-y-5 text-base leading-8 text-slate-400">
                <p>
                  IT professional with more than four years of
                  experience in Network Engineering and Network
                  Operations, focused on operating, maintaining, and
                  troubleshooting enterprise and ISP network
                  infrastructure.
                </p>

                <p>
                  Experienced with routing, switching, MPLS, network
                  monitoring, Linux, and virtualization. I also build
                  networking laboratories and document technical
                  implementations through GitHub and technical
                  articles.
                </p>
              </div>

              {/* Bottom Line */}

              <div className="relative mt-10 border-t border-slate-800 pt-6">
                <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                  <span>
                    Location{" "}
                    <strong className="text-slate-300">
                      Indonesia
                    </strong>
                  </span>

                  <span>
                    Focus{" "}
                    <strong className="text-slate-300">
                      Network Operations
                    </strong>
                  </span>

                  <span>
                    Status{" "}
                    <strong className="text-emerald-400">
                      Active
                    </strong>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* STATS */}

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                    }}
                    className="group flex min-h-[190px] flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/40 p-6 transition-colors duration-300 hover:border-cyan-500/50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="font-mono text-4xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                        {stat.value}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default About;