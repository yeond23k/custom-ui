import React, { useState, useEffect } from "react";

const Timer = ({ start, time, callback }) => {
  const [min, setMin] = useState(parseInt(time / 60));
  const [sec, setSec] = useState(time % 60);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1);
      }

      if (sec === 0) {
        if (min === 0) {
          callback();
          clearInterval(countdown);
        } else {
          setSec(59);
          setMin(min - 1);
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [min, sec]);

  return <span>{`${min}:${sec < 10 ? `0${sec}` : sec}`}</span>;
};

export default Timer;
