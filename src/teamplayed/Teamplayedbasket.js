import React, { useState } from 'react'
import deleteimg from "../images/delete.png"

function Teamplayedbasket({ id, title, image, price, quantity, totalSum }) {

  const forBasket = JSON.parse(localStorage.getItem("cart"))

  const [change, setChange] = useState(forBasket)
  const numIncrement = quantity + 1
  const numDecreament = quantity - 1

  function increase() {

    setChange(prevState =>
      prevState.map((item) =>
        item.id === id
          ? { ...item, quantity: numIncrement, totalSum: price * numIncrement }
          : item
      )
    )
    window.location.reload(false);
  }
  localStorage.setItem("cart", JSON.stringify(change))

  function decrease() {
    if (quantity > 1) {
      setChange(prev =>
        prev.map((item) =>
          item.id === id
            ? { ...item, quantity: numDecreament, totalSum: price * numDecreament }
            : item
        )
      )
      window.location.reload(false);
    }
  }


  function delItem() {
    localStorage.setItem(
      'cart',
      JSON.stringify(
        JSON
          .parse(localStorage.getItem('cart') ?? '[]')
          .filter((item) => item.id !== id),
      )
    )
    window.location.reload(false);
  }
  
  return (
    <div>
      <div className="buy-section">
        <div className="item-buy">
          <div className="product-block">
            <div className="product-image">
              <img src={image} alt={title} />
            </div>
            <div className="product-info">
              <h3>{title}</h3>
              <p>{totalSum} $</p>
              <h4>{quantity}</h4>
              <div className="buttons-sec">
                <button onClick={() => increase()}>+</button>
                <button onClick={() => decrease()}>-</button>
              </div>
              <div className="delete-btn">
                <button onClick={delItem}><img src={deleteimg} alt="delete" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teamplayedbasket