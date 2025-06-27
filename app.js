import express from "express";
import bookRoutes from "./src/routes/book.routes.js";
import dotenv from "dotenv";
import { startDb } from "./src/config/database.js";

dotenv.config();

app.use(express.json());
app.use("/api/books", bookRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await startDb();
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



