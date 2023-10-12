import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


import Page01 from './pages/Page01' ;
import Page02 from './pages/Page02' ;
import Page03 from './pages/Page03';
import Page04 from './pages/Page04';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import Footer from './pages/Footer';


import {bestItems , newItems,deliveryItems} from './pages/productData';
import {Container,Nav,Navbar,Col,Row,Button,Card} from 'react-bootstrap/';

import {Routes,Route, Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useDispatch, useSelector } from 'react-redux';
import {addItem } from './pages/store'


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


function App() {

  const [bests] = useState(bestItems)
  const [news] = useState(newItems)
  const [deliverys] = useState(deliveryItems)
  const navigate = useNavigate()
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const [itemAdded, setItemAdded] = useState(false);
  

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  return (
    <div className="App">

      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
        <Navbar.Brand onClick={() => { navigate('/'); scrollToTop();}}>
          <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt="logo" style={{width:80,cursor:"pointer"}} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/page01'); scrollToTop();}}>BEST</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/page02'); scrollToTop();}}>신상품</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/page03'); scrollToTop();}}>정기배송</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/page04'); scrollToTop();}}>이벤트</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart'); scrollToTop();}}>장바구니
{/*             <span className='basket_count'>1</span> */}

            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>

    

        <Route path='/' element={


        <div >

          <Swiper className='main_swiper'
           modules={[Navigation, Pagination, Scrollbar,Autoplay, A11y]}
           spaceBetween={50}
           navigation
           pagination={{ clickable: true }}
           scrollbar={{ draggable: true }}
           onSwiper={(swiper) => console.log(swiper)}
           onSlideChange={() => console.log('slide change')}
           autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          >
            <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/swiper_01.jpg'} alt="swiper"></img></SwiperSlide>
            <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/swiper_02.png'} alt="swiper"></img></SwiperSlide>
            <SwiperSlide><img src={process.env.PUBLIC_URL+'/images/swiper_03.jpg'} alt="swiper"></img></SwiperSlide>
          </Swiper>

          <Row className='main_menu'>

          <Col>
          <Card className='card_box'>
            <Link to="/page01" onClick={scrollToTop}>
            <div>
            <Card.Img className='card_img'src={process.env.PUBLIC_URL+'/images/salad_01.jpg'} />
            </div>
            </Link>
            <Card.Body>
              <Card.Title className='card_title'>BEST 샐러드</Card.Title>
              <Card.Text className='card_text' >
              다양한 샐러드를 내 입맛에 원하는대로 쏙쏙~
              </Card.Text>
              <Button className='card_btn' onClick={() => {navigate('/page01'); scrollToTop();}}>더보기</Button>

            </Card.Body>
          </Card>
          </Col>
          

          <Col>
          <Card className='card_box'>
          <Link to="/page02" onClick={scrollToTop}>
            <div>
            <Card.Img className='card_img' src={process.env.PUBLIC_URL+'/images/new_08.jpg'} />
            </div>
            </Link>
            <Card.Body>
              <Card.Title className='card_title'>신상품 샐러드</Card.Title>
              <Card.Text className='card_text' >
              다양한 신선함이 담겨있는 아삭한 신상 채소들! 
              </Card.Text>
              <Button className='card_btn' onClick={() => {navigate('/page02'); scrollToTop(); }}>더보기</Button>

            </Card.Body>
          </Card>
          </Col>


          <Col>
          <Card className='card_box' >
          <Link to="/page03" onClick={scrollToTop}>
            <div>
            <Card.Img  className='card_img' src={process.env.PUBLIC_URL+'/images/new_01.jpg'} />
            </div>
            </Link>
            <Card.Body>
              <Card.Title className='card_title'>정기배송 샐러드</Card.Title>
              <Card.Text  className='card_text' >
              일주일에 다섯 번 집 앞으로 새벽배송 !
              </Card.Text>
              <Button className='card_btn' onClick={() => {navigate('/page03'); scrollToTop();}}>더보기</Button>
            </Card.Body>
          </Card>
          </Col>
          </Row>



          <Container className='best_item'>

            <h2 className='title' >🔥BEST 샐러드🔥</h2>

            <Row>

            {bests.slice(0, 8).map((best,index)=>{

            return(
              <Col className='items' key={index}>
               <Link className='links' to={`detail/${index}`} onClick={scrollToTop} >
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

            </Row>

            { itemAdded && <p className='basket'>장바구니에 추가되었습니다.</p>} 


          </Container>

          <Link to="/page04" onClick={scrollToTop}>
          
          <div>
          <img src={process.env.PUBLIC_URL+'/images/event_banner.png'} style={{width:1250,cursor:"pointer"}}alt="swiper"></img>
          </div>

          </Link>

          <Container className='new_item'>

            <h2 className='title' >신상품 샐러드</h2>

            <Row>
            {news.slice(0, 4).map((newArr,index)=>{



            return(
              <Col className='items' key={index}>
               <Link className='links' to={`news/${index}`} onClick={scrollToTop} >
                <div>
              <img src={newArr.image} alt='product_img'/>
              </div>
              <h2 className='product'>{newArr.title}</h2>
              <h2 className='price'>{newArr.price}</h2>
            </Link>



            <button className='item_btn'onClick={()=>{
              dispatch(addItem({id:newArr.id, title: newArr.title,
              count :1}))
              setItemAdded(true);
              setTimeout(() => setItemAdded(false), 1500); 
            }}>장바구니</button>
              </Col>
            )

            })}

            </Row>
            
            { itemAdded && <p className='basket'>장바구니에 추가되었습니다.</p>} 




          </Container> 

          <Container className='delivery_item'>

<h2 className='title' >정기배송 샐러드</h2>

<Row>

{deliverys.slice(0, 4).map((best,index)=>{

return(
  <Col className='items' key={index}>
   <Link className='links' to={`deliverys/${index}`}  onClick={scrollToTop}>
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

</Row>

{ itemAdded && <p className='basket'>장바구니에 추가되었습니다.</p>} 


          </Container> 



        </div>
      }>




        </Route>


        <Route path='page01' element={<Page01/>}>
        </Route>


        <Route path='page02' element={<Page02/>}>
        </Route>


        <Route path='page03' element={<Page03/>}>
        </Route>

        <Route path='page04' element={<Page04/>}>
        </Route>





  <Route path='/detail/:id' element={<Detail bests={bests} />} />
  <Route path='/news/:id' element={<Detail bests={news} />} />
  <Route path='/deliverys/:id' element={<Detail bests={deliverys} />} />




        <Route path='cart' element={<Cart/>} >
        </Route>

      </Routes>

      <div className="scroll__container">
        <button id="top" onClick={scrollToTop} type="button" > Top</button>
      </div>

      <Footer></Footer>

    </div>
  );




}









export default App;




