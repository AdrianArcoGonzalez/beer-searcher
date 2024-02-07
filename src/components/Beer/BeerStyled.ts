import styled from "styled-components";

const BeerStyled = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 800px) {
    height: 200px;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .beer {
    &_titleImageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      width: 200px;

      @media (min-width: 800px) {
        flex-direction: row;
        justify-content: flex-start;
      }
    }

    &_dataList {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 100%;

      @media (min-width: 800px) {
        align-items: flex-start;
      }
    }

    &_paringData {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: start;

      @media (min-width: 800px) {
        flex-direction: row;
        justify-content: flex-start;
        gap: 5px;
      }
    }

    &_dataContainer {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      flex-direction: column;
      gap: 10px;
    }

    &_title {
      font-size: 1.2rem;

      @media (min-width: 800px) {
        width: 100px;
        text-align: left;
      }
    }

    &_description {
      width: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;

      @media (min-width: 800px) {
        justify-content: flex-start;
        text-align: start;
      }
    }
  }
`;

export default BeerStyled;
