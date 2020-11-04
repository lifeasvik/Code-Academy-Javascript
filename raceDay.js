let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnersAge = 18;

if (runnersAge > 18 && registeredEarly === true){
  console.log(`Your race number is ${raceNumber +=1000}`)
}
else{
  console.log('Please check the race requirements!')
}

if(runnersAge > 18 && registeredEarly === true){
  console.log(`Your race will begin at 9:30 am and your race number is ${raceNumber}`)
}
else if (runnersAge > 18 && registeredEarly === false){
  console.log(`Your race will begin at 11:00 am and your race number is ${raceNumber}`)
}
else if (runnersAge < 18){
  console.log(`Your race will begin at 12:30 pm and your race number is ${raceNumber}`)
}
else if(runnersAge === 18){
  console.log('Please see the registration desk')
}