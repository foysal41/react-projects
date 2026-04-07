
import React, { useContext } from 'react';
import { BookContext } from "../../context/Bookprovider";
const ListedWishList = () => {
const { wishList } = useContext(BookContext);

if(wishList.length === 0){
  return <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
    <h4  className="font-bold text-3xl" >No data in the wishlist</h4>
  </div>
}
  return (
    <div>
      <div className="grid grid-cold-1 md:grid-cols-3 gap-4">
        {wishList.map((book) => (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                className=" h-80 w-200"
                src={book.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.bookName}</h2>
              <p>
                {book.review}
              </p>
              <div className="card-actions justify-end">
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
