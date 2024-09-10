const axios = require('axios');
const { Pessoa } = require('../models');
console.log(Pessoa)

exports.createPessoaCPF = async (req, res) => {
    try {
        const { cpf } = req.params;

        const { nome, telefone } = response.data;

        novaPessoa = await Pessoa.create({
            cpf: cpf,
            nome: nome,
            telefone: telefone, 
        });

        res.status(201).json(novoEndereco);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar a pessoa', details: error.message });
    }};

exports.createPessoa = async (req, res) => {
    try {
        const {id, nome, cpf, telefone} = req.body;
        
        const novaPessoa = await novaPessoa.create({
            id,
            nome,
            cpf,
            telefone,
        });

        res.status(201).json(novaPessoa);
    }catch(error) {
        console.error(error)
        res.status(500).json({ error: 'Erro ao criar pessoa', details: error.message});
    }
};

exports.getAllPessoas = async (req, res) => {
    try {
        const pessoas = await Pessoa.findAll();
        res.status(200).json(pessoas);
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar pessoas', details: error.message});
    }
};

exports.getPessoaById = async (req, res) => {
    try {
        const { Id } = req.params;
        const pessoa = await Pessoa.findByPk(Id);

        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada'});
        }

        res.status(200).json(pessoas);
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar pessoa', details: error.message});
    }
}

exports.updatePessoa = async (req, res) => {
    try {
        const { Id } = req.params;
        const {nome, cpf, telefone} = req.body;

        const pessoa = await Pessoa.findByPk(Id);

        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada'})
        }

        pessoa.nome = nome;
        pessoa.cpf = cpf;
        pessoa.telefone = telefone;

        await endereco.save();

        res.status(200).json(pessoas)
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar pessoa', details: error.message})
    }
}

exports.deletePessoa= async (req, res) => {
    try {
        const { Id } = req.params;
        const pessoa = await Pessoa.findByPk(Id)

        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada'})
        }

        await pessoa.destroy();

        res.status(204).send();
    }catch(error) {
        res.status(500).json({ error: 'Erro ao buscar pessoa', details: error.message})
    }
}