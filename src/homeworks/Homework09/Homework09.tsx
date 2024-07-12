import { useState, ChangeEvent, useEffect } from "react";

import Button from "components/Button/Button";

import { Homewokr09Wrapper, JokeCard, Joke } from "./styles";

function Homework09() {
  const [randomJoke, setRandomJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const getRandomJoke = async () => {
    setError(undefined);
    setRandomJoke(undefined);
    
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const result = await response.json();
    console.log(result)

    if (response.ok) {

      setRandomJoke(`${result.setup} ${result.punchline}`);
    } else {
      setError("Ошибка при получении данных");
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
      </JokeCard>
      <Button type="submit" name="Get new joke" onClick={getRandomJoke}></Button>
    </Homewokr09Wrapper>
  );
}

export default Homework09;
