import AppStyled from "./AppStyled";
import RandomBeerSection from "../RandomBeerSection/RandomBeerSection";
import SearcherBeers from "../SearcherBeers/SearcherBeers";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <RandomBeerSection />
      <SearcherBeers />
    </AppStyled>
  );
};

export default App;
