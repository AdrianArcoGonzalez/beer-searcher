import AppStyled from "./AppStyled";
import SearcherBeers from "../SearcherBeers/SearcherBeers";
import RandomBeerSection from "../RandomBeerSection/RandomBeerSection";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <RandomBeerSection />
      <SearcherBeers />
    </AppStyled>
  );
};

export default App;
