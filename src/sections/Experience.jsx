import { motion } from "framer-motion";
import Container from "../components/Container";
import experiences from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#020817] py-24"
    >
      <Container>
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">
            Career Journey
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Professional Experience
          </h2>
        </motion.div>

        {/* EXPERIENCE TIMELINE */}
        <div className="relative mx-auto max-w-6xl">
          {/* MAIN TIMELINE LINE */}
          <div className="absolute bottom-0 left-[18px] top-0 w-px bg-slate-800 md:left-[26px]" />

          <div className="space-y-16">
            {experiences.map((experience, companyIndex) => (
              <motion.div
                key={companyIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: companyIndex * 0.1,
                }}
                className="relative"
              >
                {/* COMPANY HEADER */}
                <div className="relative mb-8 pl-14 md:pl-20">
                  {/* COMPANY DOT */}
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/50 bg-[#031426] md:h-[54px] md:w-[54px]">
                    <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                  </div>

                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white md:text-3xl">
                        {experience.company}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500 md:text-base">
                        {experience.location}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-slate-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                      {experience.period}
                    </span>
                  </div>
                </div>

                {/* ROLES */}
                <div className="space-y-6 pl-14 md:pl-20">
                  {experience.roles.map((role, roleIndex) => (
                    <motion.div
                      key={roleIndex}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.5,
                        delay: roleIndex * 0.1,
                      }}
                      className="relative"
                    >
                      {/* ROLE TIMELINE DOT */}
                      <div className="absolute -left-[39px] top-7 flex h-4 w-4 items-center justify-center rounded-full border border-cyan-500 bg-[#020817] md:-left-[61px]">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      </div>

                      {/* ROLE CARD */}
                      <div className="rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-7 transition duration-300 hover:border-cyan-500/40 md:px-8 md:py-8">
                        {/* ROLE HEADER */}
                        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h4 className="text-2xl font-bold text-white md:text-3xl">
                              {role.title}
                            </h4>

                            {role.type && (
                              <p className="mt-2 text-sm text-slate-500">
                                {role.type}
                              </p>
                            )}
                          </div>

                          <span className="w-fit rounded-full border border-cyan-500/30 bg-cyan-500/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                            {role.period}
                          </span>
                        </div>

                        {/* CONTENT GRID */}
                        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                          {/* JOB DESCRIPTION */}
                          <div>
                            <h5 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                              Job Description
                            </h5>

                            <ul className="space-y-4">
                              {role.responsibilities.map(
                                (responsibility, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                                  >
                                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                                    <span>{responsibility}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* SUCCESS INDICATORS */}
                          <div>
                            <h5 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                              Success Indicators
                            </h5>

                            <ul className="space-y-4">
                              {role.achievements.map(
                                (achievement, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                                  >
                                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />

                                    <span>{achievement}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>

                        {/* SKILLS */}
                        {role.skills && role.skills.length > 0 && (
                          <div className="mt-7 flex flex-wrap gap-2">
                            {role.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-300 transition duration-300 hover:border-cyan-500/50 hover:text-cyan-400"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;