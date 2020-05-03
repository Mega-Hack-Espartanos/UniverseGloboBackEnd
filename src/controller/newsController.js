const news = require("../model/news");

module.exports = {
    async store(req, res) {
        const newsSave = await news.create(req.body);

        return res.json(newsSave);
    },

    async index(req, res) {
        const newsIndex = await news.find();

        return res.json(newsIndex);
    }, 

    async details(req, res) {
        const newsDetails = await news.findById(req.params.id);
        
        return res.json(newsDetails);
    }
};