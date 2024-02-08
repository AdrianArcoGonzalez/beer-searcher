import { useState } from "react";

const usePagination = () => {
  const [page, setPage] = useState(1);

  const handleUp = (page: number) => {
    setPage(page + 1);
  };

  const handleDown = (page: number) => {
    setPage(page - 1);
  };

  return { handleUp, handleDown, page, setPage };
};

export default usePagination;
