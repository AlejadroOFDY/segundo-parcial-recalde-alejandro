import express from "express";
import bookRoutes from "./src/routes/book.routes.js";
import dotenv from "dotenv";


dotenv.config();

app.use(express.json());
app.use("/api/books", bookRoutes)



const PORT = process.env.PORT || 3000;




