import { useCallback, useEffect, useState } from "react";
import SearcherBeersStyled from "./SearcherBeersStyled";
import { BeerStructure } from "../../interfaces/beersInterfaces";
import useBeer from "../../hooks/useBeer/useBeer";
import Beers from "../Beers/Beers";
import Pagination from "../Pagination/Pagination";
import BeerSkeleton from "../BeerSkeleton/BeerSkeleton";
import usePagination from "../../hooks/usePagination/usePagination";

const SearcherBeers = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [findBy, setFindBy] = useState<"name" | "brewed">("name");
  const [beersFound, setBeersFound] = useState<BeerStructure[]>([]);
  const { searchBeers, isLoadingSearch } = useBeer();
  const { handleDown, handleUp, page, setPage } = usePagination();
  const skeletonArray = Array.from({ length: 10 }, (_, i) => i);
  const [error, setError] = useState<string>("");

  const isValidSearchString = (searchText: string): boolean => {
    const regex = /^[a-zA-Z0-9\- ]+$/;

    if (regex.test(searchText)) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText("");
    setFindBy(event.target.value as "name" | "brewed");
  };

  const handleSearch = useCallback(
    async (textToSearch: string, findBy: "name" | "brewed", page: number) => {
      if (!isValidSearchString(textToSearch)) {
        setError("Invalid search string");
        setBeersFound([]);
      }
      const beers = await searchBeers(textToSearch, findBy, page);

      setBeersFound(beers);
    },
    [searchBeers],
  );

  useEffect(() => {
    handleSearch(searchText, findBy, page);
  }, [searchText, findBy, handleSearch, page]);

  useEffect(() => {
    setPage(1);
    setError("");
  }, [searchText, setPage, findBy]);

  return (
    <SearcherBeersStyled>
      <form className="searchBeersForm">
        <div className="form__InputsContainer">
          <input
            className={!error ? "form__input_text" : "form__input_text__error"}
            type="text"
            placeholder={
              findBy === "brewed" ? "Use this format mm/yyyy" : "Search beers"
            }
            onChange={(e) => handleChange(e)}
            value={searchText}
          />
          <div className="form__radioInputsContainer">
            <label htmlFor="name" className="form__inputLabel">
              <input
                id="name"
                type="radio"
                placeholder="Search beers"
                onChange={(e) => handleChangeRadio(e)}
                value={"name"}
                checked={findBy === "name"}
                style={{ height: "20px", width: "20px" }}
              />
              by name
            </label>
            <label htmlFor="brewed" className="form__inputLabel">
              <input
                id="brewed"
                type="radio"
                placeholder="Search beers"
                onChange={(e) => handleChangeRadio(e)}
                value={"brewed"}
                checked={findBy === "brewed"}
                style={{ height: "20px", width: "20px" }}
              />
              by brewed
            </label>
          </div>
        </div>
      </form>
      {error && <span className="form__error">{error}</span>}
      <h3
        style={{
          width: "100%",
          borderBottom: "1px solid black",
          paddingBottom: "10px",
        }}
      >
        Our beers
      </h3>
      {isLoadingSearch ? (
        skeletonArray.map((skeleton: number) => <BeerSkeleton key={skeleton} />)
      ) : (
        <Beers beers={beersFound} />
      )}
      <Pagination
        previousPageAction={() => handleDown(page)}
        page={page}
        nextPageAction={() => handleUp(page, beersFound)}
        previousDisabled={page === 1}
        nextDisabled={beersFound.length < 10}
      />
    </SearcherBeersStyled>
  );
};

export default SearcherBeers;
