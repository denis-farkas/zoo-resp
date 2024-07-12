import express from "express";
import cors from "cors";
import initRoutes from "../src/routes/init.routes.js";

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = ["http://localhost:3001"];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());
// Initialize routes after CORS middleware
initRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;