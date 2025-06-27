import { Router } from "express";
// Métodos CRUD (aún no creados)
import {
    getAllBooks,
    getBookById,
    createBook,
} from "../controllers/book.controllers.js";

//    getAllBooks, getBookById, createBook, updateBook, deleteBook,
// dejo separado para que no me de errores

const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", createBook);
/* router.put("/:id", updateBook);
router.delete("/:id", deleteBook); */

export default router;