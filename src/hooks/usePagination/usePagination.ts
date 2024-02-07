import { useState } from "react";
import { BeerStructure } from "../../interfaces/beersInterfaces";

const usePagination = () => {
  const [page, setPage] = useState(1);

  const handleUp = (page: number, beersFound: BeerStructure[]) => {
    if (beersFound.length === 0 || beersFound.length < 10) {
      return;
    }
    setPage(page + 1);
  };

  const handleDown = (page: number) => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  return { handleUp, handleDown, page, setPage };
};

export default usePagination;
