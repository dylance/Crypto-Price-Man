var $body = $('body');
var $btcHead = $('#BTC-Price');
var $ltcHead = $('#LTC-Price')
var $ethHead = $('#ETH-Price')

var $btcHigh = $('#BTC-High')
var $ltcHigh = $('#LTC-High')
var $ethHigh = $('#ETH-High')

var $btcHistory = $('#BTC-History');



var btcUrl = "https://api.gdax.com/products/BTC-USD/ticker";
var ltcUrl = "https://api.gdax.com/products/LTC-USD/ticker";
var ethUrl = "https://api.gdax.com/products/eth-USD/ticker";

var btcHighUrl = "https://api.gdax.com/products/btc-usd/stats"
var ltcHighUrl = "https://api.gdax.com/products/ltc-usd/stats"
var ethHighUrl = "https://api.gdax.com/products/eth-usd/stats"

$btcHistory.append('<br>')
var oldprice = null
var oldNum = null
var newNum = null

firstRequest(btcUrl, $btcHead, "btc");
firstRequest(ltcUrl, $ltcHead, "ltc");
firstRequest(ethUrl, $ethHead, "eth");

dailyHighRequest(btcHighUrl, $btcHigh, 'btc')
dailyHighRequest(ltcHighUrl, $ltcHigh, 'ltc')
dailyHighRequest(ethHighUrl, $ethHigh, 'eth')


setInterval(function() {
    firstRequest(btcUrl, $btcHead, "btc");
    firstRequest(ltcUrl, $ltcHead, "ltc");
    firstRequest(ethUrl, $ethHead, "eth");

}, 10500)


function firstRequest(url, element, coin) {
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(myJson) {
        price = Number(myJson.price)
        newNum = parseFloat(price)
        element.html('$' + newNum.toFixed(2).toLocaleString('en') + ' ');
        oldprice = price
        oldNum = parseFloat(oldprice)
    }).catch(function(err) {
        console.log("the Gdax API call did not go through!! try again")
    })
}

// url (required), options (optional)
function dailyHighRequest(url, element, coin) {
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(myJson) {
        high = Number(myJson.high);
        newNum = parseFloat(high)
        element.html('<img src="img/' + coin +
            '.png" height="35" alt=""></br>' +
            newNum.toLocaleString('en'));
    }).catch(function(err) {
        console.log("The API Call did not go through!! try again")
        // Error :(
    });
}
