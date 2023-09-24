import { mutations } from "@/store/modules/comics/mutations";
import { state } from "@/store/modules/comics/state";
import { types } from "@/store/modules/comics/types";
import getRandomComics from "../../../__mocks__/comics/getRandomComics";
import selectedRateArray from "../../../__mocks__/comics/selectedRateArray";

describe("test mutations in comics module", () => {
  it("should update random comics", () => {
    const payload = getRandomComics;
    mutations[types.mutations.SET_RANDOM_COMICS](state, payload);
    expect(state.randomComics).toStrictEqual(payload);
  });
  it("should update loading", () => {
    const payload = true;
    mutations[types.mutations.SET_IS_LOADING](state, payload);
    expect(state.isLoading).toStrictEqual(payload);
  });
  it("should update error", () => {
    const payload = true;
    mutations[types.mutations.SET_ERROR](state, payload);
    expect(state.error).toStrictEqual(payload);
  });
  it("should update select rating", () => {
    const payload = 5;
    mutations[types.mutations.SET_SELECTED_RATING](state, payload);
    expect(state.selectedRating).toStrictEqual(payload);
  });
  it("should update current comic", () => {
    const payload = selectedRateArray[0];
    mutations[types.mutations.SET_SELECTED_RATING](state, payload);
    expect(state.selectedRating).toStrictEqual(payload);
  });
});
