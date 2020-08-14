const axios = require('axios')

module.exports = {

    fipe: async function  getFipe (req) {
        const fipe = await axios.get("https://fipeapi.appspot.com/api/1/" + req.tipo + "/veiculo/" + req.marca + "/" + req.modelo + ".json")
        return fipe.data
    }

}