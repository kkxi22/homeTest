import { message } from "antd";

import {
  CHANGE_MODAL_STATUS,
  CHANGE_SUCCESS_MODAL_STATUS,
  POST_FORM_DATA,
  LOADING,
  ERROR_MESSAGE,
} from "./constants.js";

import { postFormData } from "@/services/home";

// action Types
export const changeModalStatus = (palyload) => ({
  type: CHANGE_MODAL_STATUS,
  palyload,
});

export const changeSucModalStatus = (palyload) => ({
  type: CHANGE_SUCCESS_MODAL_STATUS,
  palyload,
});

export const setLoading = (palyload) => ({
  type: LOADING,
  palyload,
});

export const setErrorMessage = (palyload) => ({
  type: ERROR_MESSAGE,
  palyload,
});

export const postFormDataType = (palyload) => ({
  type: POST_FORM_DATA,
  palyload,
});

// redux-thunk action function
export const postFormDataAction = (data) => {
  return (dispatch) => {
    postFormData(data)
      .then((res) => {
        dispatch(postFormDataType(res));
        dispatch(setLoading(false));
        if (res === "Registered") {
          dispatch(changeSucModalStatus(true));
          dispatch(changeModalStatus(false));
        }
      })
      .catch((err) => {
        message.error(err.message);
        dispatch(setErrorMessage(err.message));
      });
  };
};
