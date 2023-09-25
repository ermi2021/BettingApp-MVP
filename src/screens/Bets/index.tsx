/* eslint-disable prettier/prettier */
import {View} from "react-native";
import Header from "../../components/Header/Header";
import MyBetsList from "../../components/MyBets";

function Bets() {
  return (
    <View>
      <Header />
      <MyBetsList />
    </View>
  );
}

export default Bets;
