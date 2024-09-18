import { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import FormattedTime from "./components/FormattedTime/FormattedTime";
import Button from "./components/Button/Buton";

function App() {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 10);
    }, 1))
  };

  const stop = () => {
    clearInterval(timer);
    setTimer(null);
  }
    
  const reset = () => {
    stop();
    setTime(0);
  }

  return (
    <Container>
      <FormattedTime time={time} />
      <Button start={start} stop={stop} reset={reset} />
    </Container>
  );
}

export default App;
