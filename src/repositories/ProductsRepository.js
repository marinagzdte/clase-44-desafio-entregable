import Product from '../models/Product.js'
import ProductsDaoFactory from '../daos/products/ProductDaoFactory.js'
import { asDto } from '../dtos/ProductDTO.js'
import logger from '../utils/logger.js'

const dao = ProductsDaoFactory.getDao()

const getProduct = async ({ id }) => {
    return asDto(await dao.getById(id))
}

const getProducts = async () => {
    return asDto(await dao.getAll())
}

const createProduct = async ({ data }) => {
    const id = await dao.save(data)
    return id
}

const updateProduct = async ({ id, data }) => {
    return await dao.modifyItemById(id, data);
}

const deleteProduct = async ({ id }) => {
    return await dao.deleteById(id)
}

export { getProduct, getProducts, createProduct, updateProduct, deleteProduct }