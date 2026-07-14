import { motion } from "motion/react";
import {
  Network,
  Server,
  Terminal,
  Monitor,
  GitBranch,
  Globe,
  Layers,
  Shield,
  Wifi,
  Box,
  Cpu,
  Activity,
  Eye,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

import Container from "../components/Container";

const skillGroups = [
  {
    id: 1,
    title: "Routing & Switching",
    subtitle: "Routing, Switching & Transport",
    icon: Network,

    skills: [
      { name: "BGP", icon: GitBranch },
      { name: "OSPF", icon: GitBranch },
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
    id: 2,
    title: "Network Platforms",
    subtitle: "Vendors & Network Operating Systems",
    icon: Server,

    skills: [
      { name: "Cisco", icon: Server },
      { name: "Huawei", icon: Server },
      { name: "Aruba", icon: Wifi },
      { name: "MikroTik", icon: Wifi },
      { name: "Juniper", icon: Server },
      { name: "ZTE", icon: Server },
      { name: "Ubiquiti", icon: Wifi },
      { name: "Dell", icon: Server },
      { name: "Cumulus", icon: Server },
    ],
  },

  {
    id: 3,
    title: "Linux & Virtualization",
    subtitle: "Infrastructure Technologies",
    icon: Terminal,

    skills: [
      { name: "Linux", icon: Terminal },
      { name: "Docker", icon: Box },
      { name: "Proxmox", icon: Layers },
      { name: "VMware", icon: Cpu },
      { name: "Virtual Box", icon: Box },
    ],
  },

  {
    id: 4,
    title: "Monitoring & Operations",
    subtitle: "Monitoring, Troubleshooting & NOC",
    icon: Monitor,

    skills: [
      { name: "Zabbix", icon: Activity },
      { name: "LibreNMS", icon: Eye },
      { name: "Grafana", icon: ChartNoAxesColumnIncreasing },
      { name: "PRTG", icon: Monitor },
      { name: "The Dude", icon: Wifi },
      { name: "Cacti", icon: Monitor },
    ],
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
    y: 40,
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

function Skills() {
  return (
    <section
      id="skills"
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
            Skills & Technologies
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Technical Expertise
          </h2>
        </motion.div>

        {/* SKILL LIST */}

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
                key={group.id}
                variants={itemVariants}
                whileHover={{
                  y: -3,
                }}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 transition-colors duration-300 hover:border-cyan-500/50"
              >
                <div
                  className="
                    flex flex-col
                    md:grid
                    md:grid-cols-[420px_1fr]
                  "
                >
                  {/* TITLE */}

                  <div
                    className="
                      flex items-center gap-5
                      border-b border-slate-800
                      p-6
                      md:border-b-0
                      md:border-r
                      md:p-8
                    "
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 md:h-16 md:w-16">
                      <GroupIcon
                        size={28}
                        strokeWidth={1.7}
                        className="text-cyan-400"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-white md:text-2xl">
                        {group.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500 md:text-base">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* SKILLS */}

                  <div className="flex items-center p-6 md:p-8">
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill) => {
                        const SkillIcon = skill.icon;

                        return (
                          <div
                            key={skill.name}
                            className="
                              flex items-center gap-2
                              rounded-full
                              border border-cyan-500/40
                              px-4 py-2
                              text-sm text-cyan-300
                              transition duration-300
                              hover:border-cyan-400
                              hover:bg-cyan-500/10
                              hover:text-cyan-200
                            "
                          >
                            <SkillIcon
                              size={16}
                              strokeWidth={1.7}
                              className="shrink-0 text-cyan-400"
                            />

                            <span>{skill.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default Skills;