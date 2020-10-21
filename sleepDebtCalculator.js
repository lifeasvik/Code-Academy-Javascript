
const getSleepHours = day => {
  switch (day) {
    case 'monday':
    return 12;
    break;
    case 'tuesday':
    return 7;
    break;
    case 'wednesday':
    return 9;
    break;
    case 'thursday':
    return 5;
    break;
    case 'friday':
    return 6;
    break;
    case 'saturday':
    return 4;
    break;
    case 'sunday':
    return 10;
    break;
  }
}

const getActualSleepHours = () =>
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if ( actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!')
  }
  else if (actualSleepHours > idealSleepHours){
    console.log('You got ' + (actualSleepHours - idealSleepHours ) + ' hours more amount of sleep than needed!')
  }
  else if (actualSleepHours < idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less amount of sleep than needed. You should get more rest!')
  }
}

calculateSleepDebt();