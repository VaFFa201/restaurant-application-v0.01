const ApiError = require("../error/ApiError")
const uuid = require('uuid')
const path = require('path')
const { Dish } = require("../models/models")



class DishController {
    async create(req, res, next) {
        try {
            let { name, price, description, typeId } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const dish = await Dish.create({ name, price, description, typeId, img: fileName })

            return res.json(dish)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        const { typeId } = req.query
        let dishes
        if (typeId) {
            dishes = await Dish.findAll({ where: { typeId } })
        }
        else {
            dishes = await Dish.findAll()
        }
        return res.json(dishes)
    }

    async getOne(req, res, next) {
        const { id } = req.params
        const dish = await Dish.findOne({ where: { id } })
        return res.json(dish)
    }

}

module.exports = new DishController()