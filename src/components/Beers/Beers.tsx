import { BeerStructure } from "../../interfaces/beersInterfaces";
import Beer from "../Beer/Beer";
import BeersStyled from "./BeersStyled";

interface BeersPropsStructure {
  beers: BeerStructure[];
}

const Beers = ({ beers }: BeersPropsStructure) => {
  return (
    <BeersStyled>
      {beers.length > 0 ? (
        beers.map((beer) => (
          <li key={beer.id} className="list-item">
            <Beer beer={beer} isSearch />
          </li>
        ))
      ) : (
        <span className="list__empty">No Beers Found</span>
      )}
    </BeersStyled>
  );
};

export default Beers;
