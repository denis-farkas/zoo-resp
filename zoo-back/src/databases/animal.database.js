import query from "./init.database.js";

const readAnimalByHabitat = async (habitatId) => {
  const sql = "SELECT * FROM animaux WHERE id_habitat = ?";
  let error = null;
  let result = null;
  try {
    result = await query(sql, [habitatId]);
  } catch (e) {
    error = e;
  } finally {
    return { error, result };
  }
};
const readAnimaux = async () => {
  const sql =
    "SELECT ID_animaux, IMG, IMG2, TITLE, animaux.DESCRIPTION as descript_animal, alimentation.NAME as alim, alimentation.DESCRIPTION as descript_alimentation, SANTE, SOIN FROM animaux INNER JOIN alimentation ON animaux.ID_alimentation = alimentation.ID_alimentation";
  let error = null;
  let result = null;
  try {
    result = await query(sql);
  } catch (e) {
    error = e;
  } finally {
    return { error, result };
  }
};

const readOneAnimal = async (animalId) => {
  const sql =
    "SELECT ID_animaux, IMG, IMG2, TITLE, animaux.DESCRIPTION as descript_animal, alimentation.NAME as alim, alimentation.DESCRIPTION as descript_alimentation, SANTE, SOIN FROM animaux INNER JOIN alimentation ON animaux.ID_alimentation = alimentation.ID_alimentation WHERE ID_animaux = ?";
  let error = null;
  let result = null;
  try {
    result = await query(sql, [animalId]);
  } catch (e) {
    error = e;
  } finally {
    return { error, result };
  }
};
const createAnimal = async (
  IMG,
  IMG2,
  TITLE,
  DESCRIPTION,
  SANTE,
  SOIN,
  ID_alimentation,
  id_habitat
) => {
  const sql = `
        INSERT INTO animaux (IMG, IMG2, TITLE, DESCRIPTION, SANTE, SOIN, ID_alimentation, id_habitat)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

  let error = null;
  let result = null;

  try {
    result = await query(sql, [
      IMG,
      IMG2,
      TITLE,
      DESCRIPTION,
      SANTE,
      SOIN,
      ID_alimentation,
      id_habitat,
    ]);
  } catch (e) {
    error = e.message;
  } finally {
    return { error, result };
  }
};

const updateAnimal = async (SANTE, SOIN, animalId) => {
  const sql = "UPDATE animaux SET SANTE = ?, SOIN = ? WHERE ID_animaux = ?";
  let error = null;
  let result = null;
  try {
    result = await query(sql, [SANTE, SOIN, animalId]);
  } catch (e) {
    error = e.message;
  } finally {
    return { error, result };
  }
};

export const AnimalDB = {
  readAnimalByHabitat,
  readAnimaux,
  createAnimal,
  readOneAnimal,
  updateAnimal,
};
