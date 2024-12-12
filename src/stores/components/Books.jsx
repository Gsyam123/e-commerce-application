import React from "react";
import { booksData } from "../data/books";

const Books = () => {
  const firstFiveBooks = booksData.slice(0, 5);
  return (
    <><div className="proTitle">
      <h2>Books...</h2>
      <div className="proSection">
        {firstFiveBooks.map((book) => {
          return (
            <div className="imgBox">
              <img src={book.image} alt="" className="proImg" />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Books;
