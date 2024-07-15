// Import du module pour exécuter les requêtes SQL
import query from "./init.database.js";

// Fonction pour créer un nouveau message
const createMessage = async (name, email, content, date, phone) => {
  const sql = `
        INSERT INTO messages (name, email, content, date, phone)
        VALUES (?, ?, ?, ?, ?)
    `;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [name, email, content, date, phone]);
  } catch (e) {
    error = e.message;
  } finally {
    return { error, result };
  }
};

// Fonction pour récupérer les 5 premiers messages de la base de données
const readMessages = async () => {
  const sql = `
        SELECT id, name, email, date, phone, CONCAT(LEFT(content, 100), "...") AS content 
        FROM messages
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

// Fonction pour récupérer un seul message en fonction de son ID
const readOneMessage = async (messageId) => {
  const sql = `
        SELECT *
        FROM messages
        WHERE id = ?
    `;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [messageId]);
  } catch (e) {
    error = e.message;
  } finally {
    return { error, result };
  }
};

// Fonction pour supprimer un message en fonction de son ID
const deleteOneMessage = async (messageId) => {
  const sql = `
        DELETE FROM messages
        WHERE id = ?
    `;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [messageId]);
  } catch (e) {
    error = e.message;
  } finally {
    return { error, result };
  }
};

// Exportation des fonctions dans message.controller
export const MessageDB = {
  createMessage,
  readMessages,
  readOneMessage,
  deleteOneMessage,
};
