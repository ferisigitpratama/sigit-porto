import { motion } from "motion/react";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaDev,
  FaInstagram,
} from "react-icons/fa";

import { ArrowUpRight } from "lucide-react";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const contacts = [
  {
    title: "Email",
    value: "ferisigitpratama@gmail.com",
    icon: FaEnvelope,
    link: "mailto:ferisigitpratama@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "ferisigitpratama11",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/ferisigitpratama11",
  },
  {
    title: "GitHub",
    value: "ferisigitpratama",
    icon: FaGithub,
    link: "https://github.com/ferisigitpratama",
  },
  {
    title: "Dev Community",
    value: "ferisigitpratama11",
    icon: FaDev,
    link: "https://dev.to/ferisigitpratama11",
  },
  {
    title: "Discord",
    value: "musaparadisiaca6068",
    icon: FaDiscord,
    link: "https://discord.com",
  },
  {
    title: "Instagram",
    value: "musaparadisiacaa_",
    icon: FaInstagram,
    link: "https://instagram.com/musaparadisiacaa_",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950 py-24"
    >
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionTitle
              subtitle="Communication Endpoint"
              title="Let's Connect"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-center leading-8 text-slate-400"
          >
            Open to discussions about network infrastructure,
            ISP operations, enterprise networking, technical
            collaboration, and professional opportunities.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40"
          >
            {/* Header */}

            <div className="flex flex-col gap-5 border-b border-slate-800 px-7 py-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                  <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                  <span className="h-3 w-3 rounded-full bg-slate-600" />
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                  Contact Directory
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
                  Available
                </span>
              </div>
            </div>

            {/* Contact List */}

            <div className="grid md:grid-cols-2">
              {contacts.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    variants={itemVariants}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      x: 4,
                    }}
                    className={`
                      group flex items-center justify-between
                      border-slate-800 px-7 py-6
                      transition-colors duration-300
                      hover:bg-cyan-500/[0.04]

                      ${
                        index < contacts.length - 2
                          ? "border-b"
                          : ""
                      }

                      ${
                        index % 2 === 0
                          ? "md:border-r"
                          : ""
                      }
                    `}
                  >
                    <div className="flex min-w-0 items-center gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-xl text-cyan-400">
                        <Icon />
                      </div>

                      <div className="min-w-0">
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
                          {item.title}
                        </p>

                        <p className="mt-2 truncate text-sm font-medium text-slate-300 transition-colors group-hover:text-cyan-400">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="ml-4 shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}

          <motion.div
            variants={itemVariants}
            className="mt-10 text-center"
          >
            <a
              href="mailto:ferisigitpratama@gmail.com"
              className="inline-flex items-center gap-3 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-7 py-4 font-semibold text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              Start a Conversation

              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;