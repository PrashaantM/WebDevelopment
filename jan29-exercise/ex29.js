const populations = [67, 83, 25, 38, 126];



for (let i = 0; i < populations.length; i++) {
  console.log("population: " + populations[i] + " million");
}



let total = 0;

for (let i = 0; i < populations.length; i++) {
  total = total + populations[i];
}



let average = total / populations.length;

console.log("Total population: " + total + " million");
console.log("Average population: " + average + " million");



let largePopulations = [];

for (let i = 0; i < populations.length; i++) {
  if (populations[i] > 50) {
    largePopulations.push(populations[i]);
  }
}

console.log("Large populations:", largePopulations);
