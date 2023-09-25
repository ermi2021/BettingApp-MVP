/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet} from "react-native";
import {theme} from "../../utils/theme";

const styles = StyleSheet.create({
    recommendedContainer: {
        display: "flex",
        flexDirection: "column",
        marginHorizontal: theme.spacing.medium,
        height:300,
      },
      itemContainer: {
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing.medium,
        backgroundColor: theme.colors.background,
        elevation: 1,
        borderRadius: 10,
        marginVertical: theme.spacing.smaller,
      },
      teams: {
        color: theme.colors.text,
        fontSize: theme.typography.fontSize.small,
        fontWeight: theme.typography.fontWeight.bold,
      },
      live: {
        color: theme.colors.secondary,
        fontSize: theme.typography.fontSize.small,
      },
      scheduleInfoCont: {
        paddingVertical: theme.spacing.medium,
        paddingHorizontal: theme.spacing.small,
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignContent: "center",
        alignItems: "center",
      },
      dateTimeCont: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        gap: 5,
        alignItems: "center",
      },
      liveContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        gap: 5,
      },
      liveCircle: {
        width: 7,
        height: 7,
        backgroundColor: theme.colors.secondary,
        borderRadius: 100,
      },
      circle: {
        width: 7,
        height: 7,
        backgroundColor: "gray",
        borderRadius: 100,
      },
      recommndedText: {
        color: theme.colors.text,
        fontWeight: theme.typography.fontWeight.bold,
        fontSize: theme.typography.fontSize.medium,
      },
      recommendationList: {
        marginVertical: theme.spacing.small,
      },
      dateTime: {
        fontSize: theme.typography.fontSize.smaller,
        fontWeight: theme.typography.fontWeight.bold,
      },
      makeBet: {
        fontSize: theme.typography.fontSize.smaller,
        fontWeight: theme.typography.fontWeight.bold,
      },
      name: {},
      teamInfoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 20,
        alignContent: "center",
        alignItems: "center",
        paddingVertical: theme.spacing.small,
      },
      matchInfoCont: {
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
        alignItems: "flex-start",
        gap: 3,
      },
      teamsIconContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 0,
        alignItems: "center",
        alignContent: "center",
      },
      teamIcon1: {
        width: 40,
        height: 40,
        borderRadius: 50,
      },
    
      teamIcon2: {
        width: 30,
        height: 30,
        borderRadius: 50,
      },


});

export default styles;
