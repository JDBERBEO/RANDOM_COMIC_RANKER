/* eslint-disable object-curly-newline */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render } from "@testing-library/vue";
import { name as nameRandomComics, module as moduleRandomComics } from "@/store/modules/comics";
import HomeView from "@/views/HomeView.vue";

jest.mock("@/api/comicsApi.js", () => require("../__mocks__/comics/comicsApi"));

describe("integration tests for HomeView Component", () => {
  beforeEach(() => {
    cleanup();
  });

  const configTest = () => {
    const myStore = {
      modules: {
        [nameRandomComics]: moduleRandomComics,
      },
    };

    return render(HomeView, { store: myStore });
  };

  it("should render carousel", async () => {
    const { queryByTestId, findByTestId } = configTest();
    const HomeViewContainer = queryByTestId("HomeViewContainer");
    const carousel = await findByTestId("carousel");

    expect(HomeViewContainer).toBeInTheDocument();
    expect(carousel).toBeInTheDocument();
  });

  it("should change current comic", async () => {
    const { queryByTestId, findByTestId, findByText } = configTest();
    const HomeViewContainer = queryByTestId("HomeViewContainer");
    const carousel = await findByTestId("carousel");
    const nextButton = await findByTestId("nextButton");
    await fireEvent.click(nextButton);
    const secondComic = await findByText("COMIC NO.2");
    expect(HomeViewContainer).toBeInTheDocument();
    expect(carousel).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(secondComic).toBeInTheDocument();
  });

  it("should rate a comic", async () => {
    const { queryByTestId, findByTestId, findAllByTestId, findByText } = configTest();
    const HomeViewContainer = queryByTestId("HomeViewContainer");
    const carousel = await findByTestId("carousel");
    const star = await findAllByTestId("star");
    await fireEvent.click(star[0]);
    const comicRated = await findByText(/comics rated: 1 \/ 10/i);
    expect(HomeViewContainer).toBeInTheDocument();
    expect(carousel).toBeInTheDocument();
    expect(comicRated).toBeInTheDocument();
  });
});
