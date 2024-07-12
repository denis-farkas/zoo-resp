import initHabitatRoutes from "./habitat.routes.js";
import initAnimalRoutes from "./animal.routes.js";
import intMissionRoutes from "./mission.routes.js";
import initPrestationRoutes from "./prestation.routes.js";
import initUserRoutes from "./user.routes.js";
import initAlimentationRoutes from "./alimentation.routes.js";




const initRoutes = (app) => {
    initHabitatRoutes(app);
    initAnimalRoutes(app);
    intMissionRoutes(app);
    initPrestationRoutes(app);
    initAlimentationRoutes(app);
    initUserRoutes(app);
    };

    export default initRoutes;