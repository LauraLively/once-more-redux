const user = (state = null, action) => {
  switch (action.type) {
    default: 
      return state;
  }
};

export default user;

//user will be set server side and is never updated client side but this reducer is still needed.
//THis is a future feature that I will be adding with google's oauth