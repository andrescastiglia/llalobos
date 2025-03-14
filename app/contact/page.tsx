import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Page() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-2">Referencias</h1>
      <hr className="mb-4" />
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <a
            href="https://afiliados.pjn.gov.ar/consulta/nueva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center"
          >
            <span>Registro Nacional de Afiliados</span>
            <FaExternalLinkAlt className="ml-2" />
          </a>
        </li>
      </ol>
    </div>
  );
}
