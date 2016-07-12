const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nWhat is your age? ', (answer) => {
  // TODO: Log the answer in a database
  
  var age = parseInt(answer);
  addAge(age,5);
  addAge(age,20);
  addAge(age,30);
  rl.close();
});

function addAge(age,increment){
    
    var compute = age + increment;
    
    
if(compute < 15)
  console.log('After '+increment+' years: '+'I don\'t have to think about my life yet');


else if(compute >15 && compute<30)
  console.log('After '+increment+' years: '+'I need to finish studies and find a job');


else if(compute >30 && compute<35)
  console.log('After '+increment+' years: '+'I need to marry');


else if(compute >35 && compute<40)
  console.log('After '+increment+' years: '+'I need to rear children');


else if(compute >=40 && compute<=59)
  console.log('After '+increment+' years: '+'Prepare to retire');


else if(compute >=60)
  console.log('After '+increment+' years: '+'I will now retire');


}