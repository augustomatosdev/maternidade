import { SET_CURRENT_ARCHIVE, SET_GENERAL_ARCHIVE } from "../actions/documents";

const initialState = {
  current: [],
  general: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_ARCHIVE:
      return {
        ...state,
        current: action.payload,
      };

    case SET_GENERAL_ARCHIVE:
      return {
        ...state,
        general: action.payload,
      };

    default:
      return state;
  }
}
