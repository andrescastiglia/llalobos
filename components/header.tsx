export const Header = () => {
  return (
    <header>
      <h1 className="text-3xl font-bold text-center sm:text-left break-words">
        La Libertad Avanza <span className="text-sm">Lobos</span>
      </h1>
      <p className="text-center sm:text-left">
        El propósito del sitio es mostrar el modelo de transparencia que
        queremos implementar en el municipio.
      </p>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "PoliticalParty",
            "name": "La Libertad Avanza Lobos",
            "alternateName": "LLA Lobos",
            "description": "El propósito del sitio es mostrar el modelo de transparencia que queremos implementar en el municipio.",
            "url": "https://lalibertadavanzalobos.ar",
            "logo": "https://lalibertadavanzalobos.ar/logo.png",
            "email": "contribucion@lalibertadavanzalobos.ar",
            "telephone": "+54 9 (2227) 59-2410",
            "foundingDate": "2024-11-20",
            "founder": {
              "@type": "Person",
              "name": "Javier Milei"
            },              
            "sameAs": [
              "https://www.facebook.com/profile.php?id=100094606170430",
              "https://x.com/lla_lobos",
              "https://www.instagram.com/lalibertadavanzalobos/"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Profesor Pato Luis Lacoste 59",
              "addressLocality": "Lobos",
              "addressRegion": "Buenos Aires",
              "addressCountry": "AR"
            },
            "slogan": "¡Viva la libertad, carajo!"
          }
        `}
      </script>
    </header>
  );
};
