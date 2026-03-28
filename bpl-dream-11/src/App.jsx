import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Homepage/Banner/Banner";
import Navbar from "./components/Homepage/Navbar/Navbar";
import Players from "./components/Homepage/Players/players";
const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players
          playerPromise={playerPromise}
          setCoin={setCoin}
          coin={coin}
        ></Players>
      </Suspense>
    </>
  );
}

export default App;
