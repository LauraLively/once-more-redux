const isGuest = (state = false, action) => {
  switch (action.type) {
    case 'ENTER_AS_GUEST': {
      return true;
    }
    default:
      return state;
  }
};

export default isGuest;

//this is a feature I will be adding at a later date.