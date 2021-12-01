import { useState } from "react";
import {useRouter} from 'next/router'
function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  async function fetchHoathinhEvents() {
    const res = await fetch("http://localhost:4000/events?category=hoathinh");
    const data = await res.json();
    router.push("/events?category=hoathinh")
    setEvents(data);
  }
  return (
    <>
      <button onClick={fetchHoathinhEvents}>Hoạt hình event</button>
      <h3>List of events</h3>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.data} | {event.category}
          </h2>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}
export default EventList;

export async function getServerSideProps(context) {
  const {category} = context.query;
  const queryString = category ? "category=hoathinh" : "";
  const res = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await res.json();
  return {
    props: {
      eventList: data,
    },
  };
}
