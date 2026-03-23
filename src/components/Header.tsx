import type { NavItem } from "./types";
const navItems: NavItem[] = [
  {
    label: "⛰️🏔️🌋",
    href: "/",
  },
  {
    label: "About Me",
    href: "#about",
  },
  {
    label: "Activities",
    href: "#activities",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <header className="px-4 py-6 fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-none">
      <nav className="max-w-full mx-auto">
        <ul
          className="flex flex-wrap justify-center md:justify-around items-center gap-x-4 gap-y-2 text-sm md:text-base lg:text-lg font-medium 
         "
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-[#A5EF2F] transition-colors duration-200 inline-block scale-y-110"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
