/*
 John and Mike both play basketball on different teams. In the latest three games:
 
 1- John's team scored 89, 120, and 103 points.
 2- Mike's team scored 116, 94, and 123 points.

 Calculate the average score for each team.
 Determine which team wins on average (highest average score), and print the winner to the console. Also, include the average score in the output.
 Then, change the scores to show different winners. 
*/
function makeTeam(name, scores) {
  const team = {};
  team.name = name;
  team.scores = scores;
  return team;
}
const team1 = makeTeam("John's team", [89, 120, 103]);
const team2 = makeTeam("Mike's team", [116, 94, 123]);
console.log(team1, team2);

function calculateAverageScore(scores) {
  return (
    scores.reduce(
      (prviousValue, currentValu) => prviousValue + currentValu,
      0
    ) / scores.length
  );
}
function winner(team1, team2) {
  averageTeam1 = calculateAverageScore(team1.scores);
  averageTeam2 = calculateAverageScore(team2.scores);
  if (averageTeam1 > averageTeam2) {
    return `Winner is ${team1.name} with average scores: ` + averageTeam1;
  } else if (averageTeam2 > averageTeam1)
    return `Winner is ${team2.name} with average scores: ` + averageTeam2;
}
console.log(winner(team1,team2));

