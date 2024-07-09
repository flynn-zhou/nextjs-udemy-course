import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilterEventsPage() {
  const router = useRouter();
  console.log("router.query:" + router.query.slug);

  const filterQuery = router.query.slug;
  //这里删掉报错TypeError: Cannot read properties of undefined (reading '0')
  //This error happened while generating the page. Any console logs will be displayed in the terminal window.
  if (!filterQuery) {
    return <p className="center">Loading...</p>;
  }

  const year = filterQuery[0];
  const month = filterQuery[1];

  const numberYear = +year;
  const numberMonth = +month;

  if (
    isNaN(numberYear) ||
    isNaN(numberMonth) ||
    numberYear > 2030 ||
    numberYear < 2021 ||
    numberMonth < 1 ||
    numberMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter, please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numberYear,
    month: numberMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numberYear, numberMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilterEventsPage;
