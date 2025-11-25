const saveQuantity = async (bp, event, state) => {
  state.quantity = event.text;
  return state;
};

module.exports = saveQuantity;
“Add saveQuantity action”
