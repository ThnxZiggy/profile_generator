const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? `, (answer) => {
  console.log(`Thanks ${answer}`);

  rl.question(`What's one of your hobbies? `, (answer) => {
    console.log(`${answer} ohhh...um ya sure that sounds like fun.`);

    rl.question(`do you like..stuff? `, (answer) => {
      console.log(`well I have to go do other stuff, you be good now`);
  
    rl.close();
    })
  })
});