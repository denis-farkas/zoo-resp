import express from "express";
import jwt from "../middlewares/jwt.mdlwr.js";
import checkAdmin from "../middlewares/check-admin.mdlwr.js";
import { AvisController } from "../controllers/avis.controller.js";

// Fonction pour initialiser les routes liées aux messages dans l'application Express
const initAvisRoutes = (app) => {
  // Création d'un routeur Express dédié aux routes des messages
  const router = express.Router();

  // Définition des routes avec les méthodes associées du contrôleur
  router.post("/createAvis", AvisController.createAvis);
  router.get("/readAvis", AvisController.readAvis);
  router.get("/readOneAvis/:avisId", AvisController.readOneAvis);
  router.delete("/deleteOneAvis/:avisId", AvisController.deleteOneAvis);

  // Utilisation du routeur dans l'application avec le préfixe "/api"
  app.use("/api", router);
};

export default initAvisRoutes;
