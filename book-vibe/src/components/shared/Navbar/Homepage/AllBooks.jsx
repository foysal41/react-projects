import React, { use } from "react";
import BookCard from "../../../ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);

  return <BookCard books={books}></BookCard>;
};

export default AllBooks;
