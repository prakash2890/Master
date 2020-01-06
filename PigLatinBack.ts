import * as readline from 'readline';

enum choices {Rock = 1, Paper, Scissor} 


let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  let coumputersChoice:number=GenerateRandomNumber();
  rl.question('Select any one:\n1->ROCK\n2->PAPER\n3->SCISSOR \n', (answer) => {
    switch(parseInt(answer)) {
      case choices.Rock:
        if(coumputersChoice==choices.Rock)
        {
            console.log('\nSame Choice..!');
        }
        else if(coumputersChoice==choices.Paper)
        {
            console.log('\nYou Lose :( \nComputer chose Paper..! ');
        }
        else
        {
            console.log('\nYou Won :) \nComputer chose Scissor..! ');
        }
        break;
      case choices.Paper:
            if(coumputersChoice==choices.Rock)
            {
                console.log('\nYou Won :) \nComputer chose Rock..! ');
            }
            else if(coumputersChoice==choices.Paper)
            {
                console.log('\nSame Choice..!');
            }
            else
            {
                console.log('\nYou Lose :( \nComputer chose Scissor..! ');
            }
        break;
      case choices.Scissor:
            if(coumputersChoice==choices.Rock)
            {
                console.log('\nYou Lose :( \nComputer chose Rock..! ');
               
            }
            else if(coumputersChoice==choices.Paper)
            {
                console.log('\nYou Won :) \nComputer chose Paper..! ');
                
            }
            else
            {
                console.log('\nSame Choice..!');
            }
                break;
      default:
        console.log('Invalid answer!');
    }
    rl.close();
  });
  

  function GenerateRandomNumber():number
  {
    return Math.floor(Math.random() * 3) + 1;
  }

