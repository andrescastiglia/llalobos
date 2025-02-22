import Image from "next/image";

export default function footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/andrescastiglia/llalobos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Github Project →
      </a>
    </footer>
  );
}
