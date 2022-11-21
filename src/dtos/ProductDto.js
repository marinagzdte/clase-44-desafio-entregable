export default class ProductDto {
    constructor({ _id, name, price, thumbnail }) {
        this.id = _id.toString()
        this.name = name
        this.price = price
        this.thumbnail = thumbnail
    }
}

export function asDto(prod) {
    if (!prod) return
    if (Array.isArray(prod))
        return prod.map(p => new ProductDto(p))
    else
        return new ProductDto(prod)
}