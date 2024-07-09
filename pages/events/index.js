import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventSearch from "../../components/events/event-search";
import { Fragment } from "react";

import { useRouter } from "next/router";

function EventsPage() {
  const router = useRouter();

  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    console.log("fullpath:" + fullpath);
    router.push(fullpath);
  }

  return (
    <Fragment>
      <EventSearch onQuery={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default EventsPage;
