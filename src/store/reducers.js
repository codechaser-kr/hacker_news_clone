import { CONST } from "constants.js";

export const items = (state = {}, action) => {
  const { type, data, id } = action;
  let copy = null;
  switch (type) {
    case CONST.FETCH_ITEM:
      copy = Object.assign({}, state);
      copy[data.id] = data;
      copy[data.id].isopen = true;
      return copy;
    case CONST.TOGGLE_ITEM:
      copy = Object.assign({}, state);
      copy[id].isopen = !copy[id].isopen;
      // console.log(state);
      // console.log("state id", copy.id);
      // console.log("toggle id", id);
      return copy;
    default:
      return state;
  }
};

export const list = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case CONST.FETCH_LIST:
      return data;
    default:
      return state;
  }
};

export const user = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case CONST.FETCH_USER:
      return data;
    default:
      return state;
  }
};

export const item = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case CONST.FETCH_ITEM:
      return data;
    default:
      return state;
  }
};
