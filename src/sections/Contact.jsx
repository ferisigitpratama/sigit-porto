import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-32"
    >
      <Container>
        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Connect"
        />

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-lg leading-8 text-slate-400">
            I'm always interested in discussing networking,
            infrastructure, and enterprise solutions.
            Feel free to reach out through any platform below.
          </p>

          <div className="mt-12 flex justify-center gap-6">

            <a
              href="mailto:ferisigitpratama@gmail.com"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 text-2xl transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/ferisigitpratama"
              target="_blank"
              rel="noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 text-2xl transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/ferisigitpratama11"
              target="_blank"
              rel="noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 text-2xl transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
            <div className="mt-10">
  <a
    href="mailto:ferisigitpratama@gmail.com"
    className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400"
  >
    Let's Talk
  </a>
</div>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Contact;