import { createStore, combineReducers, applyMiddleware } from "redux";
import { items, list, user } from "store/reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const stateData = {
  items: {},
  list: [],
  user: {}
};

const logger = createLogger();

const storeFactory = (initialState = stateData) => {
  return applyMiddleware(thunk, logger)(createStore)(
    combineReducers({ items, list, user }),
    initialState
  );
};

/*
function applyMiddleware(...middlewares) {
  return function(createStore) {
    return function(...args) {
      const store = createStore(...args)
      let dispatch = () => {
        throw new Error(
          `Dispatching while constructing your middleware is not allowed. ` +
            `Other middleware would not be applied to this dispatch.`
        )
      }

      const middlewareAPI = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args)
      }
      const chain = middlewares.map(middleware => middleware(middlewareAPI))
      dispatch = compose(...chain)(store.dispatch)

      return {
        ...store,
        dispatch
      }
    }
  }
}
*/

export default storeFactory;
