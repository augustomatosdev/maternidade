import { SET_SETTINGS } from "../actions/settings";

const initialState = {
  docTypes: [],
  offices: [],
  regNum: {},
  regTypes: [],
  tags: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
