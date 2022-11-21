import { buildSchema } from "graphql";

export const schema = buildSchema(`
type Product {
    id: String!,
    name: String!,
    price: Int!,
    thumbnail: String!
}

input ProductInput {
    name: String!,
    price: Int!,
    thumbnail: String!
}

type Query {
    getProduct(id: String!): Product,
    getProducts: [Product]
}

type Mutation {
    createProduct(data: ProductInput!): String,
    updateProduct(id: ID!, data: ProductInput!): Product,
    deleteProduct(id:ID!): Product
}
`)