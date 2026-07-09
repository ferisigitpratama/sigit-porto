import Container from "../components/Container";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          {/* Left */}
          <div>
            <h2 className="text-xl font-bold tracking-wider text-white">
              FERI SIGIT PRATAMA
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Network Engineer • Network Operations Center • Information Technology Enthusiast
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://github.com/ferisigitpratama"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/ferisigitpratama11"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://dev.to/ferisigitpratama11"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaDev />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {year} Feri Sigit Pratama. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;