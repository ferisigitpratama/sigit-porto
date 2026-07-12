import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import {
  FiChevronDown,
  FiChevronUp,
  FiExternalLink,
} from "react-icons/fi";

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
      "MikroTik",
      "Routing",
      "Switching",
      "Linux",
      "Network Infrastructure",
    ],

    organization: {
      name: "UKM PROTEK",

      fullName: "Programming Teknokrat",

      period: "2018 - 2022",

      description:
        "An active member of UKM PROTEK (Programming Teknokrat), progressing through multiple organizational roles from member to MikroTik Division Tutor and eventually Chairman while continuing technical mentoring activities.",

      roles: [
        {
          id: 1,

          title: "Member",

          period: "2018 - 2019",

          description: [
            "Participated in organizational activities and technical learning programs focused on information technology and computer networking.",

            "Developed foundational knowledge in MikroTik networking, routing, and network infrastructure through internal learning activities.",

            "Collaborated with other members in technical discussions and practical networking activities.",
          ],

          skills: [
            "Teamwork",
            "Computer Networking",
            "MikroTik",
            "Technical Learning",
          ],
        },

        {
          id: 2,

          title: "MikroTik Division Tutor",

          period: "2019 - 2021",

          description: [
            "Delivered technical mentoring and practical learning sessions related to MikroTik networking and network fundamentals.",

            "Assisted members in understanding routing, switching, IP addressing, and MikroTik RouterOS configuration.",

            "Prepared technical materials and practical networking labs to support internal learning activities.",
          ],

          skills: [
            "Student Mentoring",
            "Public Speaking",
            "MikroTik",
            "RouterOS",
            "Routing",
            "Technical Training",
          ],
        },

        {
          id: 3,

          title: "Chairman & MikroTik Division Tutor",

          period: "2021 - 2022",

          description: [
            "Led UKM PROTEK organizational activities and coordinated multiple technical divisions and member development programs.",

            "Managed organizational planning, internal coordination, and technical learning activities for organization members.",

            "Continued serving as a MikroTik Division Tutor by mentoring members in networking concepts and practical MikroTik configuration.",

            "Monitored and coordinated organization members participating in campus technology competitions and technical events.",
          ],

          skills: [
            "Leadership",
            "Organization Management",
            "Team Management",
            "Public Speaking",
            "Student Mentoring",
            "MikroTik",
            "Network Engineering",
          ],
        },
      ],
    },

    events: [
      {
        id: 1,

        title: "FTIK Expo 2022",

        role: "Committee & Organization Coordinator",

        period: "2022",

        description: [
          "Participated as an event committee member rather than a competition participant.",

          "Supported event coordination and operational activities during FTIK Expo 2022.",

          "Monitored and coordinated UKM PROTEK members participating in technology competitions during the event.",
        ],

        skills: [
          "Event Coordination",
          "Leadership",
          "Team Monitoring",
          "Communication",
        ],

        article:
          "https://lampungpro.co/news/ftik-universitas-teknokrat-indonesia-gelar-expo-2022-hadirkan-teknologi-tepat-guna",
      },

      {
        id: 2,

        title: "GEMATIK 2022",

        role: "Committee & Organization Coordinator",

        period: "2022",

        description: [
          "Participated in GEMATIK 2022 as part of the event committee and organizational coordination team.",

          "Monitored UKM PROTEK members participating in technology and information technology competitions.",

          "Supported communication and coordination between organization members during competition activities.",
        ],

        skills: [
          "Organization Coordination",
          "Team Monitoring",
          "Leadership",
          "Communication",
        ],

        article:
          "https://teknokrat.ac.id/ftik-festival-gematik-2022achieving-brilliant-achievements-with-the-faculty-of-engineering-and-computer-science/",
      },
    ],
  },
];

