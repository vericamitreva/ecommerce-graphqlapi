const Product = require('./../../models/product');
const Image = require('./../../models/image');

const resolvers = {
    products: async () => await Product.find(),
    product: async ({ id }) => await Product.findById(id),
    
    images: async () => await Image.find().populate('product'), 
    image: async ({ id }) => await Image.findById(id).populate('product'),

    createProduct: async ({ input }) => await Product.create(input),
    updateProduct: async ({ id, input }) => await Product.findByIdAndUpdate(id, input, { new: true }),
    deleteProduct: async ({ id }) => await Product.findByIdAndDelete(id),

    createImage: async ({ input }) => {
        const { url, priority, productId } = input;
        if (productId) {
        const product = await Product.findById(productId);
        if (product) {
            const image = await Image.create({ url, priority, product: productId });
            await Product.findByIdAndUpdate(productId, { $push: { images: image._id } });
            return image;
        } else {
            throw new Error('Product not found');
        }
        } else {
        const image = await Image.create({ url, priority });
        return image;
        }
    },
    updateImage: async ({ id, input }) => await Image.findByIdAndUpdate(id, input, { new: true }),
    deleteImage: async ({ id }) => await Image.findByIdAndDelete(id)
};

module.exports = resolvers;
