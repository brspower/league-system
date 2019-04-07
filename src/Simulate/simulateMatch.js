export const simulateMatch = (team1, team2) => {

  console.log(`Match between ${team1.id} - ${team2.id}`);

  /*
  Each team scores each other according to their strength value.
   */
  const team1Score = Math.floor(Math.random() * team1.strength);
  const team2Score = Math.floor(Math.random() * team2.strength);

  console.log(`Result: ${team1Score} - ${team2Score}`);

  const team1Stats = {
    G: team1Score > team2Score ? 1 : 0,
    B: team1Score === team2Score ? 1 : 0,
    Y: team1Score < team2Score ? 1 : 0,
    AVJ: team1Score - team2Score,
    P: team1Score < team2Score ? 0 : (team1Score > team2Score ? 3 : 1)
  };

  const team2Stats = {
    G: team2Score > team1Score ? 1 : 0,
    B: team2Score === team1Score ? 1 : 0,
    Y: team2Score < team1Score ? 1 : 0,
    AVJ: team2Score - team1Score,
    P: team2Score < team1Score ? 0 : (team2Score > team1Score ? 3 : 1)
  };


  const team1Result = {
    ...team1,
    om: team1.om + 1,
    g: team1.g + team1Stats.G,
    b: team1.b + team1Stats.B,
    y: team1.y + team1Stats.Y,
    avj: team1.avj + team1Stats.AVJ,
    p: team1.p + team1Stats.P,
  };

  let team2Result = {
    ...team2,
    om: team2.om + 1,
    g: team2.g + team2Stats.G,
    b: team2.b + team2Stats.B,
    y: team2.y + team2Stats.Y,
    avj: team2.avj + team2Stats.AVJ,
    p: team2.p + team2Stats.P,
  };

  return [team1Result, team2Result]
};