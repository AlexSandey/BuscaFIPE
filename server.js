const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')
const axios = require('axios')

    async function getFipe (req,res){
        var fipeReq = req.query.urlFipe

        console.log(fipeReq.solicitacao)

        if(fipeReq.solicitacao == "tipo"){
            const obj_req = req.query.veiculo
            const url_fipe = 'https://fipeapi.appspot.com/api/1/' + obj_req[0] + '/marcas.json'
            const fipe = await axios.get(url_fipe)
            res.json(fipe.data)
        }
        if(req.query.marca){
            const obj_req = req.query.marca
            const url_fipe = "https://fipeapi.appspot.com/api/1/" + obj_req[0] + "/veiculos/" + obj_req[1] + ".json"
            const fipe = await axios.get(url_fipe)
            res.json(fipe.data)
        }
        if(req.query.modelo){
            const obj_req = req.query.modelo
            const url_fipe = "https://fipeapi.appspot.com/api/1/" + obj_req[0] + "/veiculo/" + obj_req[1] + "/" + obj_req[2] + ".json"
            const fipe = await axios.get(url_fipe)
            res.json(fipe.data)
        }
        if(req.query.ano){
            const obj_req = req.query.ano
            const url_fipe = "https://fipeapi.appspot.com/api/1/" + obj_req[0] + "/veiculo/" + obj_req[1] +
            "/" + obj_req[2] + "/" + obj_req[3] + ".json"
            const fipe = await axios.get(url_fipe)
            res.json(fipe.data)
        }

    }
        
    app.get('/fipe_api', getFipe)

    app.get('/cotacao', (req, res) => {

        const filePath = path.join(__dirname, 'public', 'cotacao.html')

        
        fs.readFile(
            filePath,
            (err, content) => {
                if(err) throw err
                
                res.end(content)
            }
        )
    
    })

    app.use(express.static(path.join(__dirname, 'public')));

    app.listen(port, () => {
        console.log(`Servidor esta rodando !!`)
    })