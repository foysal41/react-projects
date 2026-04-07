import React, { createContext } from "react";
  import {toast } from 'react-toastify';

import { useState } from "react";
export const BookContext = createContext();

export const Bookprovider = ({ children }) => {
  const [storeBooks, setStoreBooks] = useState([]);
  const [wishList, setWishList] = useState([]); 



  const handleMarkAsRead = (currentBook) => {
    console.log(currentBook);
    const isExistBook = storeBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error(`${currentBook.bookName} this book is already read`);
    } else {
      setStoreBooks([...storeBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to list`)
    }
  };


   const handleWishList = (currentBook) => {
   

    const isExistInReadList = storeBooks.find((book)=>book.bookId === currentBook.bookId);
    if(isExistInReadList){
      toast.error("this book is already in list")
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error(`${currentBook.bookName} this book is already read`);
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to wishlist`)
    }
  };

  const data = {
    storeBooks,
    setStoreBooks,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList
  };

  return (
    <div>
      <BookContext.Provider value={data}>{children}</BookContext.Provider>
    </div>
  );
};

export default Bookprovider;
