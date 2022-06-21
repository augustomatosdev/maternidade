import { SET_PATIENTS } from "../actions/patients";

const initialState = {
  patients: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PATIENTS:
      return {
        ...state,
        patients: action.payload,
      };

    default:
      return state;
  }
}
