import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItem } from './store'

export default function Detail(props) {

  const {Prods} = props
  const {id} = useParams()

  const dispatch = useDispatch()

  return (
    <div>
      <h2>Detail</h2>
      <img src={Prods[id].image} alt="" style={{width: 500}} />
      <h4>{Prods[id].ProductName}</h4>
      <p>{Prods[id].price}</p>
      <button onClick={() => dispatch(addItem({id: Prods[id].id, ProductName: Prods[id].ProductName, count: 1}))}>장바구니</button>
    </div>
  )
}
