export const SET_CURRENT_ARCHIVE = "set_current_archive";
export const SET_GENERAL_ARCHIVE = "set_general_archive";

export const setCurrentArchive = (payload) => ({
  type: SET_CURRENT_ARCHIVE,
  payload,
});
export const setGeneralArchive = (payload) => ({
  type: SET_GENERAL_ARCHIVE,
  payload,
});
