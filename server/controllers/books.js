import mongoose from 'mongoose';
import Books from '../models/books.js';

export const getBooks = async (req, res) => {
    try {
        const bookInfo = await Books.find();

        res.status(200).json(bookInfo);
    } catch (e) {
        res.status(404).json({message: e})
    }
}

export const addBook = async (req, res) => {
    const book = req.body;

    const newBookInfo = new Books({ ...book, createdAt: new Date().toISOString() })

    try {
        await newBookInfo.save();

        res.status(201).json(newBookInfo);
    } catch (e) {
        res.status(409).json({ message: e });
    }
}