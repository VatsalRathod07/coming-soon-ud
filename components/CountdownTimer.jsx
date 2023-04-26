// import React, { useState, useEffect } from "react";

// const CountdownTimer = () => {
//   const [timeLeft, setTimeLeft] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const end = new Date("2023-05-05T07:00:00Z"); // replace with your end time
//       const now = new Date();
//       const diff = end.getTime() - now.getTime();

//       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//       setTimeLeft(`${days}d  ${hours}h  ${minutes}m  ${seconds}s`);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <div className="text-2xl font-semibold uppercase">{timeLeft}</div>;
// };

// export default CountdownTimer;

import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [isBlack, setIsBlack] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const end = new Date("2023-05-01T12:00:00Z"); // replace with your end time
      const now = new Date();
      const diff = end.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlack((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-30">
      <div
        // className={`${
        //   isBlack ? "bg-black  text-white" : "bg-white text-black"
        // } font-bold text-4xl p-4 rounded-md transform duration-500 ease-in-out`}
        className="font-bold text-4xl text-black"
      >
        {timeLeft}
      </div>
    </div>
  );
};

export default Timer;
