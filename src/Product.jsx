import React from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from './redux/cartSlice'

const Product = ({ id, title, image, cost}) => {

    const dispatch = useDispatch()
  return (
    <div>
        <img src={image} alt="" className='w-100'/>
        <h3>{title}</h3>
        <h4>${cost}.00</h4>
        <br />
        <button className='btn btn-warning' onClick={() => dispatch(addtoCart({ id, title, image, cost}))}>
            Add to card
            </button>
    </div>
  )
}

export default Product