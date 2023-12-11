const { buildSchema } = require('graphql');

const schema = buildSchema(
    `
    type Product {
        _id: ID!
        name: String!
        price: Float!
        status: String!
        images: [Image!]
    }

    type Image {
        _id: ID!
        url: String!
        priority: Int!
        productId: ID
        product: Product
    }

    input CreateProductInput {
        name: String!
        price: Float!
        status: String!
    }

    input UpdateProductInput {
        name: String
        price: Float
        status: String!
    }

    input CreateImageInput {
        url: String!
        priority: Int
        productId: ID
    }

    input UpdateImageInput {
        url: String
        priority: Int
    }

    type Query {
        products: [Product!]!
        product(id: ID!): Product
        images: [Image!]!
        image(id: ID!): Image
    }

    type Mutation {
        createProduct(input: CreateProductInput!): Product
        updateProduct(id: ID!, input: UpdateProductInput!): Product
        deleteProduct(id: ID!): Product
        createImage(input: CreateImageInput!): Image
        updateImage(id: ID!, input: UpdateImageInput!): Image
        deleteImage(id: ID!): Image
    }
    `
);

module.exports = schema;
