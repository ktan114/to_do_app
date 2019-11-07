require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const todoController = require('./controllers/todoController');

// Initialize server
const server = express();

// Middleware
server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json('Connected');
});

// Routes
server.use('/api/todos', todoController);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is connected on port ${port}`));
