/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View, Text, SafeAreaView, ImageBackground, Image} from "react-native";
import Header from "../../components/Header/Header";
import styles from "./styles";
import EventTypes from "../../components/EventTypes";
import FeaturedEvent from "../../components/FeaturedEvent";

function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.homeContainer}>
        <View>
          <SafeAreaView style={styles.container}>
            <EventTypes />
          </SafeAreaView>
        </View>
         <FeaturedEvent/>
         
      </View>
    </View>
  );
}

export default Home;
