const saveProduct = async (bp, event, state) => {
  state.product = event.text;
  return state;
};

module.exports = saveProduct;
“Add saveProduct action”
