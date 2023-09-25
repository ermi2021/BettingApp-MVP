/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View, Text} from "react-native";
import styles from "./styles";
import {theme} from "../../utils/theme";
import {OddType} from "../../utils/OddType";

interface OddsPropType {
  detailPage?: boolean;
  betsPage?: boolean;
  odd: OddType;
}

function Odds({detailPage, betsPage, odd}: OddsPropType) {
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
            backgroundColor: detailPage
              ? theme.colors.text
              : betsPage
              ? "#f2f2f2"
              : "#ab4fa5",
            paddingHorizontal: detailPage
              ? theme.spacing.medium
              : theme.spacing.large,
          },
        ]}>
        <Text style={styles.times}>1X</Text>
        <Text style={[styles.odd, betsPage ? {color:theme.colors.text} : {}]}>{odd.firstTeamToWin}</Text>
        <View style={styles.borderRight} />
      </View>
      <View
        style={[
          styles.oddContainer,
          {
            backgroundColor: detailPage
              ? theme.colors.text
              : betsPage
              ? "#f2f2f2"
              : "#ab4fa5",
            paddingHorizontal: detailPage
              ? theme.spacing.medium
              : theme.spacing.large,
          },
        ]}>
        <Text style={styles.times}>X</Text>
        <Text style={[styles.odd, betsPage ? {color:theme.colors.text} : {}]}>{odd.draw}</Text>
        <View style={styles.borderRight} />
      </View>
      <View
        style={[
          styles.oddContainer,
          {
            backgroundColor: detailPage
              ? theme.colors.text
              : betsPage
              ? "#f2f2f2"
              : "#ab4fa5",
            paddingHorizontal: detailPage
              ? theme.spacing.medium
              : theme.spacing.large,
          },
        ]}>
        <Text style={styles.times}>2X</Text>
        <Text style={[styles.odd, betsPage ? {color:theme.colors.text} : {}]}>{odd.secondTeamToWin}</Text>
        <View style={styles.borderRight} />
      </View>
    </View>
  );
}

export default Odds;
