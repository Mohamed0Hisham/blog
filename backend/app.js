// import express from "express";

// import connectToDatabase from "./config/connect.js";
// const server = express();

// connectToDatabase().then(() => {
// 	server.listen(5000, () => {
// 		console.log(`server is running ✅`);
// 	});
// });

import express from "express";
import articleRoutes from "./routes/articleRoutes.js";

const app = express();
app.use(express.json());
app.use("/api", articleRoutes);

export default app;
