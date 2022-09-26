import { makeAutoObservable } from "mobx";

export default class DishStore {
    constructor() {
        this._types = []
        this._dishes = []
        this._baskets = []
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setDishes(dishes) {
        this._dishes = dishes
    }
    setBaskets(basket) {
        this._baskets = basket
    }
    setSelectedType(type) {
        this._selectedType = type
    }

    get types() {
        return this._types
    }
    get dishes() {
        return this._dishes
    }
    get basket() {
        return this._baskets
    }
    get selectedType() {
        return this._selectedType
    }
}