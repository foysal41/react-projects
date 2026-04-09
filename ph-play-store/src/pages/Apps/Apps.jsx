import React, { useEffect, useState } from 'react'
import { HashLoader } from "react-spinners";

import { Link } from "react-router";
import Card from '../../components/ui/Card';
import useApps from '../../hooks/useApps';

export default function Apps() {


  const {apps, loading} = useApps()

  return (
    <div>
      <div className="container mx-auto my-15">

        <h2 className="font-bold text-4xl">Trending apps</h2>
   

      {loading ? (
        <div className="flex justify-center items-center">
          <HashLoader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((app, idx) => (
            <Card app={app} key={idx}></Card>
          ))}
        </div>
      )}



    </div>
    </div>
  )
}
