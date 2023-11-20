import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'


function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
   
<div className='container pt-3 contact_page'>
  <div className='text-warning contact_us '><i className="fa-solid fa-phone px-2"></i> Contact us</div>
    
    
    <div className='pt-5 pb-2'><h6>OUR LOCATION</h6></div>
    <div className='contact_box mt-2'>
<div className='row'>
  <div className='col-lg-3 p-4'><img src={require('../img/opencart.png')}/></div>
  <div className='col-lg-3 p-4'><p><strong>Store 1</strong></p><p>45 Grand Central New York NY 1017 United State USA</p></div>
  <div className='col-lg-3 p-4'>
   <div> <p><strong>Telephone</strong></p><p>+88.2345.6789</p></div>
   <div> <p>Fax</p><p>+88.2345.6789</p></div>
    </div>
 
  <div className='col-lg-3 p-4'><div> <p className=''><strong>Opening Times</strong></p><p>8:00 AM - 8:00 PM</p></div>
   <div> <p className=''><strong>Comments</strong></p><p >Welcome to our online store!</p></div></div>
</div>
</div>
    

<div className='querry pt-4'><p><strong>Submit your querry</strong></p></div>

<div className="container enquiry_form ">
  <form action="/">
    <label htmlFor="fname"> Name</label>
    <input type="text" id="fname" name="your name" placeholder="Your name.." />
    <label htmlFor="Email">Email</label>
    <input type="text" id="lname" name="lastname" placeholder="Email.." />
    
    <label htmlFor="Enquiry">Enquiry</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height: 200}} defaultValue={""} />
    <input type="submit"  />
  </form>
</div>





    </div>




    
    
    </>
  )
}

export default Contact