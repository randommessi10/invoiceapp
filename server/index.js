// Import the necessary modules
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('../src/generated/prisma');

// Instantiate PrismaClient and Express
const prisma = new PrismaClient();
const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174']
}));
app.use(express.json());

// Route to handle client submissions
app.post('/submit', async (req, res) => {
  try {
    const { value } = req.body;  // Getting the 'value' from the frontend
    console.log('Received from frontend:', value);
    // Find the client using the submitted value
    inputId = parseInt(value);
    const allClients = await prisma.clients.findUnique({
      where: {
        id: inputId
      }
    });
    console.log("All Clients:", allClients); // Log the client data to the server console
    if (allClients) {
      res.json(allClients); // Send the client data as JSON
    } else {
      res.status(404).json({ error: 'Client not found' });
    }
  } catch (error) {
    console.error("Error querying clients:", error);
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
