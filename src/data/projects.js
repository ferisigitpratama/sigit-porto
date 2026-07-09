import bonding from "../assets/images/projects/bonding.png";
import ixp from "../assets/images/projects/ixp.png";
import pppoe from "../assets/images/projects/pppoe.jpg";
import qinq from "../assets/images/projects/qinq.png";

const projects = [
  {
    id: 1,
    title: "PPPoE Server Lab",
    category: "ISP LAB",

    image: pppoe,

    description:
      "Enterprise PPPoE Server simulation using Cisco BRAS style termination, VLAN distribution, and MikroTik NAT.",

    tech: [
      "Cisco",
      "PPPoE",
      "MikroTik",
      "VLAN",
      "NAT",
    ],

    github:
      "https://github.com/ferisigitpratama/pppoeserver",

    article:
      "https://dev.to/ferisigitpratama11/pppoe-server-lab-with-cisco-bras-style-termination-vlan-distribution-and-mikrotik-nat-31f6",
  },

  {
    id: 2,
    title: "QinQ over MPLS",
    category: "ENTERPRISE",

    image: qinq,

    description:
      "Enterprise Layer-2 service over Cisco MPLS Backbone using QinQ encapsulation for VLAN transport.",

    tech: [
      "Cisco",
      "MPLS",
      "QinQ",
      "VLAN",
    ],

    github:
      "https://github.com/ferisigitpratama/qinqmpls",

    article:
      "https://dev.to/ferisigitpratama11/qinq-over-mpls-lab-with-mikrotik-and-cisco-4pgh",
  },

  {
    id: 3,
    title: "Internet Exchange Point",
    category: "BGP",

    image: ixp,

    description:
      "Internet Exchange Point simulation using FRRouting Route Server with multiple eBGP participants.",

    tech: [
      "FRRouting",
      "BGP",
      "Linux",
      "IXP",
    ],

    github:
      "https://github.com/ferisigitpratama/IXP-eBGP-Route-Server-with-FRRouting-FRR-",

    article:
      "https://dev.to/ferisigitpratama11/ixp-ebgp-rs-wih-frr-2j49",
  },

  {
    id: 4,
    title: "Bonding Balance RR",
    category: "REDUNDANCY",

    image: bonding,

    description:
      "High Availability B2B connectivity using MikroTik Bonding Balance-RR over dual Metro Ethernet links.",

    tech: [
      "MikroTik",
      "Bonding",
      "Metro Ethernet",
      "B2B",
    ],

    github:
      "https://github.com/ferisigitpratama/bonding-balance-rr",

    article:
      "https://dev.to/ferisigitpratama11/building-redundant-b2b-connectivity-with-mikrotik-bonding-balance-rr-over-dual-metro-ethernet-15f4",
  },
];

export default projects;