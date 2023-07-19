import React from 'react'
import {Outlet} from 'react-router-dom'
import './style/style.css'; 

import { Routes,Route,Link} from 'react-router-dom'
import {useState} from 'react'
import Detail from './Detail';

import {newItems} from './productData';

import {useDispatch, useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import { addItem } from  './store'

export default function Page02() {
  const [ newArr] = useState(newItems);
  const dispatch = useDispatch();
  const [itemAdded, setItemAdded] = useState(false);

  return (
    <>
    <h2 className='main_title'>신상품 샐러드</h2>
    <div className='best_item'>
      {newArr.map((best,index)=>{
        return(
          <Col className='items' key={index} md={3}>
            <Link className='links' to={`/news/${index}`} >
              <div>
                <img src={best.image} alt='product_img'/>
              </div>
              <h2 className='product_sub'>{best.title}</h2>
              <ul>
                <li className='discount'>{best.discount}</li>
                <li className='price'>{best.price}</li>
              </ul>
              <h2 className='realprice'><strike>{best.realprice}</strike> </h2>
            </Link>
            <button className='item_btn'onClick={()=>{
              dispatch(addItem({id:best.id, title: best.title, count :1}))
              setItemAdded(true);
              setTimeout(() => setItemAdded(false), 1500); 
            }}>장바구니</button>
          </Col>
        )
      })}
      { itemAdded && <p className='basket'>장바구니에 추가되었습니다.</p>} 
      <Outlet></Outlet>
    </div>

    <Routes>
      <Route path='/news/:id' element={<Detail  bests={newArr} />} />
    </Routes>
    </>
  )
}
