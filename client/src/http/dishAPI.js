import { $authHost, $host } from "./index";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const createDish = async (dish) => {
    const { data } = await $authHost.post('api/dish', dish)
    return data
}

export const fetchDish = async (typeId) => {
    const { data } = await $host.get('api/dish', {
        params: { typeId }
    })
    return data
}

export const fetchOneDish = async (id) => {
    const { data } = await $host.get('api/dish/' + id)
    return data
}

export const addToBasket = async (dishId) => {
    const { response } = await $authHost.post('api/basket', dishId)
    return response
}

export const getBasket = async () => {
    const { data } = await $authHost.get('api/basket')
    return data
}

