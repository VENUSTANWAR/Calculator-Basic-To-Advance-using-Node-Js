const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
  // res.sendFile(__dirname + '/style.css');
});


app.post('/calculate', function (req, res)
 {
  console.log('print' +req);


  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const operation = req.body.operation;


  if (operation == '+') {
    result = num1 + num2;
  } else if (operation == '-') {
    result = num1 - num2;
  } else if (operation == '*') {
    result = num1 * num2;
  } else if (operation == '/') {
    result = num1 / num2;
  } else {
    result = 'Invalid operation';
  }

  res.send(
    '<h1>Result: ' + result + '</h1>' +'<a href="/">Go Back</a>'
  );
});

const PORT = 3000;
app.listen(PORT, function () {
  console.log('Server is running on http://localhost:' + PORT);
});
