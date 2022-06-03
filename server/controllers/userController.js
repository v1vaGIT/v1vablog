const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {user} = require('../models/models')

const generateJwt = (id, email) => {
    return jwt.sign(
         {id, email}, 
        process.env.SECRET_KEY,
         {expiresIn: '12h'}
        )
}

class UserController {
    async registration(req, res, next) {
        const {email, password} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'))
        }
        const candidate = await user.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с данным emal уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const User = await user.create({email, password: hashPassword})
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const User = await user.findOne({where: {email}})
        if (!User) {
            return next(ApiError.internal('Пользователь не  найден'))
        } 
        let comparePassword = bcrypt.compareSync(password, User.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(User.id, User.email)
        return res.json({token})
    }

    async check(req, res, next){
        const token = generateJwt(req.User.id, req.User.email)
        return res.json({token})
    }
}

module.exports = new UserController()