// Zona de importaciones
import express from "express";
import bookRoutes from "./src/routes/book.routes.js";
import dotenv from "dotenv";
import { startDb } from "./src/config/database.js";

dotenv.config();

// Configurando el Puerto y App
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/api/books", bookRoutes)


// Me avisará que el servidor está levantado
app.listen(PORT, async () => {
  await startDb();
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



