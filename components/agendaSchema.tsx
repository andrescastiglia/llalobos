import React from "react";

export enum CalendarType {
  Elecciones = "Elecciones",
  Principal = "Principal",
}

export interface AgendaEvent {
  title: string;
  start: Date;
  end: Date;
  description?: string;
  calendar: CalendarType;
}

export const AgendaSchema: React.FC<{ events: AgendaEvent[] }> = ({ events }) => {
  const schemaData = {
    "event": events.map((event) => ({
      "@context": "https://schema.org",
      "@type": "Event",
      "name": event.title,
      "startDate": event.start.toISOString(),
      "endDate": event.end.toISOString(),
      "description": event.description || "",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Casa de la Libertad",
        "address": "Profesor Pato Luis Lacoste 59, Lobos, Buenos Aires, Argentina",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};