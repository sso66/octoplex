// ProductData.js
module.exports = {
  // Load Mock Product Data Into localStorage
  init: function () {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'NEW YORK & COMPANY',
        //image: 'newyork-and-co.png',
        image: 'spinning-wheels.jpg',
        description: 'HALTER MAXI DRESS - PAISLEY',
        variants: [
          {
            sku: '123123',
            type: 'COLD-SHOULDER RUFFLE MAXI DRESS',
            price: 144.99,
            inventory: 1

          },
          {
            sku: '123124',
            type: '7TH AVENUE COLD-SHOULDER WRAP MAXI DRESS',
            price: 122.99,
            inventory: 5
          },
          {
            sku: '1231235',
            type: 'SLIT-DETAIL MAXI DRESS - BANDANA PRINT',
            price: 99.99,
            inventory: 3
          }
        ]
      }
      
    ]));
  }
};