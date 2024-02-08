import AppStyled from "./AppStyled";
import SearcherBeers from "../SearcherBeers/SearcherBeers";
import RandomBeerSection from "../RandomBeerSection/RandomBeerSection";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <h1 className="title">Beer App</h1>
      <RandomBeerSection />
      <SearcherBeers />
    </AppStyled>
  );
};

export default App;
