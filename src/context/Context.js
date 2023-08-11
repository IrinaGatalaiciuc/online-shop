import React, { createContext, useEffect, useState } from 'react'
import { GET_PRODUCTS_URL, GET_CATEGORIES_URL } from './Dataurl'
import axios from 'axios'

export const Shopcontext = createContext()

function Context(props) {
    const [categories, setCategories] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.all([
            axios.get(GET_CATEGORIES_URL),
            axios.get(GET_PRODUCTS_URL)
        ])
            .then(
                axios.spread((categ, items) => {
                    setCategories(categ)
                    setItems(items)
                })
            )
    }, [GET_CATEGORIES_URL, GET_PRODUCTS_URL])
    const result = { categories, items }

    return (
        <div>
            <Shopcontext.Provider value={result}>
                {props.children}
            </Shopcontext.Provider>
        </div>
    )
}

export default Context