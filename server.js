const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const Tipo = require('./fipe/tipo')
const Marca = require('./fipe/marca')
const Modelo = require('./fipe/modelo')
const Ano = require('./fipe/ano')


    app.get('/fipe/tipo', async (req, res) => {
        try {
            res.json(await Tipo.fipe(req.query.urlFipe))
        } catch (error) {
            res.status(400).send({error: "Search Failed"})
        }
    })
   
    app.get('/fipe/marca', async (req, res) => {
        try {
            res.json(await Marca.fipe(req.query.urlFipe))
        } catch (error) {
            res.status(400).send({error: "Search Failed"})
        }
    })
    app.get('/fipe/modelo', async (req, res) => {
        try {
            res.json(await Modelo.fipe(req.query.urlFipe))
        } catch (error) {
            res.status(400).send({error: "Search Failed"})
        }
    })
    app.get('/fipe/ano', async (req, res) => {
        try {
            res.json(await Ano.fipe(req.query.urlFipe))
        } catch (error) {
            res.status(400).send({error: "Search Failed"})
        }
    })
    app.get('/cotacao', (req, res) => {

        const filePath = path.join(__dirname, 'web', 'cotacao.html')

        
        fs.readFile(
            filePath,
            (err, content) => {
                if(err) throw err
                
                res.end(content)
            }
        )
    
    })

    app.use(express.static(path.join(__dirname, 'web')));

    app.listen(port, () => {
        console.log(`Servidor esta rodando !!`)
    })