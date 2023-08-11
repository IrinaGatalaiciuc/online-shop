import React, { useContext } from 'react'
import "../styles/header.css"
import { Link, useParams } from 'react-router-dom'
import List from '../asbuttons/List'
import "../styles/header.css"
import basketimg from "../images/shopping-cart.png"
import { Shopcontext } from '../context/Context'

function Header() {
  const { categories } = useContext(Shopcontext)
  const result = categories.data
  const newresult = result?.map((c, i) => {
    return <List category={c} />
  })

  return (
    <div className="header">
      <div className="header-link">
        <Link to="/">Home</Link>
        <Link to="/basket"><img src={basketimg} alt="basket-icon" /></Link>
      </div>
      <div className="category-list">
        <ul>
          {newresult}
        </ul>
      </div>
    </div>
  )
}

export default Header