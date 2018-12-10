import * as actions from "actions";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { LIST_TYPE } from "constants.js";

describe("actions", () => {
  const store = configureMockStore([thunk])();
  it("action.getList() test", async () => {
    let result = await store.dispatch(
      actions.getList(LIST_TYPE.NEWS_LIST, null, 1)
    );
    console.log(result.data);
    result = store.getState();
    console.log(result);
  });
});
