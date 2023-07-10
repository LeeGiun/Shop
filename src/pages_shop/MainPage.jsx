import React from 'react'
import './MainPage_style.css'
import itemDatas from './MainPage_DataList'
import styled from 'styled-components'


const Button = styled.button`
  display: inline-block;
  width: 45%;
  height: 50px;
  position: absolute;
  bottom: 10px;
  border: 1px solid #aaa;
  border-radius: 15px;
  font-size: 14px;
  background-color: #fff;
  box-sizing: border-box;
  cursor: pointer;

  &hover {
    font-weight: bold;
    border: 1px solid #000;
    color: #fff;
    box-sizing: border-box;
  }
`



export default function MainPage() {
  return (
    <div>
      <section className='Visual_main'>
        <img src={process.env.PUBLIC_URL + './images/visual.jpg'} alt="" />
      </section>
      <h2 style={{ textAlign: 'center' }}>Product</h2>
      <section className='Product_item'>
        {
          itemDatas.map((itemData, index) => {
            return (
              <div className='product' key={itemData.id}>
                <img src={itemData.image} alt={'product_img' + 1} />
                <p className='data_desc'>{itemData.desc}</p>
                <h4>{itemData.ProductName}</h4>
                <p className='Product_Price'>{itemData.price}</p>
                <div className="Button">

                </div>
                <Button className="btn1">찜하기</Button>
                <Button className="btn2">장바구니</Button>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}
