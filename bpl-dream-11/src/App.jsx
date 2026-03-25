import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Homepage/Banner/Banner";
import Navbar from "./components/Homepage/Navbar/Navbar";
import Players from "./components/Homepage/Players/Players";
const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayer();
  console.log(playerPromise);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players playerPromise={playerPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;
