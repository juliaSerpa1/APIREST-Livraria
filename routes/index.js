const express = require('express');

const router = express.Router();

const LivroController = require('../controllers/LivroController')

router.get('/livros', LivroController.index);
  
router.get('/livros/:_id', LivroController.detail);
  
router.post('/livros', LivroController.create);
  
router.put('/livros', LivroController.update);
  
router.delete('/livros/:_id', LivroController.delete);

module.exports=router