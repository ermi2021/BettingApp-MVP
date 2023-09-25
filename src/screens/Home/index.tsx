/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View} from "react-native";
import {useState, useEffect} from "react";

import Header from "../../components/Header/Header";
import styles from "./styles";
import EventTypes from "../../components/EventTypes";
import FeaturedEvent from "../../components/FeaturedEvent";
import RecommendedList from "../../components/RecommendedList";
import {RecomendedListType} from "../../utils/ReccomendationList";
import EventDetail from "../EventDetail";

function Home() {
  const [showEventDetail, setShowEventDetail] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<RecomendedListType>([]);

  const onEventSelected = (item: RecomendedListType) => {
    setShowEventDetail(true);
    setSelectedEvent(item);
  };

  const hideDetail = () => {
    console.log("clicked");
    setShowEventDetail(false);
  };

  return (
    <View style={styles.container}>
      <>
        {!showEventDetail ? (
          <>
            <Header />
            <EventTypes />
            <FeaturedEvent />
            <RecommendedList onSelect={onEventSelected} />
          </>
        ) : (
          <EventDetail event={selectedEvent} onHideDetail={hideDetail} />
        )}
      </>
    </View>
  );
}

export default Home;
