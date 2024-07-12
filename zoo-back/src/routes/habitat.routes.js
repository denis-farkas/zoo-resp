import express from 'express';
import {HabitatController} from '../controllers/habitat.controller.js';

const initHabitatRoutes = (app) => {
    const router = express.Router();
    router.get('/habitats', HabitatController.readHabitat);
    router.get('/habitat/:habitatId', HabitatController.readOneHabitat);
    app.use('/api', router);
};

export default initHabitatRoutes;