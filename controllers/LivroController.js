const Livro = require("../models/Livro");

module.exports = {
    async index(req, res){
        const livro = await Livro.find()
        res.status(200).json(livro)
    },
    async detail(req,res){
        const {_id} = req.params
        const livro = await Livro.findOne({_id});
        res.status(200).json(livro)
    },
    async create(req,res){
        const { titulo, autor, numeroPaginas} = req.body;
        let data = {}

        let livro = await Livro.findOne({titulo}) //buscando um livro com o titulo que ele esta tentando cadastrar
        if(!livro){ // se nao existir o livro atraves do titulo ele vai cadastrar executando isso
            data = { titulo, autor, numeroPaginas } // vars vindo co corpo
            livro = await Livro.create(data) // criando o user atraves das var que vem do corpo
            return res.status(200).json(livro)
        }else{
            return res.status(500).json(livro)
        }
    },
    async update(req,res){
        const { _id, titulo, autor, numeroPaginas} = req.body

        let data = {}

        data = { _id, titulo, autor, numeroPaginas} // vars vindo co corpo
        livro = await Livro.findByIdAndUpdate({_id}, data, {new:true}) // criando o user atraves das var que vem do corpo
        return res.status(200).json(livro)
    },
    async delete(req,res){
        const {_id} = req.params
        const livro = await Livro.findByIdAndDelete({_id});

        res.json({Message:"Excluido com sucesso!"})
    }
}