
function breadButton(){
    var opts = {
        buttonId: 'bread-button',
        actAsLabel: false,
        asLowAs: true,
        items: [
            {
                name: 'Couch',
                price: 10000,
                sku: 'COUCH123',
                imageUrl: 'https://i.imgur.com/bxeiKlV.png',
                detailUrl: 'https://i.imgur.com/bxeiKlV.png',
                quantity: 1
            }]
    };


    opts.allowCheck=false

    // opts.calculateTax = function(shippingContact, callback) {
        // if (shippingContact.state == 'NY') {
        //     // console.log(opts.items[0].price * opts.items[0].quantity * 0.05)
        //     callback(opts.items[0].price * opts.items[0].quantity * 0.05)
        // }
        // $.ajax({
        //     url: '/tax',
        //     type: 'POST',
        //     contentType: 'application/json',
        //     data: JSON.stringify({
        //         shippingAddress: shippingContact,
        //         total: opts.items[0].price * opts.items[0].quantity
        //     })
        // })
        // .done(function(data){
        //     callback(null, data);
        // })
        // .fail(function(err){
        //     callback(err);
        // });

    // };
    //
    //
    opts.shippingOptions = [{
            typeId: 1,
            cost: 800,
            type: "Two-day shipping"
        },
        {
            typeId: 2,
            cost: 2000,
            type: "Overnight shipping"
        }];
    // opts.calculateShipping = function(shippingContact, callback) {



    opts.done = function(err, tx_token) {
        if (err) {
            console.error("There was an error: " + err);
            return;
        }

        if (tx_token !== undefined) {
            console.write(tx_token)
            var i = document.createElement('input');
            i.type = 'hidden';
            i.name = 'token';
            i.value = tx_token;
            var f = document.createElement("form");
            f.action = ''
            f.method = 'POST';
            f.appendChild(i);
            document.body.appendChild(f);
            f.submit();
        }
        return;
    };

    bread.checkout(opts);
}

function allBread(){
    breadButton();
}

$(document).ready(allBread);
