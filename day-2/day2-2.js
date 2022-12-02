var fs = require("node:fs");
const readline = require("node:readline");
filename = process.argv[2];

var totalScore = 0;

async function processInput() {
  const fileStream = fs.createReadStream(filename);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    processLine(line);
  }
  console.log("Total score is: " + totalScore);
}

var scoreMap = {
  "A X": 0 + 3, // lose + scissor
  "A Y": 3 + 1, // draw + rock
  "A Z": 6 + 2, // win + paper
  "B X": 0 + 1, // lose + rock
  "B Y": 3 + 2, // draw + paper
  "B Z": 6 + 3, // win + scissor
  "C X": 0 + 2, // lose + paper
  "C Y": 3 + 3, // draw + scissor
  "C Z": 6 + 1, // win + rock
};

function processLine(line) {
  totalScore += scoreMap[line];
}

processInput();
