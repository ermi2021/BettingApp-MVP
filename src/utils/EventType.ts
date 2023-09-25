/* eslint-disable prettier/prettier */
import {OddType} from "./OddType";

export interface EventType {
  id: number;
  team1: string;
  team2: string;
  teamOneIcon: string;
  teamTwoIcon: string;
  date: string;
  time: string;
  live: boolean;
  odd: OddType;
}
