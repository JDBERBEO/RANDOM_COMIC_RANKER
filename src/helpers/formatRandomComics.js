export const addSelectedRate = (randomComics) => {
  const newArrayWithSelectedRate = randomComics.map((obj) => ({
    ...obj,
    selectedRating: 0,
  }));

  return newArrayWithSelectedRate;
};

export default {};
