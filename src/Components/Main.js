import React, { useState } from 'react'
import Card from './Card';
import axios from 'axios';

function Main() {
  // Set up state for search input and book data
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  // Function to search for books using Google Books API
  const searchBook = (evt) => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q='+ezgi+'&maxResults=40&key=AIzaSyCPwNMiuqw7q5m4d5edr-x8e8f28V6-Rn4"
      )
      // Set the book data state to the response data
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
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
            //TODO:Performing a search when the enter key is pressed.
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
}

export default Main