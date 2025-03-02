import styled from "@emotion/styled";

export const StyledFeedbackWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 600px;
  height: fit-content;
  border: 1px solid white;
  border-radius: 10px;
  padding: 30px;
  background-color: rgb(26, 35, 53);
  color: white;
`;

export const FeedbackControl = styled("div")`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
export const StyledButtonWithCount = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
export const StyledFeedbackCount = styled("p")`
  font-size: 40px;
  color: white;
`;
export const Image = styled("img")`
  width: 100%;
  height: 100%;
`;
export const ImageControl = styled("div")`
  width: 70px;
  height: 70px;
  cursor: pointer;
`;
