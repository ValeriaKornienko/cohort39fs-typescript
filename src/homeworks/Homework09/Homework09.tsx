import { useState, ChangeEvent, useEffect } from "react";

import Button from "components/Button/Button";

import { Homewokr09Wrapper, JokeCard, Joke } from "./styles";

function Homework09() {
  {
    /*const [searchRandomJokeValue, setSearchRandomJokeValue] =
    useState<string>("");
 

  const onClick = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchRandomJokeValue(event.target.value);
  };*/
  }
  const [randomJoke, setRandomJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const getRandomJoke = async () => {
    setError(undefined);
    setRandomJoke(undefined);

    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log(response);

    const result = await response.json();

    console.log(result);

    if (response.ok) {
      // Действия по отображению данных на странице
      setRandomJoke(result.setup);
    } else {
      // Действия по отображению ошибки на странице
      setError("Error message during random joke request");
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <Homewokr09Wrapper>
      <JokeCard>
        {randomJoke && <Joke>{randomJoke}</Joke>}
        {error && <Joke>{error}</Joke>}
        <Joke></Joke>
      </JokeCard>
      <Button type="submit" name="Get new joke" onClick={getRandomJoke}></Button>
    </Homewokr09Wrapper>
  );
}

export default Homework09;
