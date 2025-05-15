import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext)

  return (
    <Link to={`/products/${id}`} className='text-[#654321] cursor-pointer'>
        <div>
            <img src={image[0]} className='transition ease-in-out rounded-3xl hover:scale-105 hover:rounded-3xl' />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem