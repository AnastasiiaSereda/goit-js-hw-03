const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2
    },
];
 

const calculateTotalPrice = ({name, price, quantity}= products, productName) => {

 for (let i = 0; i < products.length; i++) {
     if (name === productName) {
         return price * quantity;
      }
    }

  };



  console.log(calculateTotalPrice(products, 'Радар')); // 5200

  console.log(calculateTotalPrice(products, 'Дроид')); // 2800

