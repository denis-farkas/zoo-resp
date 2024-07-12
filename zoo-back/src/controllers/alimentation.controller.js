import { AlimentationDB } from '../databases/alimentation.database.js';

const readAlimentation = async (req, res) => {
    
    try {
        const alimentation = await AlimentationDB.readAlimentation();
        res.status(200).json({alimentation:alimentation.result});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const readOneAlimentation = async (req, res) => {
    const alimentationId = req.params.alimentationId;
    try {
        const alimentation = await AlimentationDB.readOneAlimentation(alimentationId);
        res.status(200).json({alimentation:alimentation.result[0]});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createAlimentation = async (req, res) => {
    // Extraction des données de la requête
    const {
        NAME,
        DESCRIPTION,
        QUANTITE
    } = req.body;

    
    const response = await AlimentationDB.createAlimentation(
        NAME,
        DESCRIPTION,
        QUANTITE
    );
    const result = response.result;

    
    return res.status(201).json({ message: "OK", alimentation: result });
};

export const AlimentationController = {
    readAlimentation,
    createAlimentation,
    readOneAlimentation
};