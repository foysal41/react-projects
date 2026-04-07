import React, { useContext } from "react";
import { BookContext } from "../../context/Bookprovider";

const Books = () => {
  const { storeBooks, wishList } = useContext(BookContext);
 

  return (
    <div className="container mx-auto">
      read list : {storeBooks.length}
      wish list : {wishList.length}
    </div>
  );
};

export default Books;
