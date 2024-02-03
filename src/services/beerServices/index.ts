import { getBeersService, getRandomBeerService } from "./beerService";

const beerServices = {
  getBeers: getBeersService,
  getRandomBeer: getRandomBeerService,
};

export default beerServices;
