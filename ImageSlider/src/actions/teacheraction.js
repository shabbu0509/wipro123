import { USERS_DATA_URL, MOVIES_DEATILS_DATA_URL } from "../constants/url_constants";
import { handleUserDataRequest, handleUserDetailsDataRequest } from "../helpers/teacherhelper";

export const getUserData = payload => async (dispatch) => {
    handleUserDataRequest(dispatch, payload, USERS_DATA_URL);
}

export const getUserDetailsData = payload => async (dispatch) => {
    handleUserDetailsDataRequest(dispatch, payload, MOVIES_DEATILS_DATA_URL);
}