import { motion } from "framer-motion";

import Container from "../components/Container";

import experiences from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute bottom-20 right-0 h-[400px] w-[400px] rounded-full bg-sky-500/5 blur-[150px]" />
      </div>

      <Container>
        {/* SECTION HEADER */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative z-10 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
            Career Journey
          </p>

          <h2 className="mt-5 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            Professional Experience
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            My professional journey in network operations, infrastructure,
            technical support, and service operations.
          </p>
        </motion.div>

        {/* EXPERIENCE TIMELINE */}

        <div className="relative z-10 mt-20 space-y-20">
          {experiences.map((experience, experienceIndex) => (
            <motion.div
              key={`${experience.company}-${experienceIndex}`}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.7,
                delay: experienceIndex * 0.1,
              }}
              className="relative"
            >
              {/* COMPANY */}

              <div className="relative pl-16 md:pl-24">
                {/* COMPANY TIMELINE LINE */}

                <div className="absolute left-5 top-0 h-full w-px bg-slate-800 md:left-8">
                  <div className="h-full w-px bg-gradient-to-b from-cyan-400 via-cyan-500/40 to-transparent" />
                </div>

                {/* COMPANY TIMELINE DOT */}

                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/50 bg-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.15)] md:h-16 md:w-16">
                  <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] md:h-5 md:w-5" />
                </div>

                {/* COMPANY HEADER */}

                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white md:text-3xl lg:text-4xl">
                      {experience.company}
                    </h3>

                    {experience.location && (
                      <p className="mt-3 text-sm text-slate-500 md:text-base">
                        {experience.location}
                      </p>
                    )}
                  </div>

                  {experience.period && (
                    <span className="w-fit rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 text-xs font-bold uppercase tracking-[3px] text-slate-300">
                      {experience.period}
                    </span>
                  )}
                </div>

                {/* ROLES */}

                <div className="relative mt-12 space-y-10 md:mt-16">
                  {/* ROLE TIMELINE */}

                  <div className="absolute -left-9 top-5 h-[calc(100%-2rem)] w-px bg-slate-700 md:-left-12" />

                  {experience.roles.map((role, roleIndex) => (
                    <motion.div
                      key={`${role.title}-${roleIndex}`}
                      initial={{
                        opacity: 0,
                        x: 40,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.1,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: roleIndex * 0.1,
                      }}
                      className="relative"
                    >
                      {/* ROLE DOT */}

                      <div className="absolute -left-[42px] top-7 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-500 bg-slate-950 md:-left-[55px]">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      </div>

                      {/* ROLE CARD */}

                      <div
                        className="
                          rounded-3xl
                          border
                          border-slate-800
                          bg-slate-900/40
                          p-6
                          backdrop-blur
                          transition-all
                          duration-500
                          hover:-translate-y-1
                          hover:border-cyan-500/30
                          hover:bg-slate-900/60
                          md:p-10
                        "
                      >
                        {/* ROLE HEADER */}

                        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h4 className="text-2xl font-black text-white md:text-3xl">
                              {role.title}
                            </h4>

                            {role.type && (
                              <p className="mt-3 text-sm text-slate-500 md:text-base">
                                {role.type}
                              </p>
                            )}
                          </div>

                          {role.period && (
                            <span className="w-fit rounded-full border border-cyan-500/30 bg-cyan-500/5 px-5 py-3 text-xs font-bold uppercase tracking-[3px] text-cyan-400">
                              {role.period}
                            </span>
                          )}
                        </div>

                        {/* JOB DESCRIPTION */}

                        {role.responsibilities &&
                          role.responsibilities.length > 0 && (
                            <div className="mt-10">
                              <h5 className="text-sm font-bold uppercase tracking-[4px] text-white">
                                Job Description
                              </h5>

                              <ul className="mt-6 space-y-5">
                                {role.responsibilities.map(
                                  (responsibility, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start gap-4"
                                    >
                                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                                      <span className="text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                                        {responsibility}
                                      </span>
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                          )}

                        {/* SUCCESS INDICATORS */}

                        {role.achievements &&
                          role.achievements.length > 0 && (
                            <div className="mt-10 border-t border-slate-800 pt-10">
                              <h5 className="text-sm font-bold uppercase tracking-[4px] text-cyan-400">
                                Success Indicators
                              </h5>

                              <ul className="mt-6 space-y-5">
                                {role.achievements.map(
                                  (achievement, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start gap-4"
                                    >
                                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />

                                      <span className="text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                                        {achievement}
                                      </span>
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                          )}

                        {/* SKILLS */}

                        {role.skills && role.skills.length > 0 && (
                          <div className="mt-10 border-t border-slate-800 pt-8">
                            <p className="text-xs font-semibold uppercase tracking-[4px] text-slate-500">
                              Skills & Technologies
                            </p>

                            <div className="mt-5 flex flex-wrap gap-3">
                              {role.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="
                                    rounded-full
                                    border
                                    border-slate-700
                                    bg-slate-900/60
                                    px-5
                                    py-2
                                    text-sm
                                    text-slate-300
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-cyan-400
                                    hover:text-cyan-400
                                  "
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;