import { AnimalDB } from "../databases/animal.database.js";

const readAnimal = async (req, res) => {
  const habitatId = req.params.habitatId;
  try {
    const animaux = await AnimalDB.readAnimalByHabitat(habitatId);
    res.status(200).json({ animaux: animaux.result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const readAnimaux = async (req, res) => {
  try {
    const animaux = await AnimalDB.readAnimaux();
    res.status(200).json({ animaux: animaux.result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const readOneAnimal = async (req, res) => {
  const animalId = req.params.animalId;
  try {
    const animal = await AnimalDB.readOneAnimal(animalId);
    res.status(200).json({ animal: animal.result[0] });
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
    id_habitat
  );
  const result = response.result;

  // Retour d'une réponse avec le statut 201 (Créé) et les données de l'atelier de danse créé
  return res.status(201).json({ message: "OK", animal: result });
};

// Fonction pour mettre à jour une catégorie d'atelier
const updateAnimal = async (req, res) => {
  const animalId = req.params.animalId;
  console.log(animalId);
  // Extraction des données de la requête
  const { SANTE, SOIN } = req.body;

  // Appel à la fonction de la base de données pour mettre à jour une catégorie d'atelier
  const response = await AnimalDB.updateAnimal(SANTE, SOIN, animalId);

  // Vérification des erreurs lors de la mise à jour
  if (response.error) {
    // En cas d'erreur, retour d'une réponse avec le statut 500 (Erreur interne du serveur)
    return res.status(500).json({ message: response.error });
  }

  // En cas de succès, retour d'une réponse avec le statut 200 (OK) et un message indiquant la mise à jour réussie
  return res
    .status(200)
    .json({ message: `L'animal numéro ${animalId} a été modifié` });
};

export const AnimalController = {
  readAnimal,
  readAnimaux,
  createAnimal,
  readOneAnimal,
  updateAnimal,
};
