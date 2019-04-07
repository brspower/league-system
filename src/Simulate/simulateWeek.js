/*
Simulated week by week. In the index.js iteration will be made.
 */
import {simulateMatch} from "./simulateMatch";


export const simulateWeek = (fixture, weekNo, Teams) => {
  /*
  N teams - N/2 matches. So => Teams.length / 2
   */


  let numberBag = []; // In order to prevent matching two teams again.


  for (let i = 0; i < Teams.length; i++) {
    /*
    In order to prevent matching two teams again.
     */
    if (numberBag.includes((fixture[i].id - 1) || (fixture[i].matches[weekNo] - 1))) {
      continue;
    }

    let simulatedMatch = simulateMatch(Teams[fixture[i].id - 1], Teams[fixture[i].matches[weekNo] - 1]);

    Teams[fixture[i].id - 1] = simulatedMatch[0];
    Teams[fixture[i].matches[weekNo] - 1] = simulatedMatch[1];

    numberBag.push(fixture[i].id - 1, fixture[i].matches[weekNo] - 1);
  }
};