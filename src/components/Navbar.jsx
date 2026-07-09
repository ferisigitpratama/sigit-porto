import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Container from "./Container";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    {
      name: "Home",
      to: "home",
    },
    {
      name: "About",
      to: "about",
    },
    {
      name: "Experience",
      to: "experience",
    },
    {
      name: "Education",
      to: "education",
    },
    {
      name: "Projects",
      to: "projects",
    },
    {
      name: "Contact",
      to: "contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-slate-950/80 backdrop-blur border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <h1 className="text-xl font-bold tracking-wider">
            FERI SIGIT
          </h1>

          <nav className="hidden md:flex gap-8">
            {menus.map((menu) => (
              <Link
                key={menu.to}
                to={menu.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-slate-300 hover:text-cyan-400 transition"
              >
                {menu.name}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;