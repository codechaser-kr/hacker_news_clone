import axios from "axios";
import { CONST, CONFIG } from "constants.js";

function fetchList(type, search) {
  const qs = search ? "?print=" + search : "";
  return axios.get(`https://hacker-news.firebaseio.com/v0/${type}.json` + qs);
}
function fetchItem(id) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
}
function fetchUser(id) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
}

export const getList = (type, page = 1, search = "") => async dispatch => {
  try {
    const response = await fetchList(type, search);
    const data = response.data.filter(
      (element, index) =>
        (page - 1) * CONFIG.PAGE_SIZE < index &&
        index <= page * CONFIG.PAGE_SIZE
    );
    dispatch({
      type: CONST.FETCH_LIST,
      data
    });
  } catch (e) {
    console.log(e);
  }
};

// export const getListItem = id => async dispatch => {
//   try {
//     const response = await fetchItem(id);
//     const data = response.data;
//     dispatch({ type: CONST.FETCH_LIST_ITEM, data });
//   } catch (e) {
//     console.log(e);
//   }
// };

export const getUser = id => async dispatch => {
  try {
    const response = await fetchUser(id);
    const data = response.data;
    dispatch({ type: CONST.FETCH_USER, data });
  } catch (e) {
    console.log(e);
  }
};

export const getItem = id => async dispatch => {
  try {
    const response = await fetchItem(id);
    const data = response.data;
    dispatch({ type: CONST.FETCH_ITEM, data });
  } catch (e) {
    console.log(e);
  }
};

export const toggleItem = id => dispatch => {
  console.log("toggleItem", id);
  dispatch({ type: CONST.TOGGLE_ITEM, id });
};
