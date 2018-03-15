var $body = $('body');
var $btcHead = $('#BTC-Price');
var $btcHistory = $('#BTC-History');

var url = "https://api.gdax.com/products/BTC-USD/ticker";

$btcHistory.append('<br>' )
var oldprice = null
var oldNum = null
var newNum = null

$.getJSON(url, function(data){
    price = data.price;
    console.log('the datatype is: ')
    console.log(typeof price);
    //oldNum = parseFloat(price).toFixed(2)
    newNum = parseFloat(price)
    $btcHead.text("BTC is: $" + newNum.toLocaleString('en'));
    //numdiff = newNum - oldNum
    oldprice = price
    oldNum = parseFloat(oldprice)
    })

setInterval(function(){ $.getJSON(url, function(data){
    price = data.price;
    newNum = parseFloat(price)

    $btcHead.text("BTC is: $" + newNum.toLocaleString('en'));


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
