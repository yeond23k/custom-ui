import React, { useState, useEffect } from "react";
import Timer from "../components/Timer";

const Home = () => {
  const [timer, setTimer] = useState(false);
  return (
    <>
      <h2>HOME</h2>
      <div>
        <h4>Timer</h4>
        <button onClick={() => setTimer(false)}>stop</button>
        <div>
          <input disabled={!timer} />
          <button disabled={timer} onClick={() => setTimer(true)}>
            인증번호 요청
          </button>
          {timer && <button>제출</button>}
        </div>
        {timer && (
          <div>
            제한시간 :{" "}
            <Timer start={timer} time={180} callback={() => setTimer(false)} />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
