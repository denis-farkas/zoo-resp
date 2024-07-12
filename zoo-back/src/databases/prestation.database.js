import query from "./init.database.js";

const readPrestation = async () => {
    const sql = "SELECT * FROM prestation";
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

const readOnePrestation = async (prestationId) => {
    const sql = "SELECT * FROM prestation WHERE id_prestation = ?";
    let error = null
    let result = null
    try {
        result = await query(sql, [prestationId]);
    } catch (e) {
        error = e
    } finally {
        return { error, result }
    }
};




export const PrestationDB = {
    readPrestation,
    readOnePrestation
};

