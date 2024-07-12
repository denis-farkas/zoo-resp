import { HabitatDB } from '../databases/habitat.database.js';

const readHabitat = async (req, res) => {
    try {
        const habitats = await HabitatDB.readHabitats();
        res.status(200).json({habitats:habitats.result});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const readOneHabitat = async (req, res) => {
    const habitatId = req.params.habitatId;
    try {
        const habitat = await HabitatDB.readOneHabitat(habitatId);
        res.status(200).json({habitat:habitat.result[0]});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const HabitatController = {
    readHabitat,
    readOneHabitat
};