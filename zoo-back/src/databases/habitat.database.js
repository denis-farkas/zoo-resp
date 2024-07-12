import query from "./init.database.js";

const readHabitats = async () => {
    const sql = "SELECT * FROM habitat";
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

const readOneHabitat = async (habitatId) => {
    const sql = "SELECT * FROM habitat WHERE id_habitat = ?";
    let error = null
    let result = null
    try {
        result = await query(sql, [habitatId]);
    } catch (e) {
        error = e
    } finally {
        return { error, result }
    }
};




export const HabitatDB = {
    readHabitats,
    readOneHabitat
};

