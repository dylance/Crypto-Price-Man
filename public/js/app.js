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

$btcHistory.append('<br>' )
var oldprice = null
var oldNum = null
var newNum = null

firstRequest(btcUrl, $btcHead, "btc");
firstRequest(ltcUrl, $ltcHead, "ltc");
firstRequest(ethUrl, $ethHead, "eth");

dailyHighRequest(btcHighUrl,$btcHigh ,'btc')
dailyHighRequest(ltcHighUrl, $ltcHigh,'ltc')
dailyHighRequest(ethHighUrl, $ethHigh ,'eth')


setInterval(function(){
    firstRequest(btcUrl, $btcHead, "btc");
    firstRequest(ltcUrl, $ltcHead, "ltc");
    firstRequest(ethUrl, $ethHead, "eth");

},10500)
/*
setInterval(function(){ $.getJSON(btcUrl, function(data){
    price = data.price;
    newNum = parseFloat(price)
    $btcHead.text('')
    $btcHead.append('<img src="img/btc.png" alt=""> ' + newNum.toLocaleString('en') + ' USD');


    if (newNum - oldNum > 0){
        $btcHistory.append('<br>' + ' $' +  oldNum.toLocaleString('en') + ' - To the moon!!! price is up: $ ' + '<span id="green">' + ( newNum - oldNum).toLocaleString('en') + '</span>')
    }
    else if (newNum - oldNum == 0){
        $btcHistory.append('<br>' + ' $' +  oldNum.toLocaleString('en') + ' - Price is the same as it was ten seconds ago ' )
    }
    else {
        $btcHistory.append('<br>' + ' $' +  oldNum.toLocaleString('en') + ' - Buy the dip!!! price has gone down: $ ' + '<span id="red">' + (newNum - oldNum ).toLocaleString('en') + '</span>')
    }

    oldprice = price
    oldNum = parseFloat(oldprice)
    })
},10500)
*/

function firstRequest(url, element,coin){
$.getJSON(url, function(data){
    price = data.price;
    newNum = parseFloat(price)
    element.html( '$' + newNum.toFixed(2).toLocaleString('en') + ' ');
    oldprice = price
    oldNum = parseFloat(oldprice)
    console.log(price)
    })
}

function secondRequest(url, element,coin){
$.getJSON(url, function(data){
    price = data.price;
    newNum = parseFloat(price)
    element.append('<img src="img/' + coin + '.png" alt=""> ' + newNum.toLocaleString('en') + ' USD');
    oldprice = price
    oldNum = parseFloat(oldprice)
    })
}

function dailyHighRequest(url, element,coin){
$.getJSON(url, function(data){
    high = data.high;
    newNum = parseFloat(high)
    element.html('<img src="img/' + coin + '.png" height="35" alt=""> ' + newNum.toLocaleString('en') );
    //oldprice = price oldNum = parseFloat(oldprice)
    //console.log(price)
    })
}
