import { FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer font-[family-name:var(--font-geist-sans)]">
      <footer className="flex justify-center items-center gap-4">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-2"
          href="https://github.com/andrescastiglia/llalobos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> <span className="hidden sm:inline">Github</span>
        </a>
        |
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-2"
          href="https://www.instagram.com/lalibertadavanzalobos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram /> <span className="hidden sm:inline">Instagram</span>
        </a>
        |
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-2"
          href="https://x.com/lla_lobos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter /> <span className="hidden sm:inline">X</span>
        </a>
        |
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-2"
          href="https://www.facebook.com/profile.php?id=100094606170430"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook /> <span className="hidden sm:inline">Facebook</span>
        </a>
      </footer>
    </div>
  );
};
