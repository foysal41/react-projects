import React, { createContext } from "react";

import { useState } from "react";
export const BookContext = createContext();

export const Bookprovider = ({ children }) => {
  const [storeBooks, setStoreBooks] = useState([]);
  const handleMarkAsRead = (currentBook) => {
    console.log(currentBook);
    const isExistBook = storeBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      alert(`${currentBook.bookName} this book is already read`);
    } else {
      setStoreBooks([...storeBooks, currentBook]);
      alert(`${currentBook.bookName} is added to list`)
    }
  };

  const data = {
    storeBooks,
    setStoreBooks,
    handleMarkAsRead,
  };

  return (
    <div>
      <BookContext.Provider value={data}>{children}</BookContext.Provider>
    </div>
  );
};

export default Bookprovider;
