/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {FlatList, SafeAreaView, Text, View, Image} from "react-native";
import styles from "./styles";
import {BetsList} from "../../utils/BetsList";
import {EventType} from "../../utils/EventType";
import Odds from "../Odds";

function MyBetsList() {
  const renderBet = (bet: EventType) => {
    return (
      <View style={styles.betDetailContainer}>
        <View style={styles.teamInfoContainer}>
          <View style={styles.teamsIconContainer}>
            <Image src={bet.teamOneIcon} style={styles.teamIcon1} />
            <Image src={bet.teamTwoIcon} style={styles.teamIcon2} />
          </View>
          <View style={styles.matchInfoCont}>
            <Text style={styles.teams}>
              {bet.team1} VS {bet.team2}
            </Text>

            <View style={styles.liveContainer}>
              <Text style={styles.dateTimeStyle}>
                {bet.date} {bet.time}
              </Text>
            </View>
          </View>
        </View>
        <Odds betsPage={true} odd={bet.odd} />
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.bets]}>
      <FlatList
        stickyHeaderHiddenOnScroll={true}
        data={BetsList}
        renderItem={({item}: {item: EventType}) => renderBet(item)}
        keyExtractor={(item: EventType) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default MyBetsList;
