import {generateTeams} from './Teams/generateTeams';
import {generateScoreTable} from './Table/resultTable';
import {generateFixture} from "./Fixture/generateFixture";
import {simulateSplit} from "./Simulate/simulateSplit";
import {sortDescending} from "./Sorter/sortDescending";

const numberOfSplits = 2;

/*
Should be even number :)
 */
const numberOfTeams = 18;


let Teams = generateTeams(numberOfTeams);

/*
Each season with two split.
Each team plays with each other two times exactly
 */

for (let i = 0; i < numberOfSplits; i++) {
  /*
  Fixture is being created with number of teams
  that are exist.
   */
  const fixture = generateFixture(numberOfTeams, Teams);

  console.log(fixture);

  simulateSplit(fixture, Teams);
}

sortDescending(Teams);

generateScoreTable(Teams);
