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
    height: 300,
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
  dateTimeStyle: {
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.smaller,
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
    backgroundColor: theme.colors.green,
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
  betDetailContainer: {
    backgroundColor: theme.colors.background,
    marginHorizontal: theme.spacing.small,
    marginVertical: theme.spacing.small,
    // paddingHorizontal:theme.spacing.medium,
    borderRadius: 10,

    paddingVertical: theme.spacing.small,
  },
  matchDetailInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: theme.spacing.larger,
    paddingBottom: theme.spacing.medium,
    alignContent: "center",
    alignItems: "center",
  },
  minute: {
    color: theme.colors.green,
    fontWeight: theme.typography.fontWeight.bold,
    paddingTop: theme.spacing.small,
  },
  scoreContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    flex: 1,
  },
  score: {
    backgroundColor: "#354043",
    borderRadius: 100,
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: 11,
    color: theme.colors.background,
    fontWeight: theme.typography.fontWeight.bold,
  },
  menuContainer: {
    backgroundColor: theme.colors.transparentWhite,
    display: "flex",
    flexDirection: "column",
    gap: 5,
    justifyContent: "center",
    paddingVertical: theme.spacing.medium,
  },
  bets: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing.smaller,
 
  },
  teamInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
    alignContent: "center",

    marginHorizontal: theme.spacing.large,
    // paddingHorizontal:theme.spacing.medium,
    borderRadius: 10,
    marginBottom: theme.spacing.medium,
    opacity: 0.8,
    alignItems: "center",
    paddingVertical: theme.spacing.smaller,
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
  menuItem: {
    textDecorationLine: "none",
    marginEnd: theme.spacing.large,
    fontSize: theme.typography.fontSize.small,
    fontWeight: theme.typography.fontWeight.regular,
    color: theme.colors.text,
  },
  selectedMenu: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.text,
    paddingBottom: theme.spacing.smaller,
    paddingHorizontal: theme.spacing.smaller,
    fontWeight: theme.typography.fontWeight.bold,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: theme.spacing.smaller,
    marginTop: theme.spacing.medium,
    gap: 15,
  },
  actionButton: {
    padding: theme.spacing.smaller,
    paddingHorizontal: theme.spacing.medium,
    borderWidth: 1,
    borderRadius: 20,
    fontWeight: theme.typography.fontWeight.bold,
    fontSize: theme.typography.fontSize.smaller,
  },
  selected: {
    backgroundColor: "gray",
    borderWidth: 0,
    color: theme.colors.background,
  },
  tableContainer: {
    padding: 10,
    textAlign: "left",
  },

  summaryItemContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    
  },
  summaryItem: {
    paddingHorizontal: theme.spacing.small,
    fontSize: theme.typography.fontSize.smaller,
    paddingVertical:theme.spacing.smaller
  },
  idText: {
    borderLeftWidth: 2,
    borderLeftColor: theme.colors.green,
  },
  divider: {
    height: 2,
    backgroundColor: "grey",
    marginHorizontal: theme.spacing.small,
    marginBottom:theme.spacing.small,
  },
});

export default styles;
