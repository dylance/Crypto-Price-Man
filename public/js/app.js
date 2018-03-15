


    var $body = $('body');
    var $btcHead = $('#BTC-Price');
    var $btcHistory = $('#BTC-History');
    // clear out old data before new request


    var url = "https://api.gdax.com/products/BTC-USD/ticker";

    $btcHistory.append('<br>' )
    var oldprice = null
    var oldNum = null
    var newNum = null

    var testnum = 125000
    console.log(testnum.toLocaleString())
    //var numdiff = null
console.log('log this')
/*    for ( var i = 0; i < 100; i++){
        (function(n) {

            setTimeout(function(){ $.getJSON(url, function(data){
                price = data.price;
                console.log('the datatype is: ')
                console.log(typeof price);
                //oldNum = parseFloat(price).toFixed(2)
                newNum = parseFloat(price)




                $btcHead.text("The Current price of bitcoin is: $" + newNum.toLocaleString('en'));
                if (n > 0){
                    //numdiff = newNum - oldNum
                    if (newNum - oldNum > 0){
                        $btcHistory.append('<br>' + ' $' +  oldNum.toLocaleString('en') + ' - to the moon!!! price is up: $ ' + '<span id="green">' + ( newNum - oldNum).toLocaleString('en') + '</span>')
                    }
                    else if (newNum - oldNum == 0){
                        $btcHistory.append('<br>' + ' $' +  oldNum.toLocaleString('en') + ' - price is the same as it was ten seconds ago ' )
                    }
                    else {
                        $btcHistory.append('<br>' + ' $' +  oldNum.toLocaleString('en') + ' - buy the dip!!! price has gone down: $ ' + '<span id="red">' + (newNum - oldNum ).toLocaleString('en') + '</span>')
                    }
                }
                oldprice = price
                oldNum = parseFloat(oldprice)






                })
            },10500*n)
        }(i))
    }*/


    $.getJSON(url, function(data){
        price = data.price;
        console.log('the datatype is: ')
        console.log(typeof price);
        //oldNum = parseFloat(price).toFixed(2)
        newNum = parseFloat(price)
        $btcHead.text("The Current price of bitcoin is: $" + newNum.toLocaleString('en'));
        //numdiff = newNum - oldNum
        oldprice = price
        oldNum = parseFloat(oldprice)
        })





                setInterval(function(){ $.getJSON(url, function(data){
                    price = data.price;
                    console.log('the datatype is: ')
                    console.log(typeof price);
                    //oldNum = parseFloat(price).toFixed(2)
                    newNum = parseFloat(price)

                    $btcHead.text("The Current price of bitcoin is: $" + newNum.toLocaleString('en'));

                        //numdiff = newNum - oldNum
                        if (newNum - oldNum > 0){
                            $btcHistory.append('<br>' + ' $' +  oldNum.toLocaleString('en') + ' - to the moon!!! price is up: $ ' + '<span id="green">' + ( newNum - oldNum).toLocaleString('en') + '</span>')
                        }
                        else if (newNum - oldNum == 0){
                            $btcHistory.append('<br>' + ' $' +  oldNum.toLocaleString('en') + ' - price is the same as it was ten seconds ago ' )
                        }
                        else {
                            $btcHistory.append('<br>' + ' $' +  oldNum.toLocaleString('en') + ' - buy the dip!!! price has gone down: $ ' + '<span id="red">' + (newNum - oldNum ).toLocaleString('en') + '</span>')
                        }

                    oldprice = price
                    oldNum = parseFloat(oldprice)
                    })
                },10500)
