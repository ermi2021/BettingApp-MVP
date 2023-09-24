/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import styles from "./styles";
import {
  RecomendedListType,
  RecomendedList,
} from "../../utils/ReccomendationList";

function renderItem(item: RecomendedListType) {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.teamInfoContainer}>
        <View style={styles.teamsIconContainer}>
          <Image src={item.teamOneIcon} style={styles.teamIcon1} />
          <Image src={item.teamTwoIcon} style={styles.teamIcon2} />
        </View>
        <View style={styles.matchInfoCont}>
          <Text style={styles.teams}>{item.teams}</Text>
          {item.live && (
            <View style={styles.liveContainer}>
              <View style={styles.liveCircle}></View>
              <Text style={styles.live}>Live</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.scheduleInfoCont}>
        <View style={styles.dateTimeCont}>
          <Text style={styles.dateTime}>{item.date}</Text>
          <View style={styles.circle}></View>
          <Text style={styles.dateTime}>{item.time}</Text>
        </View>
        <Text style={styles.makeBet}>Make Bet</Text>
      </View>
    </TouchableOpacity>
  );
}

function RecommendedList() {
  return (
    <SafeAreaView style={styles.recommendedContainer}>
      <Text style={styles.recommndedText}>Recommeded For You</Text>
      <FlatList
        style={styles.recommendationList}
        data={RecomendedList}
        renderItem={({item}: {item: RecomendedListType}) => renderItem(item)} // Use object destructuring to access 'item'
        keyExtractor={item => item.id.toString()} // Convert 'id' to a string
      />
    </SafeAreaView>
  );
}

export default RecommendedList;
