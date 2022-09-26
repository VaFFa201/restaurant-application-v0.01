const { Dish, BasketDish, Basket } = require("../models/models")

class BasketController {
    // ------ CRUD корзины ------ //

    async addToBasket(req, res, next) {
        const user = req.user
        const { dishId } = req.body
        const basket = await BasketDish.create({ basketId: user.id, dishId: dishId })
        return res.json(basket)
    }

    async getBasketUser(req, res) {
        const { id } = req.user
        const basket = await BasketDish.findAll({
            include: {
                model: Dish
            }, where: { basketId: id }
        })

        return res.json(basket)
    }

}

module.exports = new BasketController()