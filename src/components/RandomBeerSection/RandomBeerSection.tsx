import { useEffect, useState, useCallback } from "react";
import Beer from "../Beer/Beer";
import RandomBeerSectionStyled from "./RandomBeerSectionStyled";
import useBeer from "../../hooks/useBeer/useBeer";
import { BeerStructure } from "../../interfaces/beersInterfaces";
import Button from "../Button/Button";
import BeerSkeleton from "../BeerSkeleton/BeerSkeleton";

const RandomBeerSection = () => {
  const { getRandomBeer, isLoadingRandomBeer, getRandomNonAlcoholicBeer } =
    useBeer();

  const [beer, setBeer] = useState({} as BeerStructure);

  const handleGetRandomBeer = useCallback(async () => {
    const beer = await getRandomBeer();
    setBeer(beer);
  }, [getRandomBeer]);

  const handleGetNonAlcoholicBeer = useCallback(async () => {
    const beer = await getRandomNonAlcoholicBeer();
    setBeer(beer);
  }, [getRandomNonAlcoholicBeer]);

  useEffect(() => {
    handleGetRandomBeer();
  }, [handleGetRandomBeer]);

  return (
    <RandomBeerSectionStyled>
      {isLoadingRandomBeer ? <BeerSkeleton /> : <Beer beer={beer} />}

      <Button
        action={handleGetRandomBeer}
        text="Another Beer"
        disabled={isLoadingRandomBeer}
      />

      <Button
        disabled={isLoadingRandomBeer}
        action={handleGetNonAlcoholicBeer}
        text="Random non alcoholic beer"
      />
    </RandomBeerSectionStyled>
  );
};

export default RandomBeerSection;
