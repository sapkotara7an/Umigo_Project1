import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaUser} from 'react-icons/fa6'

function Header() {
  return (
    <div className='header_section '>
      <div className=' flex container-fluid topnav'>
        <div className='shipping me-auto ps-5'>
          <p>FREE SHIPPING FOR ALL ORDERS OF<strong>$200</strong></p>
        </div>
        <div className='navlist mx-auto '>
          <ul className='gap-4 '>
            <li><NavLink to='login' >MY ACCOUNT</NavLink></li>
            <li><NavLink to='/cart'>CART</NavLink></li>
            <li><NavLink to='/wishlist'>WISHLIST</NavLink></li>
            <li><NavLink to='checkout'>CHECKOUT</NavLink></li>
            <li><NavLink to='login' className={'fw-bold'}><FaUser/> LOGIN</NavLink></li>
            <li><NavLink to='register' className={'fw-bold'}>REGISTER</NavLink></li>
          </ul>
        </div>
       
      </div>

      <div className='container brand'>
        <div className='row pt-3'>
          <div className='col-lg-3 col-md-5 col-sm-5 '>
            <NavLink to='/'>
              <img className='ms-4 brand_image' src={require('../img/logo.png')} alt='img'/>
            </NavLink>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-4'>
            <div className='flex'>
              <div className='contact px-2'>
                <i className="fa-sharp fa-solid fa-phone"/>
              </div>
              <div className='infos'>
                <p>Need help</p>
                <p>(+123) 123 321 345</p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-8 col-sm-10 searchBar'>
            <div>
              <input type="text" className='search' placeholder="Search product.." name="search"/>
            </div>
            <div className='search_logo'>
              <button className='text-warning'><i className="fa-solid fa-magnifying-glass" /></button>
            </div>
          </div>

          <div className='col-lg-2 col-md-4 col-sm-5'>
            <div className='checkout'>
              <div className='heart mx-5 infos'>
                <NavLink to='wishlist'>
                  <i className="fa-regular fa-heart" /><p className='' style={{fontSize:'12px'}}>Wishlist</p>
                </NavLink>
              </div>
              <div className='px-4'>
                <NavLink to='cart'>
                  <i className="fa-sharp fa-solid fa-bag-shopping" /><p style={{fontSize:'12px'}}>Cart</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row '>
            <div className='col-lg-8 col-md-12 col-sm-12 flex'>
              
               
                <div class="dropdown">
                  <button className="homebar border">
                    <div className=' text-center'> <i className="fa-solid fa-bars me-3"></i><strong>All Categories</strong></div>
                    
                  </button>
                  <div class="dropdown-content" style={{paddingInline:'77px', fontWeight:'bold'}}>
                    <NavLink to='/kitchen'>Kitchen</NavLink>
                    <NavLink to='/office'>Office</NavLink>
                    <NavLink to='/offers'>Offers</NavLink>
                    <NavLink to='/brands'>Brands</NavLink>
                  </div>
                </div>
              

              <div className="dropdown_btn flex">
                <div class="dropdown">
                  <button class="dropbtn">
                    <NavLink to='/'><strong>HOME</strong></NavLink>
                  </button>
                </div>

                <div class="dropdown">
                  <button className="dropbtn flex">
                    <div className='p-1'><strong>SHOP</strong></div>
                    <i class="fa-solid fa-chevron-down p-1"></i>
                  </button>
                  <div class="dropdown-content">
                    <NavLink to='/kitchen'>Kitchen</NavLink>
                    <NavLink to='/office'>Office</NavLink>
                    <NavLink to='/'>Home</NavLink>
                  </div>
                </div>

                <div class="dropdown">
                  <button className="dropbtn flex">
                    <div className='p-1'><strong>BLOG</strong></div><i class="fa-solid fa-chevron-down p-1"></i>
                  </button>
                  <div class="dropdown-content">
                    <NavLink to ="magazine">Magazine</NavLink>
                    <NavLink to ="news">News</NavLink>
                    <NavLink to ="tweets">Tweets</NavLink>
                  </div>
                </div>

                <div class="dropdown">
                  <button class="dropbtn">
                    <NavLink to='/offers'><strong>OFFERS</strong></NavLink>
                  </button>
                </div>

                <div class="dropdown">
                  <button class="dropbtn">
                    <NavLink to='/contact'><strong>CONTACT</strong></NavLink>
                  </button>
                </div>
              </div>
            </div>
          
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
