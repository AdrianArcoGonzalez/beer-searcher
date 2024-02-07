import { BeerStructure } from "../../interfaces/beersInterfaces";
import CustomImage from "../CustomImage/CustomImage";
import BeerStyled from "./BeerStyled";

interface BeerPropsStructure {
  beer: BeerStructure;
  isSearch?: boolean;
}

const Beer = ({ beer, isSearch }: BeerPropsStructure): JSX.Element => {
  return (
    <BeerStyled>
      <div className="beer_titleImageContainer">
        <h2 className="beer_title">{beer.name}</h2>
        <CustomImage alt={beer.name + "image"} src={beer.image_url} />
      </div>
      <div className="beer_dataContainer">
        {isSearch && (
          <ul className="beer_dataList">
            <li className="beer_tagline" key={beer.first_brewed}>
              <span>First Brewed Date: {beer.first_brewed}</span>
            </li>
            <li className="beer_paringData" key={beer.food_pairing[0]}>
              <span>Ideal for pairing with</span>
              <span>{beer.food_pairing[0]}</span>
            </li>
          </ul>
        )}
        <p className="beer_description">{beer.description}</p>
      </div>
    </BeerStyled>
  );
};

export default Beer;
