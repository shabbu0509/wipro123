import { USERS_DATA, USERS_DETAILS_DATA } from "../constants/action_types";
import api from "../services/appService";
import { setProgressBar } from "../actions/commonactions";
import { persist } from "../../App";
import { navigateBack } from '../helpers'
import { handleExpiry } from "./index";

export const handleUserDataRequest = async (dispatch, payload, url) => {
  try {
    persist.store.dispatch(setProgressBar(true));
    //OR below also correct, progressbar is displaying
    //dispatch(setProgressBar(true));
    const newUrl = url + payload;
    const response = await api(newUrl, "GET", {}, {});
    if (response && response.status === 200) {
      persist.store.dispatch(setProgressBar(false));
      const userData = await response.json();
      if (userData && userData.Search) {
        dispatch({
          type: USERS_DATA,
          payload: userData.Search,
        });
      } else {
        persist.store.dispatch(setProgressBar(false));
        console.log("Unable to fetch faq details 2")
        throw new Error("Unable to fetch faq details 2");
      }
    } else {
      persist.store.dispatch(setProgressBar(false));
      console.log("Unable to fetch faq details 3")
      throw new Error("Unable to fetch faq details 3");
    }
  } catch (e) {
    console.log("Unable to fetch faq details 4 " + e.message)
    persist.store.dispatch(setProgressBar(false));
    console.log(e.message);
  }
}

export const handleUserDetailsDataRequest = async (dispatch, payload, url) => {
  try {
    persist.store.dispatch(setProgressBar(true));
    //OR below also correct, progressbar is displaying
    //dispatch(setProgressBar(true));
    const newUrl = url  + payload;
    const headers = {
    };
    const response = await api(newUrl, "GET", {}, {});
    if (response && response.status === 200) {
      persist.store.dispatch(setProgressBar(false));
      const userDetailsData = await response.json();
      if (userDetailsData) {
        dispatch({
          type: USERS_DETAILS_DATA,
          payload: userDetailsData,
        });
      } else {
        persist.store.dispatch(setProgressBar(false));
        console.log("Unable to fetch faq details 2")
        throw new Error("Unable to fetch faq details");
      }
    } else {
      persist.store.dispatch(setProgressBar(false));
      console.log("Unable to fetch faq details 3")
      throw new Error("Unable to fetch faq details");
    }
  } catch (e) {
    console.log("Unable to fetch faq details 4 " + e.message)
    persist.store.dispatch(setProgressBar(false));
    console.log(e.message);
  }
}


