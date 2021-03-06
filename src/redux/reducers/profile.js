const initStateProfile = {
  uri: '',
  type: '',
  name: '',
  isUpload: false,
  profile: {},
  data: {},
  errMsg: '',
  sccMsg: '',
};

const profile = (state = initStateProfile, action) => {
  switch (action.type) {
    case 'SET_IMAGE':
      return {
        ...state,
        uri: action.payload.uri,
        type: action.payload.type,
        name: action.payload.name,
      };
    case 'SET_UPLOAD_STATUS':
      return {
        ...state,
        isUpload: action.payload,
      };
    case 'SET_GET_PROFILE':
      return {
        ...state,
        profile: action.payload,
      };
    case 'SET_UPDATE_USER_PROFILE':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_CHANGE_PASSWORD':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_CHANGE_PASSWORD_FAILED':
      return {
        ...state,
        errMsg: action.payload,
        sccMsg: '',
      };
    case 'SET_CHANGE_PASSWORD_SUCCESS':
      return {
        ...state,
        sccMsg: action.payload,
        errMsg: '',
      };
    default:
      return {
        ...state,
      };
  }
};

export default profile;
