const express = require("express");
const app = express();
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const port = 3000;
const db = new sqlite3.Database('accommodations.db');

app.use(cors()); // Gestion des CORS

app.get('/carousel', (req, res) => {
  const data = [
    {
      "image": "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
      "name": "Avec vue"
    },
    {
      "image": "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
      "name": "Bord de mer"
    },
    {
      "image": "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
      "name": "Cabanes"
    },
    {
      "image": "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
      "name": "Conteneurs maritimes"
    },
    {
      "image": "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
      "name": "Fermes"
    },
    {
      "image": "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
      "name": "Au pied des pistes"
    },
    {
      "image": "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
      "name": "Sur l'eau"
    },
    {
      "image": "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
      "name": "Dômes"
    },
    {
      "image": "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
      "name": "Piscines"
    }

  ];

  res.json(data);
});
app.get('/accommodations', (req, res) => {
  // Exécutez une requête SQL pour obtenir les données d'accommodations.db
  db.all('SELECT * FROM accommodations', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
      return;
    }
    
    // Renvoyer les données en tant que réponse JSON
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
