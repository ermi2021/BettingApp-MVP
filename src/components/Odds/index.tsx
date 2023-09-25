/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View, Text} from "react-native";
import styles from "./styles";
import {theme} from "../../utils/theme";

interface OddsPropType {
  detailPage?: boolean;
}

function Odds({detailPage}: OddsPropType) {
  return (
    <View
      style={[
        styles.oddsInfoContainer,
        {paddingHorizontal: detailPage ? theme.spacing.large : 0},
      ]}>
      <View
        style={[
          styles.oddContainer,
          {
            backgroundColor: detailPage ? theme.colors.text : "#ab4fa5",
            paddingHorizontal: detailPage
              ? theme.spacing.medium
              : theme.spacing.large,
          },
        ]}>
        <Text style={styles.times}>1X</Text>
        <Text style={styles.odd}>1.13</Text>
        <View style={styles.borderRight} />
      </View>
      <View
        style={[
          styles.oddContainer,
          {
            backgroundColor: detailPage ? theme.colors.text : "#ab4fa5",
            paddingHorizontal: detailPage
              ? theme.spacing.medium
              : theme.spacing.large,
          },
        ]}>
        <Text style={styles.times}>X</Text>
        <Text style={styles.odd}>2.56</Text>
        <View style={styles.borderRight} />
      </View>
      <View
        style={[
          styles.oddContainer,
          {
            backgroundColor: detailPage ? theme.colors.text : "#ab4fa5",
            paddingHorizontal: detailPage
              ? theme.spacing.medium
              : theme.spacing.large,
          },
        ]}>
        <Text style={[styles.times]}>2X</Text>
        <Text style={styles.odd}>3.26</Text>
        <View style={styles.borderRight} />
      </View>
    </View>
  );
}

export default Odds;
