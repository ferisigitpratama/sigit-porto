import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "../components/Container";

const educationData = [
  {
    id: 1,
    institution: "Universitas Teknokrat Indonesia",
    location: "Bandar Lampung, Indonesia",
    period: "2018 - 2022",
    degree: "Bachelor of Information Technology",
    description:
      "Focused on computer networking, network infrastructure, information technology, and practical implementation of enterprise network technologies.",
    skills: [
      "Computer Networking",
      "Network Infrastructure",
      "Routing",
      "Switching",
      "Linux",
      "MikroTik",
    ],
  },
];

const organizationJourney = [
  {
    id: 1,
    year: "2018",
    title: "Member",
    organization: "UKM PROTEK",
    subtitle: "Programming Teknokrat",
    description:
      "Started my organizational journey as a member of UKM PROTEK and actively participated in technology and computer networking activities.",
  },
  {
    id: 2,
    year: "2019",
    title: "MikroTik Division Tutor",
    organization: "UKM PROTEK",
    subtitle: "Programming Teknokrat",
    description:
      "Mentored members in MikroTik and computer networking fundamentals, including routing, switching, and practical network configuration.",
  },
  {
    id: 3,
    year: "2021 - 2022",
    title: "Chairman & MikroTik Tutor",
    organization: "UKM PROTEK",
    subtitle: "Programming Teknokrat",
    description:
      "Led UKM PROTEK while continuing to mentor members in the MikroTik division, coordinating organizational activities and supporting member development.",
  },
];

const activities = [
  {
    id: 1,
    year: "2020",
    title: "Leadership Education Program 2020",
    role: "Participant",
    description:
      "Participated in the Leadership Education Program focused on leadership development, organizational management, and human resource management.",
  },
  {
    id: 2,
    year: "2021",
    title: "Teknologi Euphoria Universitas Sriwijaya",
    role: "National Networking Competition",
    achievement: "5th Place",
    description:
      "Represented Universitas Teknokrat Indonesia in a national-level computer networking competition and finished in 5th place.",
  },
  {
    id: 3,
    year: "2022",
    title: "GEMATIK 2022",
    role: "Network Security Competition",
    achievement: "1st Place",
    description:
      "Participated in the network security competition at GEMATIK 2022 and achieved 1st place.",
  },
  {
    id: 4,
    year: "2022",
    title: "FTIK EXPO 2022",
    role: "Event Committee",
    description:
      "Served as an event committee member and monitored UKM PROTEK members participating in competitions during FTIK EXPO 2022.",
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

function Education() {
  const [showJourney, setShowJourney] = useState(false);

  return (
    <section
      id="education"
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
            Academic Background
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Education
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
            Academic background, organizational leadership, and technical
            competition journey that contributed to my professional
            development.
          </p>
        </motion.div>

        {/* EDUCATION */}
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="rounded-[28px] border border-slate-800 bg-slate-900/30 p-8 md:p-12"
            >
              {/* UNIVERSITY HEADER */}
              <div className="flex flex-col gap-6 border-b border-slate-800 pb-10 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400">
                    University
                  </p>

                  <h3 className="text-3xl font-bold text-white md:text-4xl">
                    {education.institution}
                  </h3>

                  <p className="mt-3 text-slate-500">
                    {education.location}
                  </p>
                </div>

                <span className="w-fit rounded-full border border-slate-700 px-6 py-3 text-xs font-semibold tracking-[0.25em] text-slate-300">
                  {education.period}
                </span>
              </div>

              {/* DEGREE */}
              <div className="pt-10">
                <h4 className="text-2xl font-bold text-white md:text-3xl">
                  {education.degree}
                </h4>

                <p className="mt-5 max-w-5xl text-base leading-8 text-slate-400">
                  {education.description}
                </p>

                {/* SKILLS */}
                <div className="mt-10">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Skills & Technologies
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {education.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-300 transition duration-300 hover:border-cyan-500 hover:text-cyan-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW JOURNEY BUTTON */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-12 flex justify-center"
        >
          <button
            type="button"
            onClick={() => setShowJourney((current) => !current)}
            className="group flex items-center gap-3 rounded-full border border-cyan-500/40 bg-cyan-500/5 px-7 py-3 text-sm font-semibold text-cyan-400 transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            {showJourney
              ? "Hide Organization Journey"
              : "View Organization Journey"}

            <span
              className={`text-lg transition duration-300 ${
                showJourney ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </motion.div>

        {/* ORGANIZATION JOURNEY */}
        <AnimatePresence>
          {showJourney && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <div className="pt-24">
                {/* ORGANIZATION HEADER */}
                <div className="mb-14 text-center">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
                    Leadership Journey
                  </p>

                  <h3 className="text-3xl font-bold text-white md:text-5xl">
                    Organization Experience
                  </h3>

                  <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
                    My organizational journey from member to chairman while
                    continuing to contribute as a technical tutor.
                  </p>
                </div>

                {/* ORGANIZATION TIMELINE */}
                <div className="relative">
                  <div className="absolute bottom-0 left-[10px] top-0 w-px bg-slate-800 md:left-[14px]" />

                  <div className="space-y-6">
                    {organizationJourney.map((journey, index) => (
                      <motion.div
                        key={journey.id}
                        initial={{
                          opacity: 0,
                          x: -40,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.12,
                        }}
                        className="relative pl-10 md:pl-14"
                      >
                        <div className="absolute left-0 top-8 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-500 bg-slate-950 md:h-7 md:w-7">
                          <div className="h-2 w-2 rounded-full bg-cyan-400" />
                        </div>

                        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-7 transition duration-300 hover:border-cyan-500/50 md:p-8">
                          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                                {journey.organization}
                              </p>

                              <h4 className="mt-3 text-2xl font-bold text-white">
                                {journey.title}
                              </h4>

                              <p className="mt-2 text-sm text-slate-500">
                                {journey.subtitle}
                              </p>
                            </div>

                            <span className="w-fit rounded-full border border-cyan-500/30 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-400">
                              {journey.year}
                            </span>
                          </div>

                          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
                            {journey.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ACTIVITIES */}
                <div className="mt-24">
                  <div className="mb-14 text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
                      Activities & Achievements
                    </p>

                    <h3 className="text-3xl font-bold text-white md:text-5xl">
                      Academic Journey
                    </h3>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {activities.map((activity, index) => (
                      <motion.div
                        key={activity.id}
                        initial={{
                          opacity: 0,
                          y: 40,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                        }}
                        className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-7 transition duration-300 hover:border-cyan-500/50"
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                              {activity.role}
                            </p>

                            <h4 className="mt-3 text-xl font-bold leading-8 text-white">
                              {activity.title}
                            </h4>
                          </div>

                          <span className="shrink-0 rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-400">
                            {activity.year}
                          </span>
                        </div>

                        {activity.achievement && (
                          <div className="mt-6">
                            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 text-sm font-semibold text-emerald-400">
                              {activity.achievement}
                            </span>
                          </div>
                        )}

                        <p className="mt-6 leading-7 text-slate-400">
                          {activity.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}

export default Education;