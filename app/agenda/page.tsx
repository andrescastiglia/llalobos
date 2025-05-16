"use client";

import { Agenda } from "@/components/agenda";
import { FaCalendarPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent));
    setIsAndroid(/Android/.test(navigator.userAgent));
  }, []);

  const publico = () => {
    if (isAndroid) {
      return "intent://calendar.google.com/calendar/ical/lalibertadavanzalobos.ar%40gmail.com/public/basic.ics#Intent;scheme=https;package=com.android.calendar;action=android.intent.action.PICK;S.browser_fallback_url=https://calendar.google.com/calendar/ical/lalibertadavanzalobos.ar%40gmail.com/public/basic.ics;end";
    } else if (isIOS) {
      return "webcal://calendar.google.com/calendar/ical/lalibertadavanzalobos.ar%40gmail.com/public/basic.ics";
    } else {
      return "webcal://calendar.google.com/calendar/ical/lalibertadavanzalobos.ar%40gmail.com/public/basic.ics";
    }
  };

  const election = () => {
    if (isAndroid) {
      return "intent://calendar.google.com/calendar/ical/6024b978a4778af358f1c977c503092b27474dcabcfe55e77397d97cd462c47c%40group.calendar.google.com/public/basic.ics#Intent;scheme=https;package=com.android.calendar;action=android.intent.action.PICK;S.browser_fallback_url=https://calendar.google.com/calendar/ical/6024b978a4778af358f1c977c503092b27474dcabcfe55e77397d97cd462c47c%40group.calendar.google.com/public/basic.ics;end";
    } else if (isIOS) {
      return "webcal://calendar.google.com/calendar/ical/6024b978a4778af358f1c977c503092b27474dcabcfe55e77397d97cd462c47c%40group.calendar.google.com/public/basic.ics";
    } else {
      return "webcal://calendar.google.com/calendar/ical/6024b978a4778af358f1c977c503092b27474dcabcfe55e77397d97cd462c47c%40group.calendar.google.com/public/basic.ics";
    }
  };

  return (
    <div>
      <Agenda />
      <br />
      <br />
      <hr className="mb-4" />
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <a
            href={publico()}
            target={isIOS || isAndroid ? "_self" : "_blank"}
            rel="noopener noreferrer"
            download={isIOS || isAndroid ? undefined : "llalobos.ics"}
            className="hover:underline flex items-center"
          >
            <span>Público</span>
            <FaCalendarPlus className="ml-2" />
          </a>
        </li>
        <li>
          <a
            href={election()}
            target={isIOS || isAndroid ? "_self" : "_blank"}
            rel="noopener noreferrer"
            download={isIOS || isAndroid ? undefined : "electoral.ics"}
            className="hover:underline flex items-center"
          >
            <span>Electoral</span>
            <FaCalendarPlus className="ml-2" />
          </a>
        </li>
      </ol>
    </div>
  );
}