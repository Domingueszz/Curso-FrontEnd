import { Request, Response } from 'express';
import Memory from '../models/Memory';
import fs from 'fs';
import path from 'path';

// CREATE - Cria uma nova memória no banco de dados.
export const createMemory = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const image = req.file?.filename;

    if (!title || !description || !image) {
      return res.status(422).json({ error: 'Título, descrição e imagem são obrigatórios.' });
    }

    const newMemory = new Memory({
      title,
      description,
      image,
    });

    await newMemory.save();
    res.status(201).json(newMemory);
  } catch (error) {
    console.error('Erro ao criar memória:', error);
    res.status(500).json({ error: 'Erro ao criar memória' });
  }
};

// READ ALL - Busca todas as memórias do banco de dados.
export const getAllMemories = async (_req: Request, res: Response) => {
  try {
    const memories = await Memory.find().sort({ createdAt: -1 });
    res.json(memories);
  } catch (error) {
    console.error('Erro ao buscar memórias:', error);
    res.status(500).json({ error: 'Erro ao buscar memórias' });
  }
};

// READ ONE - Busca uma única memória pelo seu ID.
export const getMemoryById = async (req: Request, res: Response) => {
  try {
    const memory = await Memory.findById(req.params.id);
    if (!memory) return res.status(404).json({ error: 'Memória não encontrada' });
    res.json(memory);
  } catch (error) {
    console.error('Erro ao buscar memória por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar memória' });
  }
};

// UPDATE - Atualiza uma memória existente pelo seu ID.
export const updateMemory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const memory = await Memory.findById(id);
    if (!memory) {
      return res.status(404).json({ msg: 'Memória não encontrada.' });
    }

    memory.title = title || memory.title;
    memory.description = description || memory.description;

    if (req.file) {
      // 👇 CORREÇÃO APLICADA AQUI
      // Verifica se existe uma imagem antiga antes de tentar deletá-la
      if (memory.image) {
        const oldImagePath = path.resolve(__dirname, '..', 'uploads', memory.image);
        fs.unlink(oldImagePath, (err) => {
          if (err) console.error('Erro ao deletar imagem antiga:', err);
        });
      }
      memory.image = req.file.filename;
    }

    const updatedMemory = await memory.save();
    res.status(200).json(updatedMemory);
  } catch (error) {
    console.error('Erro ao atualizar memória:', error);
    res.status(500).json({ msg: 'Ocorreu um erro no servidor.' });
  }
};

// DELETE - Deleta uma memória pelo seu ID.
export const deleteMemory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const memory = await Memory.findById(id);

    if (!memory) {
      return res.status(404).json({ error: 'Memória não encontrada' });
    }

    // 👇 CORREÇÃO APLICADA AQUI
    // Verifica se existe uma imagem associada antes de tentar deletá-la
    if (memory.image) {
      const imagePath = path.resolve(__dirname, '..', 'uploads', memory.image);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error('Erro ao deletar o arquivo de imagem:', err);
        }
      });
    }
    
    await memory.deleteOne();

    res.status(200).json({ message: 'Memória deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar memória:', error);
    res.status(500).json({ error: 'Erro ao deletar memória' });
  }
};