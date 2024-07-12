import { MissionDB } from '../databases/mission.database.js';

const readMission = async (req, res) => {
    
    try {
        const mission = await MissionDB.readMission();
        res.status(200).json({mission:mission.result});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const readOneMission = async (req, res) => {
    const missionId = req.params.missionId;
    try {
        const mission = await MissionDB.readOneMission(missionId);
        res.status(200).json({mission:mission.result[0]});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const MissionController = {
    readMission,
    readOneMission
};