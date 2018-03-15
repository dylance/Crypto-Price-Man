const port = 7777;
const app = require('express')();
const request = require('request');
const cors = require('cors');

// App setup
app.use(cors());


const url = "https://api.gdax.com/products/BTC-USD/ticker";

var btcusd = {};

request({url: 'https://api.gdax.com/products/BTC-USD/ticker', headers:{'user-agent':'eatme'}}, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   console.log('body:', body); // Print the HTML for the Google homepage.
   btcusd.body = JSON.parse(body)
});

setInterval(function() {
  request({url: 'https://api.gdax.com/products/BTC-USD/ticker', headers:{'user-agent':'eatme'}}, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
     console.log('body:', body); // Print the HTML for the Google homepage.
     btcusd.body = JSON.parse(body)
  });
}, 1000)


app.get('/results', function (req, res) {
  res.send(btcusd.body);
});

require('http').createServer(app).listen(port,function(){
  console.log('server is running, on port', port)
});
