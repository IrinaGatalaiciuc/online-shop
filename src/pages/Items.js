import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Teamplayedcategory from '../teamplayed/Teamplayedcategory'
import "../styles/items.css"
import { Shopcontext } from '../context/Context'



function Items() {

    const { category } = useParams()
    const { items } = useContext(Shopcontext)
    const itemBy = items.data
    const chooseCategory = itemBy?.filter((it) => it.category == category)
    const showItems = chooseCategory?.map((it, i) => {
        return <Teamplayedcategory id={it.id} title={it.title} image={it.image} rate={it.rating.rate} price={it.price} />
    })

    return (
        <div className="items-sorted">
            <p>{category}</p>
            <div className="all-products">
                {showItems}
            </div>
        </div>
    )
}

export default Items