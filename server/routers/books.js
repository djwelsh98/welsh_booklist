import express from 'express';

import { getBooks, addBook } from '../controllers/books';

const router = express.Router();

router.get('/get', getBooks);

router.post('/post', addBook);

export default router;