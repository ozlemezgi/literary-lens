import React, { useState } from 'react'
import Card from './Card';
import axios from 'axios';

function Main() {
  // Set up state for search input and book data
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [bookIndex, setBookIndex] = useState(7); // initialize with 7 to show first 7 books
  const [showMoreButton, setShowMoreButton] = useState(true); // show more button initially

  // Function to search for books using Google Books API
  const searchBook = (evt) => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&key=AIzaSyCPwNMiuqw7q5m4d5edr-x8e8f28V6-Rn4`
      )
      // Set the book data state to the response data
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  };

   const handleMoreClick = () => {
     setBookIndex(bookIndex + 7); // increment book index by 7
   };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchBook();
    }
  };
  
  return (
    <>
      {/* Header section start*/}
      <div className="header">
        <div className="row1">
          <img src="./images/kitaplar.jpg" alt="" />
          <h2>
            I lived in books more than <br /> I lived anywhere else{" "}
          </h2>
        </div>
        <div className="row2">
          <h2>Literary Lens</h2>
          {/* Search bar start */}
          <div className="search">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Enter your book name"
            />
            {/* Button to trigger search function */}
            <button onClick={searchBook}>
              <i className="fa-sharp fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Container for book cards start */}
      <div className="container">
        {<Card book={bookData.slice(0, bookIndex)} />}
        {bookData.length > bookIndex && showMoreButton && (
          <button className="more-button" onClick={handleMoreClick}>
            More
          </button>
        )}
      </div>
    </>
  );
}

export default Main