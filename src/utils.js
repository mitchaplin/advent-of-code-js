export const frequencies = (collection) => collection.reduce((acc, curr) => {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});