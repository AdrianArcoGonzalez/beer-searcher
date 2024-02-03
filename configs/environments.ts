const environments = {
  baseUrl: process.env.VITE_API_URL as string,
};

export const apiEndPoints = {
  getBeers: "/beers",
  getRandomBeer: "/beers/random",
};

export default environments;
