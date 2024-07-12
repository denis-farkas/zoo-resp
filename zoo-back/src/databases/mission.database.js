import query from "./init.database.js";

const readMission = async () => {
    const sql = "SELECT * FROM mission ";
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

const readOneMission = async (missionId) => {
    const sql = "SELECT * FROM mission WHERE id_mission = ?";
    let error = null
    let result = null
    try {
        result = await query(sql, [missionId]);
    } catch (e) {
        error = e
    } finally {
        return { error, result }
    }
};




export const MissionDB = {
    readMission,
    readOneMission
};

