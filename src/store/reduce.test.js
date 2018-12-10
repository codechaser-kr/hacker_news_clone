import * as actions from "actions";
import storeFactory from "store";
import { LIST_TYPE } from "constants.js";

describe("reduce", () => {
  const store = storeFactory();
  it("reduce test", async () => {
    const page = 2;
    await store.dispatch(actions.getList(LIST_TYPE.NEWS_LIST, null, page));
    let state = store.getState();
    //console.log(state);
    await store.dispatch(actions.getItem(18626215));
    state = store.getState();
    expect(state.items[18626215].id).toBe(18626215);
  });
});
