import { SiGithub, SiVelog } from "react-icons/si";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-12 px-6 md:px-12 border-t border-gray-800"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold mb-1">Kim Geunseon</p>
          <a
            href="mailto:geunseon9898@daum.net"
            className="text-sm text-gray-400 hover:text-[#A5EF2F] transition-colors"
          >
            geunseon9898@daum.net
          </a>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/geunseonkim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#A5EF2F] transition-colors"
            >
              <SiGithub />
            </a>
            <a
              href="https://velog.io/@_day136/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#A5EF2F] transition-colors"
            >
              <SiVelog />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
