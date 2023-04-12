import React from 'react'
import Card from './Card';

function Main() {
  return (
    <>
      <div className="header">
        <div className="row1">
          <img src="./images/kitaplar.jpg" alt="" />
          <h2>
            I lived in books more than <br /> I lived anywhere else{" "}
          </h2>
        </div>
        <div className="row2">
          <h2>Literary Lens</h2>
          <div className="search">
            <input type="text" placeholder="Enter your book name" />
            <button>
              <i class="fa-sharp fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <Card />

      </div>
    </>
  );
}

export default Main