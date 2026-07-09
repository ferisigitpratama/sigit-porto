import {
  Router,
  Server,
  Monitor,
  Activity,
} from "lucide-react";

const skills = [
  {
    id: 1,
    title: "Routing & Switching",
    subtitle: "Enterprise Routing Protocols",
    icon: Router,
    items: [
      "BGP",
      "OSPF",
      "MPLS",
      "VPLS",
      "EVPN",
      "VXLAN",
      "VRRP",
      "QinQ",
      "VLAN",
      "EtherChannel",
    ],
  },

  {
    id: 2,
    title: "Network Platforms",
    subtitle: "Network Operating Systems & Vendors",
    icon: Server,
    items: [
      "Cisco",
      "Huawei",
      "Aruba",
      "MikroTik",
      "Juniper",
    ],
  },

  {
    id: 3,
    title: "Linux & Virtualization",
    subtitle: "Infrastructure Technologies",
    icon: Activity,
    items: [
      "Linux",
      "Docker",
      "Proxmox",
      "VMware",
      "KVM",
    ],
  },

  {
    id: 4,
    title: "Monitoring & Operations",
    subtitle: "Monitoring, Troubleshooting & NOC",
    icon: Monitor,
    items: [
      "Zabbix",
      "LibreNMS",
      "Grafana",
      "PRTG",
      "The Dude",
    ],
  },
];

export default skills;