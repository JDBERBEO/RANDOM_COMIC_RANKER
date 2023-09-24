/* eslint-disable import/extensions */
import { actions } from "@/store/modules/comics/actions";
import ComicsApi from "@/api/ComicsApi";
import { types } from "@/store/modules/comics/types";
import selectedRateArray from "../../../__mocks__/comics/selectedRateArray";

// eslint-disable-next-line global-require
jest.mock("@/api/ComicsApi.js", () => require("../../../__mocks__/comics/comicsApi"));

describe("test actions in comics module", () => {
  // eslint-disable-next-line no-unused-vars
  let commit = jest.fn();

  afterEach(() => {
    commit = jest.fn();
    jest.clearAllMocks();
  });

  it("should get random comics", async () => {
    jest.spyOn(ComicsApi, "getRandomComics");
    await actions[types.actions.FETCH_RANDOM_COMICS]({ commit });
    expect(commit).toBeCalledWith(types.mutations.SET_IS_LOADING, true);
    expect(ComicsApi.getRandomComics).toBeCalledWith();
    expect(commit).toBeCalledWith(types.mutations.SET_RANDOM_COMICS, selectedRateArray);
    expect(commit).toBeCalledWith(types.mutations.SET_CURRENT_COMIC, selectedRateArray[0]);
    expect(commit).toBeCalledWith(types.mutations.SET_IS_LOADING, false);
  });

  it("should fail getting random comics", async () => {
    jest.spyOn(ComicsApi, "getRandomComics").mockRejectedValue("err");
    await actions[types.actions.FETCH_RANDOM_COMICS]({ commit });
    expect(commit).toBeCalledWith(types.mutations.SET_IS_LOADING, true);
    expect(ComicsApi.getRandomComics()).rejects.toEqual("err");
    expect(commit).toBeCalledWith(types.mutations.SET_IS_LOADING, false);
    expect(commit).toBeCalledWith(types.mutations.SET_ERROR, true);
  });

  it("should update error comics", async () => {
    await actions[types.actions.UPDATE_ERROR_COMICS]({ commit }, true);
    expect(commit).toBeCalledWith(types.mutations.SET_ERROR, true);
  });

  it("should update selected rating", async () => {
    const result = 1;
    await actions[types.actions.UPDATE_SELECTED_RATING]({ commit }, 1);
    expect(commit).toBeCalledWith(types.mutations.SET_SELECTED_RATING, result);
  });

  it("should current comic", async () => {
    await actions[types.actions.UPDATE_CURRENT_COMIC]({ commit }, selectedRateArray[0]);
    expect(commit).toBeCalledWith(types.mutations.SET_CURRENT_COMIC, selectedRateArray[0]);
  });
});
