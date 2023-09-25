/* eslint-disable prettier/prettier */
import {EventType} from "./EventType";

export const FeaturedList: EventType = {
  id: 1,
  team1: "Manchester",
  team2: "Liverpool",
  teamOneIcon:
    "https://fabrikbrands.com/wp-content/uploads/Premier-League-Team-Logos-2-1200x750.png",
  teamTwoIcon:
    "https://fabrikbrands.com/wp-content/uploads/Premier-League-Team-Logos-3-1200x750.png",
  date: "Monday, 12 Feb 2021",
  time: "02:30 am",
  live: true,
  odd: {
    firstTeamToWin: "1.12",
    secondTeamToWin: "2.1",
    draw: "0.8",
  },
};
