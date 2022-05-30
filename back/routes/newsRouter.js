const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, newsController.create)
router.get('/', newsController.getAll)
router.get('/:id', newsController.getOne)

module.exports = router