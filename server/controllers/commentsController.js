const {comment} = require('../models/models')
const ApiError = require('../error/ApiError')

class CommentsController {
    async create(req, res) {
        const {text} = req.body
        const Comment = await comment.create({text})
        return res.json(Comment)
    }

    async getAll(req, res) {
        const comments = await comment.findAll()
        return res.json(comments)
    }
}


module.exports = new CommentsController()