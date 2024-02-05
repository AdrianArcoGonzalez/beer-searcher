import { useCallback, useState } from "react";
import { BeerStructure } from "../../interfaces/beersInterfaces";
import beerServices from "../../services/beerServices";

const useBeer = () => {
  const [isLoadingRandomBeer, setIsLoadingRandomBeer] = useState(false);
  const getBeers = async (): Promise<BeerStructure[] | string> => {
    const { success, data } = await beerServices.getBeers();

    if (success) {
      return data as BeerStructure[];
    }

    return [];
  };

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
        return {} as BeerStructure;
      } else {
        return getRandomBeer();
      }
    },
    [],
  );

  return {
    getRandomBeer,
    getBeers,
    isLoadingRandomBeer,
  };
};

export default useBeer;
