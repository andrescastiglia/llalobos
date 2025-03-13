import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex gap-4 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-2"
        href="https://github.com/andrescastiglia/llalobos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github.svg"
          alt="Github"
          width={16}
          height={16}
        />
        Github Project →
      </a>

      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-2"
        href="https://www.instagram.com/lalibertadavanzalobos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/instagram.svg"
          alt="Instagram"
          width={16}
          height={16}
        />
        Instagram →
      </a>

      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-2"
        href="https://x.com/lla_lobos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image aria-hidden src="/x.svg" alt="X" width={16} height={16} />X
        (Twitter) →
      </a>

      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-2"
        href="https://www.facebook.com/profile.php?id=100094606170430"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/facebook.svg"
          alt="Facebook"
          width={16}
          height={16}
        />
        Facebook →
      </a>
    </footer>
  );
};
