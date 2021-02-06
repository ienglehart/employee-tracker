/*const express = require('express');
const db = require('./db/database');

const PORT = process.env.PORT || 3001;
const app = express();


// Default response for any other request(Not Found) Catch all other
app.use((req, res) => {
    res.status(404).end();
  });
  
  // Start server after DB connection
  db.on('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
  */