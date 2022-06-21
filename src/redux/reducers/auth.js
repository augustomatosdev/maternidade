import { SET_AUTHENTICATED, SET_CREDENTIALS } from "../actions/auth";

const initialState = {
  credentials: {},
  followingDocs: [],
  isAuthenticated: false,
  permissions: "",
  credentials: {},
  comments: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };

    case SET_CREDENTIALS:
      return {
        ...state,
        credentials: action.payload,
      };

    default:
      return state;
  }
}
