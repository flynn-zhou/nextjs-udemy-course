import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  const items = props.items;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          description={event.description}
          location={event.location}
        />
      ))}
    </ul>
  );
}

export default EventList;
