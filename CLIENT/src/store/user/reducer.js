const initialState = {
  isLogged: false,
  nickname: null,
  isAdmin: false,
  status: null,
  id: null,
  email: null,
  created_at: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        isLogged: true,
        nickname: action.payload.nickname,
        isAdmin: action.payload.isAdmin,
        status: action.payload.status,
        id: action.payload.id,
        email: action.payload.email,
        created_at: action.payload.created_at,
      };
    case "LOGOUT":
      return initialState;
    default:
      throw new Error("Action type not found");
  }
}

export { initialState, reducer };
