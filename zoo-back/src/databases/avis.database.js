// Import du module pour exécuter les requêtes SQL
import query from "./init.database.js";

// Fonction pour créer un nouveau avis
const createAvis = async (name, email, content, date) => {
  const sql = `
        INSERT INTO avis (name, email, content, date)
        VALUES (?, ?, ?, ?)
    `;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [name, email, content, date]);
  } catch (e) {
    error = e.message;
  } finally {
    return { error, result };
  }
};

// Fonction pour récupérer les 5 premiers messages de la base de données
const readAvis = async () => {
  const sql = `
        SELECT id, name, email, date, CONCAT(LEFT(content, 100), "...") AS content 
        FROM avis
        ORDER BY date DESC
    `;

  let error = null;
  let result = null;

  try {
    result = await query(sql);
  } catch (e) {
    error = e.message;
  } finally {
    return { error, result };
  }
};

// Fonction pour récupérer un seul avis en fonction de son ID
const readOneAvis = async (avisId) => {
  const sql = `
        SELECT *
        FROM avis
        WHERE id = ?
    `;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [avisId]);
  } catch (e) {
    error = e.avis;
  } finally {
    return { error, result };
  }
};

// Fonction pour supprimer un avis en fonction de son ID
const deleteOneAvis = async (avisId) => {
  const sql = `
        DELETE FROM avis
        WHERE id = ?
    `;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [avisId]);
  } catch (e) {
    error = e.message;
  } finally {
    return { error, result };
  }
};

// Exportation des fonctions dans avis.controller
export const AvisDB = {
  createAvis,
  readAvis,
  readOneAvis,
  deleteOneAvis,
};
