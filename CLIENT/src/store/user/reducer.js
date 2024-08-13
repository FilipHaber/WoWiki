const initialState = {
  isLogged: false,
  nickname: null,
  isAdmin: false,
  status: null,
  id: null,
};

function reducer(state, action) {
  console.log("action received:", action);
  switch (action.type) {
    case "LOGIN":
      return {
        isLogged: true,
        nickname: action.payload.nickname,
        isAdmin: action.payload.isAdmin,
        status: action.payload.status,
        id: action.payload.id,
      };
    case "LOGOUT":
      return initialState;
    default:
      throw new Error("Action type not found");
  }
}

export { initialState, reducer };
