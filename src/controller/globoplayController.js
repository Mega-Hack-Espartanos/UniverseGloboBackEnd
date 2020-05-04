const globoplayModel = require("../model/globoplay");

module.exports = {
    async GetGloboPlay(req, res) {
        if (!req.params.id) {
            const news = await globoplayModel.find();
            return res.json(news);
        } else {
            const news = await globoplayModel.findById(req.params.id);
            return res.json(news);
        }
    },

    async PostGloploPlay(req, res) {
        const news = await globoplayModel.create(req.body);
        return res.json(news);
    },

    async PutGloboPlay(req, res) {
        var id = req.params.id;
        var title = req.body.title;
        var synopsis = req.body.subtitle;
        var genre = req.body.author;
        var image = req.body.datePublication;
        var dateRelease = req.body.author;
        var tag = req.body.tag;

        const news = await globoplayModel.update({ _id: id }, {
            $set: {
                title: title,
                synopsis: synopsis,
                genre: genre,
                image: image,
                dateRelease: dateRelease,
                tag: tag
            }
        });

        return res.json(news);
    },

    async DeleteGloboPlay(req, res) {
        var id = req.params.id;
        const news = await globoplayModel.remove({ _id: id });

        return res.json(news);
    }
};