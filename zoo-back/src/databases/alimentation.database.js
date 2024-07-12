import query from "./init.database.js";

const readAlimentation = async () => {
    const sql = "SELECT * FROM alimentation";
    let error = null
    let result = null
    try {
        result = await query(sql);
    } catch (e) {
        error = e
    } finally {
        return { error, result }
    }
    
};

const readOneAlimentation = async (alimentationId) => {
    const sql = "SELECT * FROM alimentation WHERE ID_alimentation = ?";
    let error = null
    let result = null
    try {
        result = await query(sql, [alimentationId]);
    } catch (e) {
        error = e
    } finally {
        return { error, result }
    }
};
const createAlimentation = async (
    NAME,
    DESCRIPTION,
    QUANTITE
) => {
    const sql = `
        INSERT INTO alimentation (NAME, DESCRIPTION, QUANTITE)
        VALUES (?, ?, ?)
    `;

    let error = null;
    let result = null;

    try {
        result = await query(sql, [
            NAME,
            DESCRIPTION,
            QUANTITE
        ]);
    } catch (e) {
        error = e.message;
    } finally {
        return { error, result };
    }
}

export const AlimentationDB = {
    readAlimentation,
    createAlimentation,
    readOneAlimentation
};