const handleConfirmation = async (bp, event, state) => {
  const confirmation = event.text.toLowerCase();
  state.confirmed = confirmation === 'sim';
  return state;
};

module.exports = handleConfirmation;
“Add handleConfirmation action”
