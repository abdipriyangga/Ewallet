const initStateAuth = {
  isRegister: false,
  token: null,
  notifToken: null,
};

const auth = (state = initStateAuth, action) => {
  switch (action.type) {
    case 'GET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_AUTH_LOGOUT': {
      return {
        ...state,
        token: null,
      };
    }
    case 'REGISTER_TOKEN':
      return {
        ...state,
        notifToken: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
