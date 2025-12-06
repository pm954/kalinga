import EventCalendar from "../components/news_and_events/event_calendar";
import ThreeCardSider from "../components/general/three_card_sider";
import UpcomingEvents from "../components/admissions/upcoming_events";
function NewsAndEvents() {
  return (
    <div>
      <EventCalendar />
      <UpcomingEvents />
      <ThreeCardSider />
    </div>
  );
}

export default NewsAndEvents;