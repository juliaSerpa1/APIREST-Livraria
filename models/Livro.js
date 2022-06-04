const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    id: String,
    titulo: String,
    autor: String,
    numeroPaginas: Number
});
const livros = mongoose.model('Livros', DataSchema);
module.exports = livros;