// Dependencies
const express = require('express');

// Initialize the Express application
const app = express();
// Configure settings

// Mount middleware

// Mount routes
const RESTAURANT = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
      { 
        id: 1,
        name: 'Quantum Quinoa Mushroom Burger',
        price: 13.00,
        rating: 4,
        category: 'mains',
        details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
      },
      { 
        id: 2,
        name: 'Binary Berry Cheesecake',
        price: 10.11,
        rating: 3,
        category: 'desserts',
        details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
      },
      { 
        id: 3,
        name: 'Recursive Rigatoni',
        price: 17.00,
        rating: 5,
        category: 'mains',
        details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
      },
      { 
        id: 4,
        name: 'Pumpkin Pi Squared',
        price: 3.14,
        rating: 5,
        category: 'desserts',
        details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
      },
      { 
        id: 5,
        name: 'Fibonacci String Bean Fries',
        price: 11.23,
        rating: 5,
        category: 'sides',
        details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
      }
    ]
  }
  

app.get('/', (req, res) => {
    res.render('home.ejs', {
        restaurant: RESTAURANT
    });
});

app.get('/menu', (req, res) => {
    const menu = RESTAURANT.menu;
    let mains = [];
    let desserts = [];
    let sides = [];

    menu.forEach(item => {
        if (item.category === 'mains') {
            mains.push(item);
        } else if (item.category === 'desserts') {
            desserts.push(item);
        } else if (item.category === 'sides') {
            sides.push(item);
        }
    });
    
    res.render('menu.ejs', {
        mains: mains,
        desserts: desserts,
        sides: sides,
        menu: RESTAURANT.menu
    });
});

app.get('/menu/:category', (req, res) => {
   const index = req.params.category;
   const menu = RESTAURANT.menu;
   const filteredItems = menu.filter(item => item.category === index)

   let categoryHeading = index.charAt(0).toUpperCase() + index.slice(1);

   

    


    res.render('category.ejs', {
        categoryName: categoryHeading,
        menuItems: filteredItems
    });
    
});



// Tell the app to listen on a specific port
app.listen(3000, () => {
    console.log('Listening on port 3000');
})