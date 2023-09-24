/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View, Text} from "react-native";
import styles from "./styles";
function Odds() {
  return (
    <View style={styles.oddsInfoContainer}>
      <View style={styles.oddContainer}>
        <Text style={styles.times}>1X</Text>
        <Text style={styles.odd}>1.13</Text>
        <View style={styles.borderRight} />
      </View>
      <View style={styles.oddContainer}>
        <Text style={styles.times}>X</Text>
        <Text style={styles.odd}>2.56</Text>
        <View style={styles.borderRight} />
      </View>
      <View style={styles.oddContainer}>
        <Text style={styles.times}>2X</Text>
        <Text style={styles.odd}>3.26</Text>
        <View style={styles.borderRight} />
      </View>
    </View>
  );
}

export default Odds;
