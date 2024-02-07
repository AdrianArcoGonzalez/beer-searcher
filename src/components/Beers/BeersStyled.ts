import styled from "styled-components";

const BeersStyled = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px;

  .list {
    &-item {
      width: 100%;
      border-bottom: 1px solid #0005;
      padding-bottom: 20px;
    }

    &__empty {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

export default BeersStyled;
