import ButtonStyled from "./ButtonStyled";

interface ButtonPropsStructure {
  text: string;
  action: () => void;
  disabled?: boolean;
}

const Button = ({ action, text, disabled = false }: ButtonPropsStructure) => {
  return (
    <ButtonStyled onClick={action} disabled={disabled} about={text + "button"}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
