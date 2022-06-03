const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const newsRouter = require('./newsRouter')
const commetsRouter = require('./commetsRouter')

router.use('/user', userRouter) 
router.use('/news', newsRouter)
router.use('/comments', commetsRouter)

module.exports = router