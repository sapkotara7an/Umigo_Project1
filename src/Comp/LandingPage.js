import React from 'react'

import Carousel from 'react-bootstrap/Carousel';

import 'swiper/css';
import Button from 'react-bootstrap/Button';
import productsData from '../All Data/ProductData';
import { Link, NavLink } from 'react-router-dom';

import Recent_view_productsData from '../All Data/RecentlyViewed';
import Trending from './Trending_2023';



function LandingPage() {
  const chunkedProducts = Array.from({ length: Math.ceil(Recent_view_productsData.length / 5) }, (v, i) =>
  Recent_view_productsData.slice(i * 5, i * 5 + 5));

  return (
    <>
      <banner className='bg-body-tertiary'>
        <div className='container-fluid pb-2'>


          <Carousel>
            <Carousel.Item className='citem'>
              <img className='w-100' src={require('../img/slideshow.jpg')} alt="pic" />
              <Carousel.Caption className='cinfo'>
                <h2 className='pb-2' >Beautiful Home Decor Items</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               <NavLink to={'/magazine'}><Button variant="warning">Read More</Button></NavLink> 
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='citem'>

              <img className='w-100' src={require('../img/slideshow1.jpg')} alt="pic" />

              <Carousel.Caption className='cinfo'>
                <h2 className='pb-2'>Wooden Chair. Modern Furniture</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <NavLink to='/office'><Button  variant="dark">Shop Now</Button></NavLink>  
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>


        </div>


      </banner>

      <div className='container second mt-4'>
        <div className='row'>
          <div className='col-lg-4 col-md-12 col-sm-12 trending'>
            <Link to={'/trending_2023'}>
            <div className='b_relative'><img src={require('../img/img1.jpg')} className='w-100' alt='img' />
              <div className='b_absolute text-black text-center'><h6>Trending<br />
                Bottle Humidifier<br />
                Living Room Set<br /><div className='aerrow' ><i class="fa-solid fa-arrow-right"></i></div></h6></div>
            </div>
            </Link>
          </div>

          <div className='col-lg-4 col-md-12 col-sm-12 trending'>
          <Link to='/trending_electronics'>
            <div className='b_relative'>
           
            <img src={require('../img/img2.jpg')} alt='img' className='w-100' />
            <div className='b_absolute text-black text-center'><h6>Trending<br />Beoplay A1 Sound
              <br />
              Living Room Set<br /><div className='aerrow ' ><i class="fa-solid fa-arrow-right"></i></div></h6></div>
          </div>
          </Link>
          </div>

          <div className='col-lg-4 col-md-12 col-sm-12 trending'><div className='b_relative'><img src={require('../img/img3.jpg')} alt='img' className='w-100' />
            <div className='b_absolute text-black text-center'><h6> Best Seller<br />


              Bottle Humidifier
              <br />Accessories
              <br /><div className='aerrow ' ><i class="fa-solid fa-arrow-right"></i></div></h6></div>
          </div></div>
        </div>
      </div>

      <div className='body container py-5 text-center'>
        <div >
          <ul className="nav gap-5 ">
            <li><strong>Featured</strong></li>
            <Link to={'/new-arrivals'}> <li>New Arrival</li></Link>
            <Link to={'/office'}><li> Best Seller</li></Link>
          </ul>

        </div>

      </div>
      <div className='featured container'>
        <div className='row'>
          {productsData.map((a) => (
            <div className='col-lg-3 col-md-6 col-sm-10 text-center' key={a.id}>
              <div className='product py-3 px-2'>
                <Link to={`/product_details/${a.id}`}>
                  <img className='w-100' src={a.image} alt="pic" />
                  <h5 className='py-2'>{a.title}</h5>
                  <div className='price'><h4>{a.discountPrice} &nbsp;<span>{a.price}</span> </h4>

                    <div>
                      <i className="fa fa-star checked" />
                      <i className="fa fa-star checked" />
                      <i className="fa fa-star checked" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>

                  </div>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>







      <Trending/>



      <section className='dealoftheweek text-center '>

        <div className='container'>
          <div className=' itmtitle '>
            <div className='text-center mt-5 mb-3 '><h3 className=''><strong>Deal of the Week</strong></h3></div>
          </div>
          <div className='row '>
            <div className='col-lg-3 col-md-10 col-sm-12  '>

              <div className='flex deal '>
                <div className='dealimage'><img src={require('../img/mtable.jpeg')} alt="pic" width='85px' />
                </div>
                <div className='dealprice'>$70.00<span>$80.00</span>
                  <p className=''>Aliquet Auctor<br /> semali</p>

                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />

                </div>

              </div>

              <div className='flex deal'>
                <div className='dealimage'><img src={require('../img/mtable.jpeg')} alt="pic" width='85px' /></div>
                <div className='dealprice'>$70.00<span>$80.00</span>
                  <p className=''>Aliquet Auctor <br />semali</p>

                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />

                  <i className="fa fa-star" />
                  <i className="fa fa-star" />

                </div>

              </div>

              <div className='flex deal'>
                <div className='dealimage'><img src={require('../img/table3.jpeg')} alt="img" width='85px' /></div>
                <div className='dealprice'>$70.00<span>$80.00</span>
                  <p className=''>Aliquet Auctor<br />
                    semali</p>

                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />


                </div>
              </div>
            </div>

            <div className='col-lg-3'>

              <div className='product py-2 px-2 '><img src={require('../img/mtablebook.jpeg')} alt="pic" className='w-100' />
                <div className='price'><h4>$79.00 <span>$100</span> </h4>
                  <p>Aliquet auctor semali</p>
                  <div className='py-2'>
                    <i className="fa fa-star checked" />
                    <i className="fa fa-star checked" />
                    <i className="fa fa-star checked" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <p id="demo" />
                </div>
              </div></div>
            <div className='col-lg-3'><div className='product py-2 px-2 '><img src={require('../img/bsofa.jpeg')} alt="pic" className='w-100' />
              <div className='price'><h4>$79.00 <span>$100</span> </h4>
                <p>Aliquet auctor semali</p>
                <div className='py-2'>
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <p id="demo" />
              </div>
            </div></div>


            <div className='col-lg-3 '>

              <div className='relative py-3'> <img src={require('../img/fold_table.jpeg')} alt='img' width='250px' />
                <div className='text-center px-2 beoplay '>Console Tables<br /><h6>Beoplay A1 <br />Sound Accessories</h6>
                  <div className='aerrow mx-5' ><i class="fa-solid fa-arrow-right"></i></div>
                </div>


              </div>

              <div className='relative py-3'> <img src={require('../img/vase.jpeg')} alt='img' width='250px' />
                <div className='text-center px-2 beoplay '>Console Tables<br /><h6>Beoplay A1 <br />Sound Accessories</h6>
                  <div className='aerrow mx-5' ><i class="fa-solid fa-arrow-right"></i></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


    
        <div className='container'>
        <h5 className='text-center mb-5'>Your Recently Viewed Product</h5>
      <Carousel
      fade='true'
      slide ='true'
      controls='true'
      variant='dark'
      >
        {chunkedProducts.map((group, index) => (
          <Carousel.Item key={index} className='cursor-pointer text-center ' >
            <div className='row'>
              {group.map((product) => (
                <div key={product.id} className='col-lg-2 col-md-4 col-sm-10  recent_procuct '>
                  <img className='d-block w-100' src={product.image} alt='slide' />
                  
                    <h5 className='text-danger mt-2'>${product.price.toFixed(2)}</h5>
                    <p>{product.name}</p>
                  
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

      <div className='container py-5'>
        <div className='row gap-5'>
          <div className='col-lg-5 mb-4 mx-5 '>
            <div className='relative'> <img src={require('../img/tt.jpeg')} alt="pic" max-width='620px' />
              <div className='infott'><p>Living Room Set</p>
                <h3>Hauteville Plywood<br />
                  New Chair</h3>
                <button className='text-white  shop_button' type='submit' >Shop Now</button>
              </div>
            </div>

          </div>
          <div className='col-lg-5'>
            <div className='relative  '>  <img src={require('../img/cl.jpeg')} alt="pic" max-width='620px' />
              <div className='infott '><p>Home Decor</p>
                <h3>The Best Clock<br />
                  Creative Furniture</h3>
                <button className='text-white  shop_button ' type='submit' >Shop Now</button>
              </div></div>
          </div>
        </div>
      </div>


      <div className='container banicon'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='flex'>
              <div className='icon mx-3'><i class="fa-solid fa-paper-plane"></i></div>
              <div><h6>Free Shipping</h6><p>On all orders over $75.00</p></div>

            </div>

          </div>
          <div className='col-lg-3'>
            <div className='flex'>
              <div className='icon mx-3'><i class="fa-solid fa-arrow-rotate-right"></i></div>
              <div><h6>Easy 30 Days Returns</h6><p>30 days money back</p></div>

            </div>
          </div>
          <div className='col-lg-3'>
            <div className='flex'>
              <div className='icon mx-3'><i class="fa-solid fa-credit-card"></i></div>
              <div><h6>100% Secure</h6><p>PayPal / MasterCard / Visa</p></div>

            </div>
          </div>
          <div className='col-lg-3'>
            <div className='flex'>
              <div className='icon mx-3'><i class="fa-solid fa-truck-fast"></i></div>
              <div><h6>24/7 Support</h6><p>We will be at your service</p></div>

            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default LandingPage;
