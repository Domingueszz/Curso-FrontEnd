import express from 'express';
import multer from 'multer';
import path from 'path';
import { createMemory, getAllMemories, getMemoryById } from '../controllers/memoryController';

const router = express.Router();

// Configuração do Multer
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.get('/', getAllMemories);
router.get('/:id', getMemoryById);
router.post('/', upload.single('image'), createMemory);

export default router;
