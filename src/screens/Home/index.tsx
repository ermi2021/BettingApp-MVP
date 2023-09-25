/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View} from "react-native";
import {useState} from "react";

import Header from "../../components/Header/Header";
import styles from "./styles";
import EventTypes from "../../components/EventTypes";
import FeaturedEvent from "../../components/FeaturedEvent";
import RecommendedList from "../../components/RecommendedList";
import {EventType} from "../../utils/EventType";
import {Event} from "../../utils/EventTypesList";
import EventDetail from "../EventDetail";

function Home() {
  const [showEventDetail, setShowEventDetail] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventType>();
  const [selectedEventType, setSelectedEventType] = useState<string>("Football");

  //when specific event is clicked from the Recommeded List
  const onEventSelected = (item: EventType) => {
    setShowEventDetail(true);
    setSelectedEvent(item);
  };
 
  //when event is selected from the EventTypes default is FootBall
  const onEventTypeSelected = (item: Event) => {
    setSelectedEventType(item.name);
  };

  //to allow user hide the userdetail page
  const hideDetail = () => {
    setShowEventDetail(false);
  };

  return (
    <View style={styles.container}>
      <>
        {!showEventDetail ? (
          <>
            <Header />
            <EventTypes onSelect={onEventTypeSelected} />
            <>
              {selectedEventType === "Football" ? (
                <>
                  <FeaturedEvent />
                  <RecommendedList onSelect={onEventSelected} />
                </>
              ) : (
                <></>
              )}
            </>
          </>
        ) : (
          <EventDetail event={selectedEvent} onHideDetail={hideDetail} />
        )}
      </>
    </View>
  );
}

export default Home;
