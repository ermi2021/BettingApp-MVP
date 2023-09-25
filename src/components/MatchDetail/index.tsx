/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Text, View, Image} from "react-native";
import styles from "./styles";
import {RecomendedListType} from "../../utils/ReccomendationList";

import Odds from "../Odds";
interface EventProps {
  event: RecomendedListType;
}

function MatchDetail({event}: EventProps) {
  return (
    <View style={styles.matchDetailContainer}>
      <View style={styles.teamInfoContainer}>
        <View style={styles.teamsIconContainer}>
          <Image src={event.teamOneIcon} style={styles.teamIcon1} />
          <Image src={event.teamTwoIcon} style={styles.teamIcon2} />
        </View>
        <View style={styles.matchInfoCont}>
          <Text style={styles.teams}>{event.teams}</Text>
          {event.live && (
            <View style={styles.liveContainer}>
              <View style={styles.liveCircle}></View>
              <Text style={styles.live}>Live</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.matchDetailInfoContainer}>
        <Text style={styles.minute}>42:30</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>0</Text>
          <Text style={styles.teams}>:</Text>
          <Text style={styles.score}>2</Text>
        </View>
      </View>
      <Odds detailPage={true} />
    </View>
  );
}

export default MatchDetail;
