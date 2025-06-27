import Books from "../models/book.model.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await Books.findAll();
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({error: "No se pudo obtener todos los libros"})
    }
};

export const getBookById = async (req, res) => {
    try {
        const book = Books.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({error: "Libro no encontrado"});
        }
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el libro"})
    }
};

// crear libros

export const createBook = async (req, res) => {
    try {
        const {title, autor, pages, genre, description } = req.body;

        console.log(req.body)

        if (!title || !autor || !pages || !genre) {
            res.status(400).json({ error: "Faltan campos obligatorios"});
        }
        if (isNaN(pages)) {
            res.status(400).json({ error: "El número de páginas debe ser un número entero"});
        }
        const newBook = await Books.create({
        title,
        autor,
        pages,
        genre,
        description,
    });
    res.status(200).json(newBook)
    } catch (error) {
        if (error.title === "SequelizeUniqueConstraintError") {
            res.status(400).json({ error: "El nombre ya está en uso"});
        } else {
            res.status(500).json({ error: "Error al crear el libro"});
        }
    }
};

export const updateBook = async (req, res) => {
    try {

    } catch {

    }
};

// Para eliminar un libro
export const deleteBook = async (req, res) => {
    try {
        const book = await Books.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ error: "No se encontró el libro"});
        }
        await book.destroy();
        res.status(200).json({message: "Se eliminó el libro exitosamente"});
    } catch (error) {
        res.status(500).json({error: "No se pudo eliminar el libro"})
    }
};
