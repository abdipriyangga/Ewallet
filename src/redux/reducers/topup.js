const initStateTopup = {
  errMsg: '',
  sccMsg: '',
};

const topup = (state = initStateTopup, action) => {
  switch (action.type) {
    case 'SET_TOPUP_FAILED':
      return {
        ...state,
        errMsg: action.payload,
        sccMsg: '',
      };
    case 'SET_TOPUP_SUCCESS':
      return {
        ...state,
        sccMsg: action.payload,
        errMsg: '',
      };
    default:
      return state;
  }
};

export default topup;
