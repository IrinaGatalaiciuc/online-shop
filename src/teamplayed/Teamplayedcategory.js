import React from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'


function Teamplayedcategory({ id, title, image, rate, price }) {
  const { category } = useParams()
  
  function toAdd() {

    const datas = JSON.parse(localStorage.getItem("cart") || "[]")
    const nodouble = (element) => element.id === id
    const result = datas.some(nodouble)

    if (!result) {
      datas.push({
        id: id,
        title: title,
        image: image,
        price: price,
        quantity: 1,
        totalSum: price
      })
      localStorage.setItem("cart", JSON.stringify(datas))
    }
  }


  return (
    <div className="items-sorted">
      <div className="all-products">
        <div className="details">
          <h6>{id}</h6>
          <h3>{title}</h3>
          <img src={image} alt={title} />
          <div className="rate-block">
            <ReactStars
              count={5}
              value={rate}
              size={24}
              color2={'#ffd700'} readonly />
            {rate}
          </div>
          <p>{price} $</p>
          <button onClick={toAdd}>add</button>
        </div>
      </div>
    </div>

  )
}

export default Teamplayedcategory