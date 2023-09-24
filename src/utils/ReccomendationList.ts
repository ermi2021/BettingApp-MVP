/* eslint-disable prettier/prettier */

export interface RecomendedListType {
  id: number;
  teams: string;
  teamOneIcon: string;
  teamTwoIcon: string;
  date: string;
  time: string;
  live: boolean;
}

export const RecomendedList: RecomendedListType[] = [
  {
    id: 1,
    teams: "Manchester VS Liverpool",
    teamOneIcon:
      "https://fabrikbrands.com/wp-content/uploads/Premier-League-Team-Logos-2-1200x750.png",
    teamTwoIcon:
      "https://fabrikbrands.com/wp-content/uploads/Premier-League-Team-Logos-3-1200x750.png",
    date: "Monday, 12 Feb 2021",
    time: "02:30 am",
    live: true,
  },
  {
    id: 2,
    teams: "Manchester Vs Liverpool",
    teamOneIcon:
      "https://fabrikbrands.com/wp-content/uploads/Premier-League-Team-Logos-2-1200x750.png",
    teamTwoIcon:
      "https://fabrikbrands.com/wp-content/uploads/Premier-League-Team-Logos-3-1200x750.png",
    date: "Monday, 12 Feb 2021",
    time: "02:30 am",
    live: false,
  },
  {
    id: 3,
    teams: "Manchester Vs Liverpool",
    teamOneIcon:
      "https://fabrikbrands.com/wp-content/uploads/Premier-League-Team-Logos-2-1200x750.png",
    teamTwoIcon:
      "https://fabrikbrands.com/wp-content/uploads/Premier-League-Team-Logos-3-1200x750.png",
    date: "Monday, 12 Feb 2021",
    time: "02:30 am",
    live: false,
  },
];
