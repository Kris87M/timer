import { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import FormattedTime from "./components/FormattedTime/FormattedTime";
import Button from "./components/Button/Buton";

const App = () => {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(null)

  useEffect(() => {
    let timer;
    if (start) {
      timer = setInterval(() => { setTime(prevValue => prevValue + 10) }, 10);
    }
      return () => {
        if(timer) clearInterval(timer);
      }
    }, [start]
  )

  return (
    <Container>
      <FormattedTime time={time} />
      <Button  start={setStart} setTime={setTime} />
    </Container>
  );
}

export default App;
