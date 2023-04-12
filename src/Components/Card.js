import React from 'react'

function Card() {
  return (
    <>
    <div className="card">
        <img src="./images/content.jpeg" alt="" />
        <div className="bottom">
            <h3 className="title">Book Name</h3>
            <hr></hr>
            <p className='author'>Author</p>

        </div>
    </div>
    </>
  )
}

export default Card