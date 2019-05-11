export default {
  /* Product input name */
  setProductNameToCreate: (state, productNameToCreate) =>
    (state.productNameToCreate = productNameToCreate),

  setProductDescriptionToCreate: (state, productDescriptionToCreate) =>
    (state.productDescriptionToCreate = productDescriptionToCreate),

  setProductImageToCreate: (state, productImageToCreate) =>
    (state.productImageToCreate = productImageToCreate),

  /* Products */
  setProducts: (state, products) => (state.products = products),
  addProduct: (state, product) => state.products.push(product),
  removeProductById: (state, productId) => {
    const index = state.products.findIndex(product => product.id === productId)
    state.products.splice(index, 1)
  },

  /* Products deletion */
  addProductDeletionPending: (state, productId) =>
    state.productDeletionPending.push(productId),
  removeProductDeletionPending: (state, productId) => {
    const index = state.products.findIndex(product => product.id === productId)
    state.productDeletionPending.splice(index, 1)
  },

  /* Product creation */
  setProductCreationPending: (state, value) =>
    (state.productCreationPending = value)
};
