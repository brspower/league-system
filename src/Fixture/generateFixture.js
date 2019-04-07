// Schedule single round `j` for 'n' teams:
const round = (n, j) => {
  let m = n - 1;
  let round = Array.from({length: n}, (_, i) => (m + j - i) % m); // circular shift
  round[round[m] = j * (n >> 1) % m] = m; // swapping self-match
  return round;
};

// Schedule matches of 'n' teams:
export const generateFixture = (n, Teams) => {
  let rounds = Array.from({length: n - 1}, (_, j) => round(n, j));
  return Array.from({length: n}, (_, i) => ({
    id: Teams[i].id,
    teamName: Teams[i].teamName,
    matches: rounds.map(round => Teams[round[i]].id)
  }));
};

