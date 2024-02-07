import styled from "styled-components";

const RandomBeerSectionStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 1px solid #000;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1280px;

  @media (min-width: 800px) {
    min-height: 300px;
    flex-direction: row;
  }

  .skeleton-container__mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;

    @media (min-width: 800px) {
      display: none;
    }
  }
  .skeleton-container__desktop {
    display: none;

    @media (min-width: 800px) {
      display: flex;
      justify-content: flex-start;
      gap: 50px;
      align-items: center;
      width: 100%;
    }
  }
`;

export default RandomBeerSectionStyled;
