import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectionMongoDB.js';

dotenv.config();
 
const app = express();

const PORT = process.env.PORT || 5001

app.use(express.json()); // to parse the incoming request with JSON payloads (from.req.body)

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    connectToMongoDB();
    console.log("Server is running at", PORT);
})