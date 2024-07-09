import Button from "components/Button/Button";
import { Box1, ButtonControl, Lesson08Wrapper } from "./styles";

function Lesson08() {
  let isBlack = true;
  return (
    <Lesson08Wrapper>
      <ButtonControl>
        <Button
          disabled={true}
          type="submit"
          name="Send"
          onClick={() => {
            console.log("This button works");
          }}
        />
      </ButtonControl>
      <Box1>Box1</Box1>
    </Lesson08Wrapper>
  );
}

export default Lesson08;
