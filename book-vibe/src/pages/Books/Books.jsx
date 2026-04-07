import React, { useContext } from "react";
import { BookContext } from "../../context/Bookprovider";

const Books = () => {
  const { handleMarkAsRead, storeBooks } = useContext(BookContext);
  console.log(handleMarkAsRead, storeBooks, "BookContext");

  return (
    <div>
      <h3>Books page</h3>
    </div>
  );
};

export default Books;
