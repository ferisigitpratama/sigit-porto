import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDiscord,
  FaDev,
  FaInstagram,
} from "react-icons/fa";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const contacts = [
  {
    title: "Email",
    value: "ferisigitpratama@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:ferisigitpratama@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/ferisigitpratama11",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/ferisigitpratama11",
  },
  {
    title: "GitHub",
    value: "github.com/ferisigitpratama",
    icon: <FaGithub />,
    link: "https://github.com/ferisigitpratama",
  },
  {
    title: "Dev Community",
    value: "dev.to/ferisigitpratama11",
    icon: <FaDev />,
    link: "https://dev.to/ferisigitpratama11",
  },
  {
    title: "Discord",
    value: "musaparadisiaca6068",
    icon: <FaDiscord />,
    link: "https://discord.com/users/musaparadisiaca6068",
  },

   {
    title: "Instagram",
    value: "musaparadisiaca6068",
    icon: <FaInstagram />,
    link: "https://instagram.com/musaparadisiacaa_",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-28"
    >
      <Container>

        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Connect"
        />

        <p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-slate-400">
          I'm always interested in discussing networking, enterprise
          infrastructure, cloud technologies, and collaboration
          opportunities. Feel free to reach out through any of the
          platforms below.
        </p>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">

          {contacts.map((item) => (

            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-700 bg-slate-950 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >

              <div className="text-4xl text-cyan-400">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 break-all text-slate-400 group-hover:text-slate-300">
                {item.value}
              </p>

            </a>

          ))}

        </div>

        <div className="mt-16 text-center">

          <a
            href="mailto:ferisigitpratama@gmail.com"
            className="inline-flex rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Let's Talk
          </a>

        </div>

      </Container>
    </section>
  );
}

export default Contact;