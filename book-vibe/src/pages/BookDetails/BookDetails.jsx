import { BookContext } from "../../context/Bookprovider";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();

  const expectedBook = books.find((book) => book.bookId === parseInt(id));
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const { handleMarkAsRead, storeBooks , handleWishList} = useContext(BookContext);
 
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm container mx-auto">
      <figure>
        <img className="h-[400px] flex-1" src={image} alt="Album" />
      </figure>
      <div className="card-body flex-1">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>

        {
          <div className="flex items-start gap-3">
            {tags.map((tag) => (
              <div className="badge badge-success">{tag}</div>
            ))}
          </div>
        }

        <p>review: {review}</p>

        <div className=" border-t-1 space-y-2">
          <div className="flex items-start gap-2">
            <span>Number of pages: </span> <span>{totalPages}</span>
          </div>

          <div className="flex items-start gap-2">
            <span>Publisher: </span> <span>{totalPages}</span>
          </div>

          <div className="flex items-start gap-2">
            <span>Publish Time: </span> <span>{totalPages}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleMarkAsRead(expectedBook)}
              className="btn "
            >
              Read
            </button>
            <button className="btn btn-primary" onClick={() => handleWishList(expectedBook)} >Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
