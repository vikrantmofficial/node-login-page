const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Sample in-memory database for users (replace with a real database in production)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Check if the username and password are correct
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.send(`Welcome, ${username}!`);
  } else {
    res.send('Invalid username or password');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Login page app listening at http://localhost:${port}`);
});
