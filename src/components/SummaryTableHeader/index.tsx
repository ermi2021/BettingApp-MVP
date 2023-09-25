/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {View, Text} from "react-native";
import styles from "./styles";
function SummaryHeader() {
  return (
    <>
      <View style={styles.summaryItemContainer}>
        <Text style={[styles.summaryItem]}>#</Text>
        <Text style={[styles.summaryItem, {width: 120, fontWeight: "bold"}]}>
          Club
        </Text>
        <Text style={styles.summaryItem}>PL</Text>
        <Text style={styles.summaryItem}>W</Text>
        <Text style={styles.summaryItem}>D</Text>
        <Text style={styles.summaryItem}>L</Text>
        <Text style={styles.summaryItem}>GD</Text>
      </View>
      <View style={styles.divider} />
    </>
  );
}

export default SummaryHeader;
