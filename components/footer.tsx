import { FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex gap-4 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-2"
        href="https://github.com/andrescastiglia/llalobos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub /> Github
      </a>
      |
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-2"
        href="https://www.instagram.com/lalibertadavanzalobos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram /> Instagram
      </a>
      |
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-2"
        href="https://x.com/lla_lobos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter /> X
      </a>
      |
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-2"
        href="https://www.facebook.com/profile.php?id=100094606170430"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook /> Facebook
      </a>
    </footer>
  );
};
