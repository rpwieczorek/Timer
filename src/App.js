import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Timer from "./components/Timer/Timer";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    let interval = null;
  
    if (isActive === true) {
      //console.log('start');
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);
  
  const startCounting = () => {
    //console.log('kliknąłem start');
    setIsActive(true);
  };
  
  const stopCounting = () => {
    setIsActive(false);
  };
  
  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <Container>
      <Timer time={time} />
      <Button onClick={startCounting}>Start</Button>
      <Button onClick={stopCounting}>Stop</Button>
      <Button onClick={resetTimer}>Reset</Button>
    </Container>
  );
}

export default App;
