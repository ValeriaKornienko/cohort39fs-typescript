import {useState} from "react";
import {StyledCounter, ButtonControl, StyledCount} from "./styles";
import Button from "../Button/Button";

function Counter() {
  const [count, setCount] = useState<number>(0);
  console.log(count);
  console.log(setCount);

  const onPlus = (): void => {
    setCount((prevValue: number) => {return prevValue + 1});
  };
  const onMinus = (): void => {
    setCount((prevValue: number) => {return prevValue - 1});
  }
  return (
    <StyledCounter>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <StyledCount>{count}</StyledCount>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
    </StyledCounter>
  );
}

export default Counter;