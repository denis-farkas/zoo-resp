import { AnimalDB } from '../databases/animal.database.js';

const readAnimal = async (req, res) => {
    const habitatId = req.params.habitatId;
    try {
        const animaux = await AnimalDB.readAnimalByHabitat(habitatId);
        res.status(200).json({animaux:animaux.result});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const readOneAnimal = async (req, res) => {
    const animalId = req.params.animalId;
    try {
        const animal = await AnimalDB.readOneAnimal(animalId);
        res.status(200).json({animal:animal.result[0]});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createAnimal = async (req, res) => {
    // Extraction des données de la requête
    const {
       IMG,
       IMG2,
       TITLE,
       DESCRIPTION,
       SANTE,
       SOIN,
       ID_alimentation,
       id_habitat,


    } = req.body;

    // Appel à la fonction de la base de données pour créer un atelier de danse
    const response = await AnimalDB.createAnimal(
        IMG,
        IMG2,
        TITLE,
        DESCRIPTION,
        SANTE,
        SOIN,
        ID_alimentation,
        id_habitat,
    );
    const result = response.result;

    // Retour d'une réponse avec le statut 201 (Créé) et les données de l'atelier de danse créé
    return res.status(201).json({ message: "OK", animal: result });
};

export const AnimalController = {
    readAnimal,
    createAnimal,
    readOneAnimal
};
