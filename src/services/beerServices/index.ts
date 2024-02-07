import {
  getRandomBeerService,
  searchBeersService,
  getRandomNonAlcoholicBeerService,
} from "./beerService";

const beerServices = {
  getRandomBeer: getRandomBeerService,
  getRandomNonAlcoholicBeer: getRandomNonAlcoholicBeerService,
  searchBeers: searchBeersService,
};

export default beerServices;
