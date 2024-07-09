import { useState } from "react";

import SimponsCard from "components/SimpsonsCard/SimpsonsCard";
import LoginForm from "components/LoginForm/LoginForm";
import Feedback from "components/Feedback/Feedback";

import "./styles.css";

function Homework07() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const onLike = (): void => {
    setLike((prevValue) => prevValue + 1);
  };

  const onDislike = (): void => {
    setDislike((prevValue) => prevValue + 1);
  };
  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="page-wrapper">
      <SimponsCard
        avatar="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
        firstName="Homer"
        lastName="Simpson"
        job="Nuclear Safety Inspector"
        hobby="beer Duff"
      />
      <Feedback like={like} onLike={onLike} dislike={dislike} onDislike={onDislike} resetResults={resetResults} />
      <LoginForm />
    </div>
  );
}

export default Homework07;
