const express = require('express');
const multer = require('multer');
const { File } = require('../models');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const upload = multer({ dest: './uploads/', limits: { fileSize: 5 * 1024 * 1024 } });

router.post('/', upload.single('file'), async (req, res) => {
  const { title, description } = req.body;
  const file = req.file;
  const userId = req.userId;

  const newFile = await File.create({
    id: uuidv4(),
    filename: file.filename,
    originalName: file.originalname,
    title,
    description,
    userId,
    status: 'uploaded'
  });

  setTimeout(async () => {
    try {
      const stats = fs.statSync(file.path);
      await newFile.update({ status: 'processed', extractedData: JSON.stringify({ size: stats.size }) });
    } catch (err) {
      await newFile.update({ status: 'failed' });
    }
  }, 3000);

  res.json({ id: newFile.id, status: newFile.status });
});

router.get('/:id', async (req, res) => {
  const file = await File.findByPk(req.params.id);
  if (!file || file.userId !== req.userId) return res.status(403).json({ message: 'Access denied' });
  res.json(file);
});

module.exports = router;
