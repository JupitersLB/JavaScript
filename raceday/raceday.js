let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const Age = 20;

Age >= 18 && registeredEarly ? raceNumber += 1000 : raceNumber;

if (Age >= 18 && registeredEarly) {
  console.log(`Runner ${raceNumber}, you will run at 9:30am.`);
} else if (Age >= 18 && !registeredEarly) {
  console.log(`Runner ${raceNumber}, late addults run at 11:00am.`);
} else if (Age < 18) {
  console.log('Youth registrants run at 12:30pm.');
}
