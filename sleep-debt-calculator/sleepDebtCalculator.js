const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 6;
  } else if (day === 'wednesday' || day === 'saturday') {
    return 7;
  } else if (day === 'thursday' || day === 'sunday') {
    return 9;
  } else if (day === 'friday') {
    return 5;
  }
};

const getActualSleepHours = () =>  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +  getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

const calculateSleepDebt = (num) => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(num);
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours < idealSleepHours) {
    const tooLittleSleep = idealSleepHours - actualSleepHours;
    console.log(`You need ${tooLittleSleep} hours more sleep.`);
  } else if (actualSleepHours > idealSleepHours) {
    const tooMuchSleep = actualSleepHours - idealSleepHours;
    console.log(`You got ${tooMuchSleep} hours too much sleep`);
  }
};

calculateSleepDebt(7.287);
