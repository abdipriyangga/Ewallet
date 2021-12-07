const initStateTopup = {
  errMsg: '',
  sccMsg: '',
};

const transfer = (state = initStateTopup, action) => {
  switch (action.type) {
    case 'SET_TRANSFER_FAILED':
      return {
        ...state,
        errMsg: action.payload,
        sccMsg: '',
      };
    case 'SET_TRANSFER_SUCCESS':
      return {
        ...state,
        sccMsg: action.payload,
        errMsg: '',
      };
    default:
      return state;
  }
};

export default transfer;
