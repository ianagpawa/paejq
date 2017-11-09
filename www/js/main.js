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
                imageUrl: 'https://thumb9.shutterstock.com/display_pic_with_logo/277009/634628642/stock-photo-comfortable-blue-couch-and-wooden-coffee-table-in-simple-white-apartment-634628642.jpg',
                detailUrl: 'https://i.imgur.com/bxeiKlV.png',
                quantity: 1
            }]
    };

    opts.allowCheck=false;

    opts.customCSS = `
    html, body, #bread-button {
     height: 100%;
     margin: 0;
     width: 100%;
    }

    body {
     display: table;
    }

    #bread-button {
     /* Base button styles */
     background: #2A2A2A;
     color: #FF0000;
     display: table-cell;
     font-family: 'Times New Roman', Times, serif;
     font-size: 20px;
     text-align: center;
     vertical-align: middle;
     height: 100px;
     width: 300px;
    }

    #bread-button.bread-btn:hover {

     /* Overall button hover styles */

     background: #222;

    }

    .bread-btn {
     cursor: pointer;
    }

    .bread-embed-inner, .bread-label .bread-embed-icon {
     display: inline-block;
    }

    .bread-label .bread-embed-icon:after {

     /* Icon that shows the bread tooltip on hover */
     background: rgba(255, 255, 255, 0.5);
     border-radius: 50px;
     color: #333;
     content: 'i';
     cursor: pointer;
     display: inline-block;
     line-height: 1;
     margin-left: 8px;
     padding: 4px 9px;
    }

    .bread-pot:before {

    /* Content for the default state. */
     content: 'Pay Over Time';
    }

    .bread-btn .bread-as-low-as:before,
    .bread-label .bread-as-low-as:before {

     content: 'As low as ';
    }

    .bread-for:before {

     /* Prefix for logged in users */
     content: 'For ';
    }
    `


    opts.calculateTax = function(shippingContact, callback) {
        var tax = (shippingContact.state == 'NY') ? (opts.items[0].price * opts.items[0].quantity * 0.05) : (0);

        callback(null, tax)
    }


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


$(document).ready(breadButton);
