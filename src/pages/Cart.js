import React from 'react'
import Table from 'react-bootstrap/Table'
import  {useDispatch, useSelector} from 'react-redux';
import { changeName,changeYear,deleteItem,addCount,subCount } from './store';
import './style/style.css'; 

export default function Cart() {

    const state = useSelector((state) => state)
    const dispatch = useDispatch()

  return (
    <div>
            <img src={process.env.PUBLIC_URL+'/images/visual_main.jpg'} alt="banner" style={{marginTop:50,width:1320}}/>
        <h2 className='cart_title'>
          <span>{state.user.name}</span>님의 장바구니
        </h2>

{/*         <button className='cart_btn' onClick={() => dispatch(changeName())}>회원정보</button> */}
{/*         <h3>가입기간 : {state.user.memberYear} 년</h3>
        <button className='sub_btn' onClick={() => dispatch(changeYear(1))}>+</button>
        <button className='sub_btn' onClick={() => dispatch(changeYear(-1))}>-</button> */}

    <Table striped bordered hover>

      
      <thead className='cart_table'>
        <tr>
          <th>Num</th>
          <th>상품명</th>
          <th>개수</th>
          <th>변경</th>
{/*           <th>금액</th> */}
          <th>삭제</th>
        </tr>
      </thead>


      <tbody>
      {
          state.cart.map((item,i) => {

            
            return(
              <tr key={i}>
                <td>{i+1}</td>
                <td>{state.cart[i].title}</td>
                <td>{state.cart[i].count}</td>

                <td >
                  <button className='plus_btn' onClick={()=>dispatch(addCount(state.cart[i].id))}>+</button>
                  <button className='minus_btn' onClick={()=>dispatch(subCount(state.cart[i].id))}>-</button>
                </td>

{/*                 <td>{Number(state.cart[i].price)}</td> */}


                  <td>
                  <button className='sub_btn delete_btn' onClick={()=>dispatch(deleteItem(state.cart[i].id))}>지우기</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>

    </Table>
    </div>
  )
}
