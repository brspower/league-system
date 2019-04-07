export const sortDescending = (arrayToBeSorted) => {
  arrayToBeSorted.sort((a, b) => {
    const team1Point = a.p;
    const team2Point = b.p;

    /*
    Sort by Avj if points are equal.
     */
    if (team1Point === team2Point) {
      return b.avj - a.avj
    }

    return team1Point < team2Point ? 1 : -1;
  })
};