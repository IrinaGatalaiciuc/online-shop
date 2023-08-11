import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Teamplayedcategory from "../teamplayed/Teamplayedcategory"
import Items from "../pages/Items"
import "../styles/list.css"


function List({ category }) {
  return (
    <div className="category-list">
      <div className="list-items">
        <ul>
          <li><Link to={`/product/${category}`}>{category}</Link></li>
        </ul>
      </div>
      <Items />
    </div>

  )
}

export default List