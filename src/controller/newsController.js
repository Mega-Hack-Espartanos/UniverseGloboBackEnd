const newsModel = require("../model/news");

module.exports = {
    async PostNews(req, res) {
        const news = await newsModel.create(req.body);
        return res.json(news);
    },

    async GetNews(req, res) {
        if (!req.params.id) {
            const news = await newsModel.find();
            return res.json(news);
        } else {
            const news = await newsModel.findById(req.params.id);
            return res.json(news);
        }
    }, 

    async PutNews(req, res) {
        var id = req.params.id;
        var title = req.body.title;
        var subtitle = req.body.subtitle;
        var author = req.body.author;
        var datePublication = req.body.datePublication;
        var text = req.body.author;
        var tag = req.body.tag;

        const news = await newsModel.update({_id:id}, {$set:{
                title:title, 
                subtitle:subtitle, 
                author:author, 
                datePublication:datePublication,
                text:text,
                tag:tag
            }
        });
        
        return res.json(news);
    },

    async DeleteNews(req, res) {
        var id = req.params.id;
        const news = await newsModel.remove({_id: id});

        return res.json(news);
    }
};