import express from 'express';
import {PrestationController} from '../controllers/prestation.controller.js';

const initPrestationRoutes = (app) => {
    const router = express.Router();
    router.get('/prestation', PrestationController.readPrestation);
    router.get('/prestation/:prestationId', PrestationController.readOnePrestation);
    app.use('/api', router);
};

export default initPrestationRoutes;