export const SET_AUTHENTICATED = "set_authenticated";
export const SET_CREDENTIALS = "set_credentials";

export const setAuthenticated = (payload) => ({
  type: SET_AUTHENTICATED,
  payload,
});

export const setCredentials = (payload) => ({
  type: SET_CREDENTIALS,
  payload,
});
