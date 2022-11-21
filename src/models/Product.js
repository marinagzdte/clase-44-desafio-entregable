export default class Product {
    id
    name
    price
    thumbnail

    constructor({ id, name, price, thumbnail }) {
        this.id = id
        this.name = name
        this.price = price
        this.thumbnail = thumbnail
    }

    get id() { return this.id }

    set id(id) {
        if (!id) throw new Error('"id" is a required field')
        this.id = id
    }

    get name() { return this.name }

    set name(name) {
        if (!name) throw new Error('"name" is a required field')
        this.name = name
    }

    get price() { return this.price }

    set price(price) {
        if (!price) throw new Error('"price" is a required field')
        this.price = price
    }

    get thumbnail() { return this.thumbnail }

    set thumbnail(thumbnail) {
        if (!thumbnail) throw new Error('"thumbnail" is a required field')
        this.thumbnail = thumbnail
    }
}