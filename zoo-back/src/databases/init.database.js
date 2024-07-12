import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

// Création d'un gestionnaire (ou pool) de connexions à la base de données MySQL
const pool = mysql.createPool({
  connectionLimit: 10000,
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "zoo",
});

// Fonction pour exécuter une requête SQL
const query = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    // Utilisation du pool pour exécuter la requête SQL
    pool.query(sql, values, (error, result, fields) => {
      if (error) {
        // Rejet de la promesse en cas d'erreur
        reject(error);
      }
      // Résolution de la promesse avec le résultat de la requête
      resolve(result);
    });
  });
};

// Exportation de la fonction query  pour créer les différentes requêtes pour le user, les habitats, les animaux, ...
export default query;