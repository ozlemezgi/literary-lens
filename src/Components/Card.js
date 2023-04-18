import React, { useState } from 'react'
import Modal from './Modal';

function Card({book}) {
    console.log(book);

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();

  return (
    <>
    {
        // Map over the book data passed as props and create a Card component for each book
        book.map((item)=>{
          // Check if book has a thumbnail image and author information
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          let author = item.volumeInfo.authors;
          // If the book has a thumbnail image and author information, render a Card component
          if (thumbnail !== undefined && author !== undefined) {
            return (
              <>
                <div
                  key={item.id}
                  className="card"
                  onClick={() => {
                    setShow(true);
                    setItem(item);
                  }}
                >
                  <img src={thumbnail} alt="" />
                  <div className="bottom">
                    <h3 className="title">{item.volumeInfo.title}</h3>
                    <hr></hr>
                    <p className="author">{author}</p>
                  </div>
                </div>
                <Modal
                  show={show}
                  item={bookItem}
                  onClose={() => setShow(false)}
                />
              </>
            );
          }
           return null;
        })
    }
    </>
  )
}

export default Card