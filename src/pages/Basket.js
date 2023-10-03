import React from 'react'
import Teamplayedbasket from '../teamplayed/Teamplayedbasket'
import "../styles/basket.css"
import emptyimg from "../images/empty-cart.png"

function Empty() {
  return (
    <div className="empty-place">
      <h3>Your cart is empty</h3>
      <div className="empty-img">
        <img src={emptyimg} alt="empty-card" />
      </div>
    </div>
  )
}

function Basket() {
  function toClear() {
    localStorage.clear("cart")
    window.location.reload(false);
  }
  const forBasket = JSON.parse(localStorage.getItem("cart"))
  const itembasket = forBasket?.map((b, i) => {
    return <Teamplayedbasket id={b.id} title={b.title} image={b.image} price={b.price} quantity={b.quantity} totalSum={b.totalSum} />
  }
  )
  const showbasket = (forBasket === null || forBasket.length === 0) ? <Empty /> : ""
  const totalSum = forBasket?.reduce(function (s, b) {
    return s + b.totalSum
  }, 0)

  return (
    <div>
      <div className="for-price">
        <button className="btn-clear" onClick={toClear}>clear</button>
        <div>
          <span>total:</span>{totalSum ?? 0}<span>$</span>
        </div>
      </div>
      <div className="item-buy">
        {itembasket ?? <Empty />} 
        {showbasket}

      </div>
    </div>
  )
}

export default Basket