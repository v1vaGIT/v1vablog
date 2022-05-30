const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    //console.log('jaklsjdklasjdklasjd')
    if (req.method === "OPTIONS") {
        next()
    }
    try {
          
        const token = req.headers.authorization.split(' ')[1]
        console.log(token)
        if (!token) {
            return res.status(401).json({message:'Не авторизован'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.User = decoded
        next()
    } catch (e) {
        res.status(401).json({message:'Не авторизован'})
    }
};