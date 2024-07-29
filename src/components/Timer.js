import { useEffect, useState } from "react";
import Clock from "react-clock";

function Timer() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    console.log("kk", value);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatTime() {
    let hours = value.getHours();
    let minutes = value.getMinutes();
    let seconds = value.getSeconds();

    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)} : ${padZero(minutes)}:${seconds} ${padZero(
      meridian
    )}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <div>
      <p style={{ color: "white", paddingRight: "10px" }}>
        Current time:{formatTime()}
      </p>
      {/* <Clock value={value} /> */}
    </div>
  );
}

export default Timer;
