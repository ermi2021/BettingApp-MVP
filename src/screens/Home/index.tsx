/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  View,
} from "react-native";
import Header from "../../components/Header/Header";
import styles from "./styles";
import EventTypes from "../../components/EventTypes";
import FeaturedEvent from "../../components/FeaturedEvent";
import RecommendedList from "../../components/RecommendedList";

function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <EventTypes />
      <FeaturedEvent />
      <RecommendedList />
    </View>
  );
}

export default Home;
