import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import itemDatas from './myPages/MainPage_DataList'
import Detail from './myPages/Detail'
import StyledComponents from './myPages/StyledComponents'
import FirstPage from './myPages/FirstPage'
import Cart from './myPages/Cart'

import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from './myPages/store'


function App() {

  const navigate = useNavigate()
  const [Prods] = useState(itemDatas)

  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => {navigate('/shop')}}>FILA_SHOP</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => {navigate('/shop')}}>HOME</Nav.Link>
              <Nav.Link onClick={() => {navigate('/firstpage')}}>FirstPage</Nav.Link>
              <Nav.Link onClick={() => {navigate('/firstpage/sub')}}>SubPage</Nav.Link>
              <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>
            </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/shop' element = {
          <Container>
            <img src='https://leegiun.github.io/Shop/images/visual.jpg' alt='vm1'/>
            <img src={process.env.PUBLIC_URL+'https://leegiun.github.io/Shop/images/visual.jpg'} alt='vm2'/>
            <h2>Product</h2>
            <Row>
              {
                itemDatas.map((itemData, index) => {
                  return (
                    <Col key = {index}>
                      <Link to={`detail/${index}`}>
                        <img src={itemData.image} alt='product_img' style={{width: 280}}/>
                        <h2>{itemData.ProductName}</h2>
                        <p>{itemData.desc}</p>
                        <p>{itemData.price}</p>
                      </Link>
                      <button onClick={() => {dispatch(addItem({id: itemData.id, ProductName: itemData.ProductName, count: 1}))}}>장바구니</button>
                    </Col>
                  )
                })
              }
            </Row>
          </Container>
        }/>
        <Route path='firstpage' element={<FirstPage/>}>
          <Route path='sub' element={<div>sub</div>} />
          <Route path='loca' element={<div>Location</div>}/>
        </Route>

        <Route path='/shop/detail/:id' element={<Detail Prods={itemDatas}/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
