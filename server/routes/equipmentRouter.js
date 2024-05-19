const Router = require('express')
const router = new Router()
const equipmentController = require('../controllers/equipmentController')

router.post('/', equipmentController.create)
router.get('/', equipmentController.getAll)
router.get('/:id', equipmentController.getOne)

module.exports = router