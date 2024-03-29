import { BeerStructure } from "../interfaces/beersInterfaces";

export const beerWithNameAndDescription = {
  id: 0,
  name: "Ups!",
  description: "We couldn't find a beer, try again!",
} as BeerStructure;

export const partialBeer = {
  name: "Ups!",
  description: "We couldn't find a beer, try again!",
  abv: 0,
  first_brewed: "none",
  food_pairing: ["none"],
  id: 0,
} as BeerStructure;

export const beerWithNameImageAndDescription = {
  id: 0,
  name: "Ups!",
  description: "We couldn't find a beer, try again!",
  image_url: "test",
} as BeerStructure;
