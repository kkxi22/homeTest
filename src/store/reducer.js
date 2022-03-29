import {
  CHANGE_MODAL_STATUS,
  CHANGE_SUCCESS_MODAL_STATUS,
  POST_FORM_DATA,
  LOADING,
  ERROR_MESSAGE,
} from "./constants.js";

const defaultState = {
  modalStatus: false,
  sucModalStatus: false,
  submitStatus: "",
  loading: true,
  errMessage: "",
  banners: [],
  recommends: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_MODAL_STATUS:
      return { ...state, modalStatus: action.palyload };
    case CHANGE_SUCCESS_MODAL_STATUS:
      return { ...state, sucModalStatus: action.palyload };
    case POST_FORM_DATA:
      return { ...state, submitStatus: action.palyload };
    case LOADING:
      return { ...state, loading: action.palyload };
    case ERROR_MESSAGE:
      return { ...state, errMessage: action.palyload };
    default:
      return state;
  }
}

export default reducer;
