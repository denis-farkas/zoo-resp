import express from "express";
import jwt from "../middlewares/jwt.mdlwr.js";
import checkAdmin from "../middlewares/check-admin.mdlwr.js";
import { MessageController } from "../controllers/message.controller.js";

// Fonction pour initialiser les routes liées aux messages dans l'application Express
const initMessageRoutes = (app) => {
  // Création d'un routeur Express dédié aux routes des messages
  const router = express.Router();

  // Définition des routes avec les méthodes associées du contrôleur
  router.post("/createMessage", MessageController.createMessage);
  router.get("/readMessages", MessageController.readMessages);
  router.get("/readOneMessage/:messageId", MessageController.readOneMessage);
  router.delete(
    "/deleteOneMessage/:messageId",
    MessageController.deleteOneMessage
  );

  // Utilisation du routeur dans l'application avec le préfixe "/api"
  app.use("/api", router);
};

export default initMessageRoutes;
