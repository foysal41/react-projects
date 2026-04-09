import React from 'react'

function Card({app}) {
  return (
      <div  className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={app.image} alt={app.title}/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{app.title}</h2>

            <div className="flex justify-between items-center gap-4">
              <span className="text-green-500 bg-green-100 inline-block py-1 px-2 font-semibold rounded-md">{app.downloads}</span>
              <span className="text-orange-500 bg-orange-100 inline-block py-1 px-2 font-semibold rounded-md">{app.ratingAvg}</span>
            </div>
          </div>
        </div>
  )
}

export default Card