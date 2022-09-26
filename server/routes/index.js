const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const basketRouter = require('./basketRouter')
const dishRouter = require('./dishRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/basket', basketRouter)
router.use('/dish', dishRouter)

module.exports = router