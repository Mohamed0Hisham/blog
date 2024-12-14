import express from "express";
import articleRoutes from "./routes/article.routes.js";

const app = express();
app.use(express.json());
app.use("/api", articleRoutes);

export default app;
