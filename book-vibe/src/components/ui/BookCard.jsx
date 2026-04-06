import React from "react";

import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ books }) => {
  return (
    <div className="container mx-auto">
      <h3 className="text-center text-4xl mb-4">all book</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Link
            to={`/bookDetails/${book.bookId}`}
            key={book.bookId}
            className="card bg-base-100 shadow-sm"
          >
            <figure className="p-6">
              <img
                className="rounded-xl h-[250px]"
                src={book.image}
                alt={book.bookName}
              />
            </figure>
            <div className="card-body">
              <div className="flex items-start gap-3">
                {book.tags.map((tag) => (
                  <div className="badge badge-success">{tag}</div>
                ))}
              </div>
              <h2 className="card-title text-2xl">{book.bookName}</h2>

              <p className="font-semibold text-lg">{book.author}</p>

              <div className="card-actions justify-between border-t border-dashed p-4 text-xl">
                <div className="font-semibold">{book.category}</div>
                <div className="flex items-center gap-2">
                  {book.rating} <FaRegStar />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
