/*
There are 18 Teams in The Turkey "Super Lig".

For Simplicity Of Teams, Teams Will be Filled with Fake Data using faker.js
 */

import faker from 'faker';

export const generateTeams = (numberOfTeams) => {
  let teamId = 1;
  let Team = [];

  for (let i = 0; i < numberOfTeams; i++) {
    const teamAttributes = {
      id: teamId,
      teamName: faker.address.city(),
      strength: Math.floor(Math.random() * 10) + 1,
      om: 0,
      g: 0,
      b: 0,
      y: 0,
      avj: 0,
      p: 0,
    };

    Team.push(teamAttributes);
    teamId++;
  }

  return Team;
};