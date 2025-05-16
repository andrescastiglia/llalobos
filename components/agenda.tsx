"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Calendar,
  momentLocalizer,
  View,
  EventProps,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "react-modal";
import "moment/locale/es";
import { baseUrl } from "@/app/ui/const";
import { FaNewspaper, FaVoteYea } from "react-icons/fa";

moment.locale("es");
moment.updateLocale("es", {
  week: {
    dow: 0,
  },
});

const localizer = momentLocalizer(moment);

enum CalendarType {
  Elecciones = "Elecciones",
  Principal = "Principal",
}

interface AgendaEvent {
  title: string;
  start: Date;
  end: Date;
  description?: string;
  calendar: CalendarType;
}

const messages = {
  allDay: "Todo el día",
  previous: "Antes",
  next: "Después",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "No hay eventos en este rango.",
  showMore: (total: number) => `+ Ver más (${total})`,
};

const fetchEventsFromBackend = async (
  start: Date,
  end: Date
): Promise<AgendaEvent[]> => {
  const response = await fetch(
    `${baseUrl}/api/agenda?time_min=${start.toISOString()}&time_max=${end.toISOString()}`
  );
  const data = await response.json();
  return data.map((event: AgendaEvent) => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end),
  }));
};

export const Agenda: React.FC = () => {
  Modal.setAppElement("#__next");

  const [events, setEvents] = useState<AgendaEvent[]>([]);
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>("month");
  const [loading, setLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AgendaEvent | null>(null);

  const loadEvents = useCallback(
    async (currentDate: Date, currentView: View) => {
      setLoading(true);
      let startDate: Date;
      let endDate: Date;

      switch (currentView) {
        case "month":
          startDate = moment(currentDate).startOf("month").toDate();
          endDate = moment(currentDate).endOf("month").toDate();
          break;
        case "week":
          startDate = moment(currentDate).startOf("week").toDate();
          endDate = moment(currentDate).endOf("week").toDate();
          break;
        case "day":
          startDate = moment(currentDate).startOf("day").toDate();
          endDate = moment(currentDate).endOf("day").toDate();
          break;
        case "agenda":
          startDate = moment(currentDate).startOf("day").toDate();
          endDate = moment(currentDate).endOf("day").add(1, "month").toDate();
          break;
        default:
          startDate = moment(currentDate).startOf("month").toDate();
          endDate = moment(currentDate).endOf("month").toDate();
          break;
      }

      const fetchedEvents = await fetchEventsFromBackend(startDate, endDate);
      setEvents(fetchedEvents);
      setLoading(false);
    },
    []
  );

  useEffect(() => {
    loadEvents(date, view);
  }, [date, view, loadEvents]);

  const onNavigate = useCallback((newDate: Date) => {
    setDate(newDate);
  }, []);

  const onView = useCallback((newView: View) => {
    setView(newView);
  }, []);

  const onSelectEvent = useCallback((event: AgendaEvent) => {
    setSelectedEvent(event);
  }, []);

  const closeEventDetails = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  const components = useMemo(() => {
    return {
      event: (props: EventProps<AgendaEvent>) => {
        const { event } = props;
        return (
          <div
            title={event.description}
            className="text-sm text-center event-container"
          >
            {event.calendar === CalendarType.Elecciones ? (
              <FaVoteYea />
            ) : (
              <FaNewspaper />
            )}
            <span>{event.title}</span>
          </div>
        );
      },
    };
  }, []);

  return (
    <div style={{ height: "500px" }}>
      {loading && <p>Cargando eventos...</p>}
      <Calendar
        localizer={localizer}
        messages={messages}
        events={events}
        startAccessor="start"
        endAccessor="end"
        date={date}
        view={view}
        onNavigate={onNavigate}
        onView={onView}
        views={["month", "week", "day", "agenda"]}
        components={components}
        selectable={false}
        onSelectEvent={onSelectEvent}
      />
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          onRequestClose={closeEventDetails}
          shouldCloseOnOverlayClick={true}
          overlayClassName="modal-overlay"
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
            },
          }}
        >
          <div onClick={closeEventDetails}>
            <div className="modal-title">
              <span>
                {selectedEvent.calendar === CalendarType.Elecciones ? (
                  <FaVoteYea />
                ) : (
                  <FaNewspaper />
                )}
              </span>
              <span>{selectedEvent.title}</span>
            </div>
            <div className="modal-section">
              <p className="modal-section-title">Inicio:</p>
              <p className="modal-section-content">
                {selectedEvent.start.toLocaleDateString()}{" "}
                {selectedEvent.start.toLocaleTimeString()}
              </p>
            </div>
            <div className="modal-section">
              <p className="modal-section-title">Fin:</p>
              <p className="modal-section-content">
                {selectedEvent.end.toLocaleDateString()}{" "}
                {selectedEvent.end.toLocaleTimeString()}
              </p>
            </div>
            <hr className="modal-divider" />
            <div className="modal-description">
              {selectedEvent.description?.split("\n").map((line, index) => (
                <p key={index}>{line.trim()}</p>
              ))}
            </div>
            <hr className="modal-divider" />
            <div className="modal-footer">{selectedEvent.calendar}</div>
          </div>
        </Modal>
      )}
    </div>
  );
};
