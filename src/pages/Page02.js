import React from 'react'
import {Outlet} from 'react-router-dom'
import './style/style.css'; 

import {newItems} from '../pages/productData';
import {Link} from 'react-router-dom'
import {useState} from 'react'

import { useDispatch } from 'react-redux';
import { Col } from 'react-bootstrap';
import { addItem } from  './store'


export default function Page02() {
  const [ newArr] = useState(newItems);
  const dispatch = useDispatch();
  const [itemAdded, setItemAdded] = useState(false);



  return (

<div className='best_item'>
{newArr.map((best,index)=>{

return(
  <Col className='items' key={index} md={3}>
   <Link className='links' to={`detail/${index}`} >
   <div>
  <img src={best.image} alt='product_img'/>
  </div>
  <h2 className='product'>{best.title}</h2>
  <h2 className='price'>{best.price}</h2>
</Link>

<button className='item_btn'onClick={()=>{
  dispatch(addItem({id:best.id, title: best.title,
  count :1}))
  setItemAdded(true);
  setTimeout(() => setItemAdded(false), 1500); 

}}>장바구니</button>
  </Col>

  
)

})}
  { itemAdded && <p className='basket'>장바구니에 추가되었습니다.</p>} 
<Outlet></Outlet>
</div>
  )
}

