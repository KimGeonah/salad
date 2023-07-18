import React from 'react'
import { useParams } from 'react-router-dom'
import { addItem } from './store'
import { useDispatch } from 'react-redux'
import './style/style.css'; 

export default function Detail(props) {
    const {bests} = props
    const {id} = useParams()
    const dispatch = useDispatch()


  return (
      <div>

      <h2 className='detail_title'> 상세정보</h2>

      <div className='detail_box' >

        <img className='detail_img' src={bests[id].image} alt="datail"/>

        <div className='detail_info'>

          <h4 className='info_title'>{bests[id].title}</h4>

          <p className='info_desc'>{bests[id].desc}</p>

          <ul>
            <li className='info_discount'>{bests[id].discount}</li>
            <li className='info_price'>{bests[id].price}</li>
          </ul>

          <h2 className='info_realprice'><strike>{bests[id].realprice}</strike></h2>
          


          <button className='info_btn' onClick={()=>{
              dispatch(addItem({id:bests[id].id, title: bests[id].title, count :1}))
          }}>장바구니</button>

        </div>


      </div>
    
      </div>

      )

}



