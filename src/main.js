require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Route racine
app.get('/', (req, res) => {
  res.json({ message: "Bienvenue sur l'API Users" });
});

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI+process.env.MONGODB_DATABASE)
  .then(() => console.log('Connecté à MongoDB'))

  .catch((err) => console.error('Erreur de connexion à MongoDB:', err));

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});