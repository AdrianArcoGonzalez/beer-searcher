import styled from "styled-components";

const SearcherBeersStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;

  .searchBeersForm {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form__InputsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;

    @media (min-width: 800px) {
      flex-direction: row;
    }
  }
  .form {
    &__input {
      &_radio {
        height: 20px;
        width: 20px;
        margin-right: 10px;
      }

      &_text {
        padding: 10px;
        border: 1px solid black;

        &__error {
          padding: 10px;
          border: 1px solid red;
        }
      }
    }

    &__ &__inputLabel {
      gap: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
    }

    &__radioInputsContainer {
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
    }

    &__error {
      color: red;
      font-weight: bold;
    }
  }
`;

export default SearcherBeersStyled;
