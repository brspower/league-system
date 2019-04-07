import Table from 'cli-table';


export const generateScoreTable = (Teams) => {
  const table = new Table({ head: ["No", "Team", "OM", "G", "B", "Y", "AVJ", "P"] });

  Teams.map((team, index) => {
    table.push(
      [index + 1, team.teamName, team.om, team.g, team.b, team.y, team.avj, team.p]
    );

  });


  console.log(table.toString());


};