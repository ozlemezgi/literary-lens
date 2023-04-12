import React from 'react'

function Card() {
  return (
    <>
    <div className="card">
        <img src="./images/content.jpeg" alt="" />
        <div className="bottom">
            <h3 className="title">Kitap Adı</h3>
            <p className='author'>Yazar</p>

        </div>
    </div>
    </>
  )
}

export default Card