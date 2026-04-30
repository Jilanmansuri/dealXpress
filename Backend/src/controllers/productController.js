import Product from '../models/Product.js';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin/Supplier
const createProduct = async (req, res) => {
  const { name, price, description, image, category, stock } = req.body;

  const product = new Product({
    name,
    price,
    user: req.user._id,
    image,
    category,
    stock,
    description,
    seller: req.user._id
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

export {
  getProducts,
  getProductById,
  createProduct,
};
