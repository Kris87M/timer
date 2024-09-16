import { useState } from "react";
import Container from "./components/Container/Container";
import FormattedTime from "./components/FormattedTime/FormattedTime";
import Button from "./components/Button/Buton";

function App() {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(null);

  return (
    <Container>
      <FormattedTime time={time} />
      <Button />
    </Container>
  );
}

export default App;
