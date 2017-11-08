
function breadButton(){
    var opts = {
        buttonId: 'bread-button',
        actAsLabel: false,
        asLowAs: true,
        items: [
            {
                name: 'Couch',
                price: 100,
                sku: 'COUCH123',
                imageUrl: 'https://i.imgur.com/bxeiKlV.png',
                detailUrl: 'https://i.imgur.com/bxeiKlV.png',
                quantity: 1
            }]
    };

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
