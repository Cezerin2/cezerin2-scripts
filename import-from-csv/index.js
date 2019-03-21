import CezerinClient from 'cezerin2-client';

const csv = require('csvtojson');

const api = new CezerinClient({
    apiBaseUrl: '',
    apiToken: ''
});

(async () => {
    csv()
      .fromFile('hsncodemaster.csv')
      .then(async (jsonObj) => {
          console.log(jsonObj);

          for (let i=0; i<jsonObj.length; i++) {
            console.log();

              const productResponse = await api.products.create({
                  "name": jsonObj[i].Name,
                  "regular_price": jsonObj[i].Rate,
                  "sku": jsonObj[i].ItemID,
                  "stock_quantity": jsonObj[i].Stock,
                  "stock_tracking": true,
                  "enabled": false
              });
              console.log(productResponse);
          }
      });
})();
