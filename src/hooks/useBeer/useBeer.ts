import { useCallback, useState } from "react";
import { BeerStructure } from "../../interfaces/beersInterfaces";
import beerServices from "../../services/beerServices";
import { beerWithNameAndDescription, partialBeer } from "../../utils/BeerUtils";

const useBeer = () => {
  const [isLoadingRandomBeer, setIsLoadingRandomBeer] = useState(false);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);

  const getRandomBeer = useCallback(
    async function getRandomBeer(): Promise<BeerStructure> {
      setIsLoadingRandomBeer(true);
      const { success, data, error } = await beerServices.getRandomBeer();

      if (
        success &&
        data?.image_url &&
        data.name &&
        data.description &&
        !error
      ) {
        setIsLoadingRandomBeer(false);
        return data as BeerStructure;
      } else if (error) {
        setIsLoadingRandomBeer(false);

        return beerWithNameAndDescription;
      } else {
        return getRandomBeer();
      }
    },
    [],
  );
  const getRandomNonAlcoholicBeer = useCallback(
    async function getRandomNonAlcoholicBeer() {
      setIsLoadingRandomBeer(true);
      const { success, data, error } =
        await beerServices.getRandomNonAlcoholicBeer();
      if (
        success &&
        data?.image_url &&
        data.name &&
        data.description &&
        !error
      ) {
        setIsLoadingRandomBeer(false);
        return data as BeerStructure;
      } else if (error) {
        setIsLoadingRandomBeer(false);

        return beerWithNameAndDescription;
      } else {
        return getRandomNonAlcoholicBeer();
      }
    },
    [],
  );

  const searchBeers = useCallback(
    async (
      textToSearch: string,
      type: "brewed" | "name",
      page?: number,
    ): Promise<BeerStructure[]> => {
      setIsLoadingSearch(true);

      const { data, success } = await beerServices.searchBeers(
        textToSearch,
        type,
        page,
      );

      if (success) {
        setIsLoadingSearch(false);

        return data as BeerStructure[];
      }

      setIsLoadingSearch(false);

      return [partialBeer];
    },
    [],
  );

  return {
    isLoadingSearch,
    getRandomNonAlcoholicBeer,
    searchBeers,
    getRandomBeer,
    isLoadingRandomBeer,
  };
};

export default useBeer;
