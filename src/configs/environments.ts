const environments = {
  baseUrl: process.env.VITE_API_URL as string,
};

const createSearchQuery = (
  text: string,
  type: "brewed" | "name",
  page?: number,
) => {
  const baseEndpoint = "/beers";
  const searchType = type === "brewed" ? "?brewed_before=" : "?beer_name=";
  const pagination = page ? `&page=${page}&per_page=10` : "";
  const paginationWithoutText = `?page=${page}&per_page=10`;

  if (text.length > 0) {
    return baseEndpoint + searchType + text + pagination;
  }
  return baseEndpoint + paginationWithoutText;
};

export const apiEndPoints = {
  getRandomBeer: "/beers/random",
  getRandomNonAlcoholicBeer: "/beers?abv_lt=1",
  searchBeers: createSearchQuery,
};

export default environments;
