import { motion } from "motion/react";
import {
  Award,
  BadgeCheck,
  ExternalLink,
  Router,
  Server,
  Clock,
  CalendarDays,
} from "lucide-react";

import Container from "../components/Container";

const certifications = [
  {
    id: 1,
    title: "MikroTik Certified Network Associate",
    shortTitle: "MTCNA",
    type: "Professional Certification",
    issuer: "MikroTik",
    issued: "2023",
    icon: Router,
    description:
      "Professional certification covering MikroTik RouterOS fundamentals, routing, switching, wireless networking, firewall, and network management.",
    skills: [
      "MikroTik",
      "RouterOS",
      "Routing",
      "Switching",
      "Firewall",
    ],
    credential: "#",
  },

  {
    id: 2,
    title: "Juniper JNCIA-Junos",
    shortTitle: "JNCIA-JUNOS",
    type: "Course Completion",
    issuer: "Udemy",
    issued: "July 2026",
    duration: "9 Hours",
    icon: Server,
    description:
      "Completed a structured Juniper JNCIA-Junos course covering Junos OS fundamentals, device configuration, routing, switching, and network operations.",
    skills: [
      "Juniper",
      "Junos OS",
      "Routing",
      "Switching",
      "Network Operations",
    ],
    credential:
      "https://www.udemy.com/certificate/UC-ac304477-7b80-4b51-9efb-5b9b121f6793/",
  },
];

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

function Certified() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-slate-950 py-20 md:py-24"
    >
      <Container>
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400 md:text-sm md:tracking-[0.4em]">
            Professional Development
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Certifications
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Professional certifications and structured technical learning
            focused on networking, infrastructure, and network operations.
          </p>
        </motion.div>

        {/* CERTIFICATION LIST */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="space-y-5"
        >
          {certifications.map((certification) => {
            const CertificationIcon = certification.icon;

            return (
              <motion.article
                key={certification.id}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border border-slate-800
                  bg-slate-900/30
                  transition-colors
                  duration-300
                  hover:border-cyan-500/50
                "
              >
                <div className="flex flex-col lg:grid lg:grid-cols-[360px_1fr]">
                  {/* CERTIFICATION IDENTITY */}

                  <div
                    className="
                      border-b border-slate-800
                      p-6
                      lg:border-b-0
                      lg:border-r
                      lg:p-8
                    "
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className="
                          flex h-14 w-14 shrink-0
                          items-center justify-center
                          rounded-xl
                          bg-cyan-500/10
                          md:h-16 md:w-16
                        "
                      >
                        <CertificationIcon
                          size={30}
                          strokeWidth={1.7}
                          className="text-cyan-400"
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            text-xs font-semibold
                            uppercase
                            tracking-[0.25em]
                            text-cyan-400
                          "
                        >
                          {certification.type}
                        </p>

                        <h3 className="mt-3 text-2xl font-bold text-white">
                          {certification.shortTitle}
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                          {certification.issuer}
                        </p>
                      </div>
                    </div>

                    {/* STATUS */}

                    <div className="mt-8 flex items-center gap-3 border-t border-slate-800 pt-6">
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                      </span>

                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                        Credential Active
                      </span>
                    </div>
                  </div>

                  {/* CERTIFICATION DETAIL */}

                  <div className="p-6 lg:p-8">
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                          {certification.title}
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <CalendarDays
                              size={16}
                              className="text-cyan-400"
                            />

                            <span>{certification.issued}</span>
                          </div>

                          {certification.duration && (
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <Clock
                                size={16}
                                className="text-cyan-400"
                              />

                              <span>{certification.duration}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div
                        className="
                          flex w-fit items-center gap-2
                          rounded-full
                          border border-cyan-500/30
                          bg-cyan-500/5
                          px-4 py-2
                          text-xs font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-cyan-400
                        "
                      >
                        <BadgeCheck size={16} />

                        Verified
                      </div>
                    </div>

                    {/* DESCRIPTION */}

                    <p className="mt-7 max-w-4xl text-sm leading-7 text-slate-400 md:text-base">
                      {certification.description}
                    </p>

                    {/* SKILLS */}

                    <div className="mt-7 flex flex-wrap gap-3">
                      {certification.skills.map((skill) => (
                        <span
                          key={skill}
                          className="
                            rounded-full
                            border border-slate-700
                            px-4 py-2
                            text-xs text-slate-300
                            transition duration-300
                            hover:border-cyan-500/60
                            hover:text-cyan-300
                            md:text-sm
                          "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CREDENTIAL */}

                    {certification.credential !== "#" && (
                      <div className="mt-8 border-t border-slate-800 pt-6">
                        <a
                          href={certification.credential}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex items-center gap-3
                            text-sm font-semibold
                            text-cyan-400
                            transition
                            duration-300
                            hover:text-cyan-300
                          "
                        >
                          <Award size={18} />

                          View Credential

                          <ExternalLink size={15} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default Certified;