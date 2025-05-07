const express = require('express');
const path = require('path');
const pagesRouter = require('./routes/pages');
const connectDB = require('./db');

const app = express();
const PORT = 3000;
connectDB();
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

// Use the pages router
app.use('/', pagesRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
  
