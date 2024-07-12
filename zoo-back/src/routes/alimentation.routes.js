import express from 'express';
import {AlimentationController} from '../controllers/alimentation.controller.js';

const initAlimentationRoutes = (app) => {
    const router = express.Router();
    router.get('/alimentation', AlimentationController.readAlimentation);
    router.get('/alimentation/:alimentationId', AlimentationController.readOneAlimentation);
    router.post('/createAlimentation', AlimentationController.createAlimentation);
    app.use('/api', router);
};

export default initAlimentationRoutes;