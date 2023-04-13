import React from 'react'

function Card({book}) {
    console.log(book);
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
          if (thumbnail != undefined && author != undefined) {
            return (
              <>
                <div className="card">
                  <img src={thumbnail} alt="" />
                  <div className="bottom">
                    <h3 className="title">{item.volumeInfo.title}</h3>
                    <hr></hr>
                    <p className="author">{author}</p>
                  </div>
                </div>
              </>
            );
          }
        })
    }
    </>
  )
}

export default Card