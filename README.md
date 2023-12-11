# E-Commerce GraphQL API

This project is a simple e-commerce GraphQL API built using Node.js, Express, and MongoDB. It provides a single endpoint for managing products and images, catering to the needs of various frontend applications.

## Built With

- JavaScript
- Node.js
- Express 
- MongoDB 

## Getting Started

### Prerequisites

To get a local copy up and running follow these simple example steps.

* You need npm to be installed on your local machine. For details please use the following site: 
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Setup

* Next you need to clone the repository on your local machine with the following command line:

git clone https://github.com/vericamitreva/ecommerce-graphqlapi.git

### Install

* To install the project you need to enter the directory you've cloned. Open a terminal and follow these next steps:

npm install (to install all the necessary modules and dependencies) given bellow

- express
- express-graphql
- graphql
- mongoose
- dotenv

* Set up your environment variables by creating a .env file in the root directory. Include the following variables:

PORT=preferred-port

MONGO_URI=mongodb-connection-string

### Usage

* To run this project localy simply run the following line:

npm start

* The project should be deployed on your machine and you can access it on a browser by default on the URL: localhost:preferred-port

* Access the GraphQL API at:

http://localhost:preferred-port/graphql

* Available Queries and Mutations
* The API supports the following queries and mutations:

Queries

- products: Get a list of all products.
- product(id: ID!): Get details of a specific product.
- images: Get a list of all images.
- image(id: ID!): Get details of a specific image.

Mutations

- createProduct(input: CreateProductInput!): Create a new product.
- updateProduct(id: ID!, input: UpdateProductInput!): Update an existing product.
- deleteProduct(id: ID!): Delete a product.
- createImage(input: CreateImageInput!): Create a new image.
- updateImage(id: ID!, input: UpdateImageInput!): Update an existing image.
- deleteImage(id: ID!): Delete an image.

Refer to the GraphQL schema for input details.

## Authors

- Verica Mitreva

👤 **Author**

- GitHub: [@githubhandle](https://github.com/vericamitreva)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/vericamitreva)

## 🤝 Contributing

Contributions are welcome! Please follow the standard GitHub flow: fork the repository, make your changes, and submit a pull request.

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Propeler Junior Backend Assignment

## 📝 License

This project is [MIT licensed](https://opensource.org/licenses/MIT).