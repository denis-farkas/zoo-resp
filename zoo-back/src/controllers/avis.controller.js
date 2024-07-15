import { AvisDB } from "../databases/avis.database.js";

// Fonction pour créer un avis
const createAvis = async (req, res) => {
  // Extraction des données de la requête
  const { name, email, content, date } = req.body;

  // Appel à la fonction de la base de données pour créer un avis
  const response = await AvisDB.createAvis(name, email, content, date);
  const result = response.result;

  // Retour d'une réponse avec le statut 201 (Créé) et les données du avis créé
  return res.status(201).json({ message: "OK", avisId: result.insertId });
};

// Fonction pour récupérer tous les avis
const readAvis = async (req, res) => {
  // Appel à la fonction de la base de données pour récupérer tous les avis
  const avisResponse = await AvisDB.readAvis();
  const avis = avisResponse.result;

  // Retour d'une réponse avec le statut 200 (OK) et les données des avis
  return res.status(200).json({ message: "OK", avis });
};

// Fonction pour récupérer un avis spécifique par son identifiant
const readOneAvis = async (req, res) => {
  // Extraction de l'identifiant de l'avis à partir des paramètres de la requête
  const avisId = req.params.avisId;

  // Appel à la fonction de la base de données pour récupérer un avis spécifique par son identifiant
  const response = await AvisDB.readOneAvis(avisId);
  const result = response.result;

  // Création d'un objet représentant l'avis avec des propriétés spécifiques
  const avis = {
    avisId,
    name: result[0].name,
    email: result[0].email,
    content: result[0].content,
    date: result[0].date,
  };

  // Retour d'une réponse avec le statut 200 (OK) et les données de l'avis spécifié
  return res.status(200).json({ message: "Requête OK", avis });
};

// Fonction pour supprimer un avis par son identifiant
const deleteOneAvis = async (req, res) => {
  // Extraction de l'identifiant de l'avis à partir des paramètres de la requête
  const avisId = req.params.avisId;

  // Appel à la fonction de la base de données pour supprimer un avis
  const response = await AvisDB.deleteOneAvis(avisId);

  // Récupération d'une éventuelle erreur
  const error = response.error; // soit une chaîne de caractères, soit null

  // Vérification de la présence d'une erreur
  if (error) {
    // En cas d'erreur, retour d'une réponse avec le statut 500 (Erreur interne du serveur)
    return res.status(500).json({ message: error });
  } else {
    // En cas de succès, retour d'une réponse avec le statut 200 (OK) et un message indiquant la suppression réussie
    return res.status(200).json({ message: "Avis supprimé" });
  }
};

// Exportation de l'objet contenant toutes les fonctions du contrôleur des avis
export const AvisController = {
  createAvis,
  readAvis,
  readOneAvis,
  deleteOneAvis,
};
