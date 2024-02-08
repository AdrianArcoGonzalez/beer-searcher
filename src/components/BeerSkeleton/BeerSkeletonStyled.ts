import styled from "styled-components";

const BeerSkeletonStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: 800px) {
    width: 100%;
    flex-direction: row;
  }

  .skeleton-container__mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (min-width: 800px) {
      display: none;
    }
  }

  .skeleton-container__desktop {
    display: none;

    @media (min-width: 800px) {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      gap: 50px;
    }
  }
`;

export default BeerSkeletonStyled;
