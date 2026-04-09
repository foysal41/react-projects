import React, { use, useEffect, useState } from "react";
import Card from "../ui/Card";
import { HashLoader } from "react-spinners";
import { Link } from "react-router";

// const appsPromise = fetch('/data.json').then((res)=>res.json())
function TrendingApps() {
  // const apps = use(appsPromise)
  // console.log(apps)

  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setTimeout(() => {
        setApps(data);
      setLoading(false);
      }, 2000)
      
    };

    fetchData();
  }, []);

  console.log(apps);
  return (
    <div className="container mx-auto my-15">

      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">Trending apps</h2>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <HashLoader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.slice(0,9).map((app, idx) => (
            <Card app={app} key={idx}></Card>
          ))}
        </div>
      )}


      <div className="text-center mt-4">
        <Link to={"/apps"}>
          <button className="btn bg-purple-500 text-white">View All</button>
        </Link>
      </div>
    </div>
  );
}

export default TrendingApps;
