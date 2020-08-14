const axios = require('axios')

module.exports = {
    
    fipe: async function  getFipe (req) {
        const fipe = await axios.get("https://fipeapi.appspot.com/api/1/" + req.tipo + "/veiculos/" + req.marca + ".json")
        return fipe.data
    }

}



