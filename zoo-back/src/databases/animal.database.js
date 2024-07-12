import query from "./init.database.js";

const readAnimalByHabitat = async (habitatId) => {
    const sql = "SELECT * FROM animaux WHERE id_habitat = ?";
    let error = null
    let result = null
    try {
        result = await query(sql,[habitatId]);
    } catch (e) {
        error = e
    } finally {
        return { error, result }
    }
    
};

const readOneAnimal = async (animalId) => {
    const sql = "SELECT * FROM animaux WHERE id_animal = ?";
    let error = null
    let result = null
    try {
        result = await query(sql, [animalId]);
    } catch (e) {
        error = e
    } finally {
        return { error, result }
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
    id_habitat,
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
}

export const AnimalDB = {
    readAnimalByHabitat,
    createAnimal,
    readOneAnimal
};