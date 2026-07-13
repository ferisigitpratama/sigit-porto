import { motion } from "framer-motion";

import {
  Activity,
  Box,
  ChartNoAxesColumnIncreasing,
  Cpu,
  Eye,
  Globe,
  Layers,
  Monitor,
  MonitorCheck,
  MonitorCog,
  MonitorUp,
  Network,
  Router,
  Server,
  Shield,
  Terminal,
  Wifi,
} from "lucide-react";

const skillGroups = [
  {
    title: "Routing & Switching",
    subtitle: "Routing, Switching & Transport",
    icon: Network,
    skills: [
      { name: "BGP", icon: Network },
      { name: "OSPF", icon: Network },
      { name: "MPLS", icon: Globe },
      { name: "VPLS", icon: Globe },
      { name: "EVPN", icon: Globe },
      { name: "VXLAN", icon: Layers },
      { name: "VRRP", icon: Shield },
      { name: "QinQ", icon: Layers },
      { name: "VLAN", icon: Layers },
      { name: "EtherChannel", icon: Network },
    ],
  },

  {
    title: "Network Platforms",
    subtitle: "Vendors & Network Operating Systems",
    icon: Server,
    skills: [
      { name: "Cisco", icon: Server },
      { name: "Huawei", icon: Server },
      { name: "Aruba", icon: Server },
      { name: "MikroTik", icon: Server },
      { name: "Juniper", icon: Server },
      { name: "ZTE", icon: Server },
      { name: "Ubiquiti", icon: Server },
      { name: "Dell", icon: Server },
      { name: "Cumulus", icon: Server },
    ],
  },

  {
    title: "Linux & Virtualization",
    subtitle: "Infrastructure Technologies",
    icon: Terminal,
    skills: [
      { name: "Linux", icon: Terminal },
      { name: "Docker", icon: Box },
      { name: "Proxmox", icon: Layers },
      { name: "VMware", icon: Cpu },
        { name: "Virtual Box", icon: Layers },
    ],
  },

  {
    title: "Monitoring & Operations",
    subtitle: "Monitoring, Troubleshooting & NOC",
    icon: Monitor,
    skills: [
      { name: "Zabbix", icon: Monitor},
      { name: "LibreNMS", icon: Monitor },
      {
        name: "Grafana",
        icon: ChartNoAxesColumnIncreasing,
      },
      { name: "PRTG", icon: Monitor },
      { name: "The Dude", icon: Monitor },
        { name: "Cacti", icon: Monitor },
    ],
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

const rackVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020817] py-24"
    >
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        {/* SECTION HEADER */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">
            Skills & Technologies
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Technical Expertise
          </h2>
        </motion.div>

        {/* SERVER RACK */}

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
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={rackVariants}
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-800
                  bg-[#071124]
                  transition-all
                  duration-300
                  hover:border-cyan-500/70
                  hover:shadow-[0_0_35px_rgba(6,182,212,0.08)]
                "
              >
                {/* TOP ACTIVE LINE */}

                <div className="absolute left-0 top-0 h-[1px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

                <div className="flex min-h-[150px] items-stretch">
                  {/* SERVER STATUS */}

                  <div
                    className="
                      hidden
                      w-[140px]
                      shrink-0
                      flex-col
                      items-center
                      justify-center
                      border-r
                      border-slate-800
                      md:flex
                    "
                  >
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />

                      <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

                      <span className="h-3 w-3 rounded-full bg-slate-600" />
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600">
                      Online
                    </span>
                  </div>

                  {/* GROUP INFORMATION */}

                  <div
                    className="
                      flex
                      w-full
                      flex-col
                      justify-center
                      border-r
                      border-slate-800
                      px-8
                      py-8
                      lg:w-[430px]
                    "
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className="
                          flex
                          h-16
                          w-16
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-cyan-500/10
                          text-cyan-400
                          transition-all
                          duration-300
                          group-hover:bg-cyan-500/15
                          group-hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]
                        "
                      >
                        <GroupIcon size={30} strokeWidth={1.8} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {group.title}
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                          {group.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* SKILLS */}

                  <div
                    className="
                      flex
                      flex-1
                      items-center
                      px-8
                      py-8
                    "
                  >
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill) => {
                        const SkillIcon = skill.icon;

                        return (
                          <motion.div
                            key={skill.name}
                            whileHover={{
                              y: -3,
                              scale: 1.03,
                            }}
                            transition={{
                              duration: 0.2,
                            }}
                            className="
                              flex
                              cursor-default
                              items-center
                              gap-2
                              rounded-full
                              border
                              border-cyan-500/40
                              bg-cyan-500/[0.03]
                              px-4
                              py-2
                              text-sm
                              text-cyan-300
                              transition-colors
                              duration-300
                              hover:border-cyan-400
                              hover:bg-cyan-500/10
                              hover:text-cyan-200
                            "
                          >
                            <SkillIcon
                              size={16}
                              strokeWidth={1.8}
                              className="text-cyan-400"
                            />

                            <span>{skill.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;