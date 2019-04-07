/*
One season consists of 2 split which means every team have match
with each other two times. 18 teams => 17 weeks * 2 => 34 week total.
One split = 17 week
 */

import {simulateWeek} from "./simulateWeek";

export const simulateSplit = (fixture, Teams) => {
  const numberOfWeeks = Teams.length - 1; // Each split


  for (let i = 0; i < numberOfWeeks; i++) {
    simulateWeek(fixture, i, Teams)
  }
};