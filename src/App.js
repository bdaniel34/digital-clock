// import { useState } from "react";
// import "./App.css";  
                                    
// function App() {                       //WITHOUT USEEFFECT ONLY USESTATE
//   const [first, setfirst] = useState(new Date());

//   function hh() {
//     setfirst(new Date());
//   }
//   const whatever = setInterval(function () {
//     hh();
//     clearInterval(whatever);
//   }, 1000);

//   return (
//     <div className="App">
//       <h1>
//         {first.toLocaleString("en-US", { timeZone: "Europe/Madrid" })}
//       </h1>
//     </div>
//   );
// }

// export default App;

// //concepts use here:setinteval ,useeffect and responsive design
import { useState, useEffect } from "react";
import "./App.css";
function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="size">
      <div className="row">
        <div className="col-sm" id="color">
          NEW YORK
          <br />
          {date.toLocaleTimeString("en-US", { timeZone: "America/New_york" })}<br />
          {date.toLocaleDateString("en-US", { timeZone: "America/New_york" })}
        </div>
        <div className="col-sm" id="color">
          MADRID
          <br />
          {date.toLocaleTimeString("en-US", { timeZone: "Europe/Paris" })}<br />
          {date.toLocaleDateString("en-US", { timeZone: "Europe/Paris" })}
        </div>
        <div className="col-sm" id="color">
          TOKYO
          <br />
          {date.toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo" })}<br />
          {date.toLocaleDateString("en-US", { timeZone: "Asia/Tokyo" })}
        </div>
        <div className="col-sm" id="color">
          SYDNEY
          <br />
          {date.toLocaleTimeString("en-US", { timeZone: "Australia/Sydney" })}<br />
          {date.toLocaleDateString("en-US", { timeZone: "Australia/Sydney" })}
        </div>
        <div className="col-sm" id="color">
          LOS ANGELES
          <br />
          {date.toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles" })}<br />
          {date.toLocaleDateString("en-US", { timeZone: "America/Los_Angeles" })}
        </div>
      </div>
    </div>
  );
}
export default Clock;
 
 