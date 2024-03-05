const express = require('express');
const app = express();  // equiv to $f3
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define a default route
app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.render('home');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});