function Education() {
  const [expandedEducation, setExpandedEducation] = useState(null);

  const toggleEducation = (id) => {
    setExpandedEducation((currentId) =>
      currentId === id ? null : id
    );
  };

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-900 py-32"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-sky-500/5 blur-[170px]" />
      </div>

      <Container>
        {/* SECTION HEADER */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative z-10 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
            Academic Background
          </p>

          <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
            Education
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Academic background and organizational journey that
            contributed to my technical, leadership, and communication
            development.
          </p>
        </motion.div>

        {/* EDUCATION LIST */}

        <div className="relative z-10 mt-20 space-y-16">
          {educationData.map((item, educationIndex) => {
            const isExpanded =
              expandedEducation === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: educationIndex * 0.1,
                }}
                className="
                  rounded-[32px]
                  border
                  border-slate-800
                  bg-slate-950/50
                  p-6
                  backdrop-blur
                  md:p-10
                  lg:p-12
                "
              >
                {/* EDUCATION HEADER */}

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[5px] text-cyan-400">
                      University
                    </p>

                    <h3 className="mt-5 text-3xl font-black text-white md:text-4xl">
                      {item.institution}
                    </h3>

                    <p className="mt-3 text-slate-500">
                      {item.location}
                    </p>
                  </div>

                  <span className="w-fit shrink-0 rounded-full border border-slate-700 bg-slate-950/60 px-6 py-3 text-xs font-bold uppercase tracking-[3px] text-slate-300">
                    {item.period}
                  </span>
                </div>

                {/* DEGREE */}

                <div className="mt-12 border-t border-slate-800 pt-10">
                  <h4 className="text-2xl font-black text-white md:text-3xl">
                    {item.degree}
                  </h4>

                  <p className="mt-5 max-w-4xl text-sm leading-8 text-slate-400 md:text-base">
                    {item.description}
                  </p>
                </div>

                {/* EDUCATION SKILLS */}

                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[4px] text-slate-500">
                    Skills & Technologies
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-slate-700
                          bg-slate-900/60
                          px-4
                          py-2
                          text-xs
                          text-slate-300
                          transition-all
                          duration-300
                          hover:border-cyan-400
                          hover:text-cyan-400
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* VIEW ORGANIZATIONAL JOURNEY */}

                <div className="mt-10 border-t border-slate-800 pt-8">
                  <button
                    type="button"
                    onClick={() =>
                      toggleEducation(item.id)
                    }
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-cyan-500/30
                      bg-cyan-500/5
                      px-6
                      py-3
                      text-sm
                      font-bold
                      text-cyan-400
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-400
                      hover:bg-cyan-500/10
                    "
                  >
                    {isExpanded
                      ? "View Less"
                      : "View Organizational Journey"}

                    {isExpanded ? (
                      <FiChevronUp size={18} />
                    ) : (
                      <FiChevronDown size={18} />
                    )}
                  </button>
                </div>

                {/* ORGANIZATIONAL JOURNEY */}

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      key={`organization-${item.id}`}
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 20,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      {/* ORGANIZATION HEADER */}

                      <div className="mt-12 border-t border-slate-800 pt-12">
                        <p className="text-xs font-semibold uppercase tracking-[5px] text-cyan-400">
                          Organizational Journey
                        </p>

                        <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h3 className="text-2xl font-black text-white md:text-3xl">
                              {item.organization.name}
                            </h3>

                            <p className="mt-2 font-semibold text-cyan-400">
                              {item.organization.fullName}
                            </p>

                            <p className="mt-5 max-w-3xl leading-8 text-slate-400">
                              {
                                item.organization
                                  .description
                              }
                            </p>
                          </div>

                          <span className="w-fit shrink-0 rounded-full border border-slate-700 bg-slate-950/60 px-5 py-3 text-xs font-bold uppercase tracking-[3px] text-slate-300">
                            {item.organization.period}
                          </span>
                        </div>

                        {/* ORGANIZATION TIMELINE */}

                        <div className="relative mt-12 pl-10 md:pl-14">
                          <div className="absolute bottom-5 left-[7px] top-5 w-px bg-gradient-to-b from-cyan-400 via-slate-700 to-transparent" />

                          <div className="space-y-8">
                            {item.organization.roles.map(
                              (role, roleIndex) => (
                                <motion.div
                                  key={role.id}
                                  initial={{
                                    opacity: 0,
                                    x: 40,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  transition={{
                                    duration: 0.5,
                                    delay:
                                      roleIndex * 0.1,
                                  }}
                                  className="relative"
                                >
                                  {/* TIMELINE DOT */}

                                  <div className="absolute -left-10 top-7 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-500 bg-slate-950 md:-left-14">
                                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                  </div>

                                  {/* ROLE CARD */}

                                  <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 md:p-8">
                                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                                      <h4 className="text-xl font-black text-white md:text-2xl">
                                        {role.title}
                                      </h4>

                                      <span className="w-fit rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-cyan-400">
                                        {role.period}
                                      </span>
                                    </div>

                                    {/* ROLE DESCRIPTION */}

                                    <div className="mt-8">
                                      <p className="text-xs font-semibold uppercase tracking-[4px] text-slate-500">
                                        Role Description
                                      </p>

                                      <ul className="mt-5 space-y-4">
                                        {role.description.map(
                                          (
                                            description,
                                            index
                                          ) => (
                                            <li
                                              key={index}
                                              className="flex items-start gap-4"
                                            >
                                              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                                              <span className="text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                                                {
                                                  description
                                                }
                                              </span>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>

                                    {/* ROLE SKILLS */}

                                    <div className="mt-8 border-t border-slate-800 pt-7">
                                      <p className="text-xs font-semibold uppercase tracking-[4px] text-slate-500">
                                        Skills & Technologies
                                      </p>

                                      <div className="mt-5 flex flex-wrap gap-3">
                                        {role.skills.map(
                                          (skill) => (
                                            <span
                                              key={skill}
                                              className="
                                                rounded-full
                                                border
                                                border-slate-700
                                                bg-slate-900/60
                                                px-4
                                                py-2
                                                text-xs
                                                text-slate-300
                                                transition-all
                                                duration-300
                                                hover:border-cyan-400
                                                hover:text-cyan-400
                                              "
                                            >
                                              {skill}
                                            </span>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      {/* CAMPUS EVENTS */}

                      <div className="mt-16 border-t border-slate-800 pt-12">
                        <p className="text-xs font-semibold uppercase tracking-[5px] text-cyan-400">
                          Campus Events
                        </p>

                        <h3 className="mt-4 text-2xl font-black text-white md:text-3xl">
                          Committee & Organization Coordination
                        </h3>

                        <p className="mt-5 max-w-3xl leading-8 text-slate-400">
                          Involvement in campus technology
                          events as a committee member and
                          organizational coordinator,
                          supporting and monitoring UKM
                          PROTEK members participating in
                          technical competitions.
                        </p>

                        {/* EVENTS GRID */}

                        <div className="mt-10 grid gap-8 lg:grid-cols-2">
                          {item.events.map(
                            (event, eventIndex) => (
                              <motion.div
                                key={event.id}
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
                                  delay:
                                    eventIndex * 0.1,
                                }}
                                className="rounded-3xl border border-slate-800 bg-slate-950/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 md:p-8"
                              >
                                {/* EVENT HEADER */}

                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                  <div>
                                    <h4 className="text-xl font-black text-white md:text-2xl">
                                      {event.title}
                                    </h4>

                                    <p className="mt-3 text-sm font-semibold text-cyan-400">
                                      {event.role}
                                    </p>
                                  </div>

                                  <span className="text-xs font-bold uppercase tracking-[3px] text-slate-500">
                                    {event.period}
                                  </span>
                                </div>

                                {/* EVENT DESCRIPTION */}

                                <ul className="mt-8 space-y-4">
                                  {event.description.map(
                                    (
                                      description,
                                      index
                                    ) => (
                                      <li
                                        key={index}
                                        className="flex items-start gap-4"
                                      >
                                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                                        <span className="text-sm leading-7 text-slate-400">
                                          {
                                            description
                                          }
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>

                                {/* EVENT SKILLS */}

                                <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-800 pt-7">
                                  {event.skills.map(
                                    (skill) => (
                                      <span
                                        key={skill}
                                        className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                                      >
                                        {skill}
                                      </span>
                                    )
                                  )}
                                </div>

                                {/* ARTICLE */}

                                <a
                                  href={event.article}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-cyan-400 transition hover:text-cyan-300"
                                >
                                  View Event Article

                                  <FiExternalLink
                                    size={17}
                                  />
                                </a>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Education;