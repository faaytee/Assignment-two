let products = [];

const postProduct = (req, res) => {
  const data = req.body;
  const productName = data.name;
  const existingProduct = products.find(
    (aProduct) => aProduct.name === productName
  );

  if (existingProduct) {
    const response = {
      success: "false",
      message: `${productName} already exists`,
    };
    res.send(response);
  }
  const newProduct = {
    id: products.length + 1,
    ...data,
  };
  products.push(newProduct);

  const response = {
    success: "true",
    message: "Products added",
    data: newProduct,
  };
  res.status(201).send(response);
};

const getProduct = (req, res) => {
  const response = {
    success: "true",
    message: "Products retrieved",
    data: { products },
  };
  res.status(200).send(response);
};

const getProductId = (req, res) => {
  const productId = req.params.id;
  const existingId = products.find((newId) => newId.id === parseInt(productId));
  if (!existingId) {
    const response = {
      success: "false",
      message: "Id not found",
    };
    res.send(response);
  }
  const response = {
    success: "true",
    message: "Product Id retrieved",
    data: { existingId },
  };
  res.send(response);
};
const updateProduct = (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === parseInt(productId));
  if (!product) {
    const response = {
      success: "false",
      message: "Id not found",
    };
    return res.status(404).send(response);
  }
  const data = req.body;
  const updatedProduct = {
    ...product,
    ...data,
  };
  const productIndex = products.findIndex((p) => p.id === updatedProduct.id);
  products[productIndex] = updatedProduct;
  const response = {
    success: "true",
    message: "product updated",
    data: { product: updatedProduct },
  };
  res.status(200).send(response);
};

const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    const response = {
      success: "false",
      message: "product not found",
    };
    return res.status(404).send(response);
  }

  const updatedProducts = products.filter((p) => p.id !== productId);
  products = updatedProducts;

  const response = {
    success: "true",
    message: "product deleted",
  };
  res.status(200).send(response);
};

module.exports = {
  postProduct,
  getProduct,
  getProductId,
  updateProduct,
  deleteProduct,
};
