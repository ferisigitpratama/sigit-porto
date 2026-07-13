import { motion } from "motion/react";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import Container from "../components/Container";

const certifications = [
  {
    id: 1,
    issuer: "MikroTik",
    title: "MikroTik Certified",
    certification: "MTCNA - MikroTik Certified Network Associate",
    status: "Verified Credential",
    description:
      "Professional certification demonstrating technical knowledge and practical understanding of MikroTik RouterOS and network infrastructure.",
    skills: ["MikroTik", "RouterOS", "Networking"],
    credentialUrl: "#",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      <Container>
        {/* HEADER */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
            Certifications
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Professional Credentials
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Industry certifications and technical credentials supporting my
            expertise in networking and infrastructure technologies.
          </p>
        </motion.div>

        {/* CERTIFICATIONS */}

        <div className="space-y-5">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/30 transition-colors duration-300 hover:border-cyan-500/60"
            >
              {/* TOP ACCENT */}

              <div className="absolute left-0 top-0 h-full w-[2px] bg-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="grid md:grid-cols-[220px_1fr]">
                {/* ISSUER */}

                <div className="flex flex-col justify-between border-b border-slate-800 p-8 md:border-b-0 md:border-r md:p-10">
                  <div>
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                      <Award
                        size={30}
                        strokeWidth={1.7}
                        className="text-cyan-400"
                      />
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                      Issued By
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {certification.issuer}
                    </h3>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm text-emerald-400">
                    <ShieldCheck size={17} />

                    <span>{certification.status}</span>
                  </div>
                </div>

                {/* CERTIFICATION DETAIL */}

                <div className="p-8 md:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
                    {certification.title}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                    {certification.certification}
                  </h3>

                  <p className="mt-6 max-w-4xl text-base leading-8 text-slate-400">
                    {certification.description}
                  </p>

                  {/* FOOTER */}

                  <div className="mt-10 flex flex-col gap-6 border-t border-slate-800 pt-7 lg:flex-row lg:items-center lg:justify-between">
                    {/* SKILLS */}

                    <div className="flex flex-wrap gap-3">
                      {certification.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition duration-300 group-hover:border-cyan-500/40"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CREDENTIAL */}

                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-fit items-center gap-3 text-sm font-semibold text-cyan-400 transition duration-300 hover:text-cyan-300"
                    >
                      View Credential

                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Certifications;