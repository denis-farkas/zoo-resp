import { PrestationDB } from '../databases/prestation.database.js';

const readPrestation = async (req, res) => {
    try {
        const prestation = await PrestationDB.readPrestation();
        res.status(200).json({prestation:prestation.result});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const readOnePrestation = async (req, res) => {
    const prestationId = req.params.prestationId;
    try {
        const prestation = await PrestationDB.readOnePrestation(prestationId);
        res.status(200).json({prestation:prestation.result[0]});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const PrestationController = {
    readPrestation,
    readOnePrestation
};
