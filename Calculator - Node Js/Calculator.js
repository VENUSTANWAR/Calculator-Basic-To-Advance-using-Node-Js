const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
 // const  r1 =  readline.createInterface(process.stdin, process.stdout);
});

rl.question('Enter the first number: ', (num1) => {
  num1 = parseFloat(num1);
 //num1 = Float(num1);

  rl.question('Enter the operator (+, -, *, /): ', (operator) => {

    rl.question('Enter the second number: ', (num2) => {
      num2 = parseFloat(num2);
//num2 = Float(num2);

    

      if (operator =='+') {
        result = num1 + num2;
      } else if (operator == '-') { 
        result = num1 - num2;
      } else if (operator == '*') {
        result = num1 * num2;
      } else if (operator == '/') {
        if (num2 == 0) {
          console.log('Error: Cannot divide by zero!');
          //rl.close();
         
        }
        result = num1 / num2;
      } else {
        console.log('Invalid operator!');
        //rl.close();
        
      }

      console.log('The result is: ' +result);
  

      rl.close();
    });
  });
});
