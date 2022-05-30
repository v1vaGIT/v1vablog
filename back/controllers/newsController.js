const uuid = require('uuid')
const path = require('path')
const {news, comment, user} = require('../models/models')
const ApiError = require('../error/ApiError')

class NewsController {
    async create(req, res, next) {
        //console.log(req.User)
        try {
            const {title} = req.body;
            const {text} = req.body;
            const AuthorId = req.User.id;
            let img = null;
            if(req.files){
                img = req.files;    
                let fileName = uuid.v4() + '.jpg'
                img && img.mv(path.resolve(__dirname, '..', 'static', fileName))
            }
            

            const News = await news.create({title, text, img, AuthorId})

            return res.json(News)
        } catch (e) {
            next(ApiError.badRequest(e.message)) 
        }
    }

    async getAll(req, res) {
        const {AuthorID} = req.query
        let include = [
            {
                model: user,
                as: 'Author',
                attributes: ['email', 'createdAt', 'id']
            }
        ]
        let News;
        if (!AuthorID) {
            News = await news.findAll({include, order: [['id', 'DESC']]})
        }
        else {
            News = await news.findAll({where:{AuthorID}, include, order: [['id', 'DESC']]})
        }
        return res.json(News)
    }

    async getOne(req, res) {
        const {id} = req.params
        const News = await news.findOne(
            {
                where: {id},
                include: [{model: comment, as: 'comments'}]
            }
        )
        return res.json(News)
    }
}


module.exports = new NewsController()