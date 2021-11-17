import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  let Hours = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  const [time, setTime] = useState({ hours: Hours, min: min, sec: sec });
  useEffect(() => {
    setInterval(() => {
      Hours = new Date().getHours();
      min = new Date().getMinutes();
      sec = new Date().getSeconds();
      setTime({ hours: Hours, min: min, sec: sec });
    }, 1000);
  }, []);
  let style = {
    display: "flex",
    "justify-content": "space-around",
    "max-width": "400px",
    margin: "0 auto"
  };
  let hstyle = {
    background: "black",
    color: "white",
    padding: "30px"
  };
  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <div style={style}>
        <h1 style={hstyle}>{time.hours}</h1>
        <h1 style={hstyle}>{time.min}</h1>
        <h1 style={hstyle}>{time.sec}</h1>
      </div>
    </div>
  );
}
