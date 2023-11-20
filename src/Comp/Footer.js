import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
   
  <div className='footer container-fluid mt-5'>
    <div className='row'>
      <div className='col-lg-6 flex subs_icon'><i class="fa-solid fa-paper-plane"></i><p className='discrip'>Subscribe Newsletter And Get Discount</p></div>
      <div className='col-lg-6'>
     <div className='relative'> <form class="d-flex" role="search">
      <input className="form-control me-2 subscribe" type="email" placeholder="Enter Email Address" aria-label="Search"/>
      <button className="btn bg-dark text-white subs_button" type="submit">Subscribe</button>
    </form>
    </div>
      </div>
    </div>
  </div>
    <div className='footerlist text-black  container'>
        <div className='row py-4'>
            <div className='col-lg-3'>
                <div className='footertitle px-5'><p><strong>Contact Us</strong></p></div>
                <div className='footer_contact'>
                <ul>
                    <li><i className="fa-solid fa-house-chimney"/>45 Grand Central New York USA</li>
                    <li><i class="fa-solid fa-envelope"></i> Email: contact@domain.com</li>
                    <li> <i class="fa-sharp fa-solid fa-phone"></i>Phone: +00 (9) 123 3456 789</li>
                    <li><i class="fa-solid fa-print"></i>Fax: +00 (9) 643 6543 898</li>
                    <li><i class="fa-sharp fa-solid fa-lock-open"></i>Mon-Sat 9:00 pm – 5:00 pm.</li>
                    <li><i class="fa-solid fa-lock"></i> Sun: Closed</li>
                </ul></div>
                </div>
            
            <div className='col-lg-2  col-sm-5 Aboutus'>
              <div className=' Aboutus'>
            <p className='px-4'><strong> Information</strong></p>
                <ul>
                    <li><a href="javascript:void(0)"> About Us</a></li>
                    <li> <a href="javascript:void(0)">Delivery Information</a></li>
                    <li><a href="javascript:void(0)">Privacy Policy</a></li>
                    <li><a href="javascript:void(0)">Terms & Conditions</a></li>
                    <li><a href="javascript:void(0)">Contact Us</a></li>
                   
                </ul></div>
            </div>
            <div className='col-lg-2 col-sm-5 '>
            <p className='px-4'><strong>My Account</strong></p>
               
               <div className=''> <ul>
                    <li><a href="javascript:void(0)">Wishlist</a></li>
                    <li><a href="javascript:void(0)">Checkout</a></li>
                    <li><a href="javascript:void(0)">FAQ</a></li>
                    <li><a href="javascript:void(0)">Cart</a></li>
                    <li><a href="javascript:void(0)">My account</a></li>
                    <li><a href="javascript:void(0)">Privacy Policy</a></li>

                </ul></div>
            </div>
            <div className='col-lg-5 px-5'>
                <dl>
                    <dt>
                    Latest Tweets
                    </dt>
                    <dd>
                    Check out "Alice - Multipurpose Responsive #Magento #Theme" on #Envato by @Plazathemes #Themeforest https://t.co/DNdhAwzm88<br/>
                    Check Out "Emos - Multi Store Responsive #Magento #Theme" on #Envato by @Plazathemes #Themeforest https://t.co/08oCVAr5dy
                    
                    </dd>
                </dl>
            </div>
        </div>
        </div>
       





<div className='footer_bottom container '>
  <div className='row'>
    <div className='col-lg-6'><p>Copyright © 2019 Umino. All rights reserved.</p>
    
    <ul>
      <li><i class="fa-brands fa-square-facebook"></i></li>
      <li><i class="fa-brands fa-twitter"></i></li>
      <li><i class="fa-brands fa-instagram"></i></li>
      <li><i class="fa-brands fa-linkedin"></i></li>
    </ul>
    </div>
   


    <div className='col-lg-6 '><div ><p>Allow Payment base on</p></div>
    <div><Link to='/'><img src={require('../img/1.png')} alt='img'/></Link></div>
    </div>
  </div>
</div>





        
    
   
    

    
    </>
  )
}

export default Footer