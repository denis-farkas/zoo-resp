import express from 'express';
import {AnimalController} from '../controllers/animal.controller.js';

const initAnimalRoutes = (app) => {
    const router = express.Router();
    router.get('/animaux/:habitatId', AnimalController.readAnimal);
    router.get('/animal/:animalId', AnimalController.readOneAnimal);
    router.post('/createAnimal', AnimalController.createAnimal);
    app.use('/api', router);
};

export default initAnimalRoutes;