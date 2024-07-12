import styled from "@emotion/styled";
import { colors } from 'styles/colors';

interface StyledButtonProps {
  $isRed?: boolean;
}

const getButtonColor = (disbled: boolean | undefined, isRed: boolean | undefined) => {
  if (disbled) {
    return "grey";
  } else if (isRed) {
    return colors.ERROR;
  } else {
    return "#8B7B8B";
  }
};

export const StyledButton = styled("button")<StyledButtonProps>`
  height: 70px;
  width: 200px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  background-color: ${({ disabled, $isRed }) =>
    getButtonColor(disabled, $isRed)
    };
  cursor: ${({disabled}) => disabled ? "not-allowed" : "pointer"};
`;

export const ButtonImg = styled("img")`
  width: 20px;
  height: 20px;
`;