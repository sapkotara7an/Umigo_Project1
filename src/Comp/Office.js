import React, { useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



function Office() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const navigate = useNavigate();
  const handleInfo = () => {
      
      navigate('/');
    };

  return (
    <>
  <button className='bg-light px-2 rounded-2 my-3' style={{marginLeft:'100px'}} onClick={handleInfo}> <FaArrowLeft/> back</button>
    

<section className='banner_page'>
<div className='container'>
<div><h2 className=' text-center pb-3  rounded-1'>OFFICE FURNITURES</h2></div>
<div className='featured'>
  <div className='row'>
    <div className='col-lg-3'>
      <div className='product py-3 px-2 '><img src={require('../img/bsofa.jpeg')}className='w-100' />
      <div className='price'><h4>$79.00 <span>$100</span> </h4>
      <p>Aliquet auctor semali</p>
  <div>
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star" />
  <i className="fa fa-star" />
</div>

      </div>
      </div>
      <div className='product py-3 px-2'><img src={require('../img/mtable.jpeg')}className='w-100' />
      <div className='price'><h4>$79.00 <span>$100</span> </h4>
      <p>Aliquet auctor semali</p>
  <div>
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star" />
  <i className="fa fa-star" />
</div>

      </div>
      </div>
      
    </div>
    <div className='col-lg-3'><div className='product py-3 px-2'><img src={require('../img/gtable.jpeg')}className='w-100' />
      <div className='price'><h4>$69.00 <span>$120</span> </h4>
      <p>Aliquet auctor semali</p>
  <div>
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
 
</div>

      </div>
      </div>
      <div className='product py-3 px-2'><img src={require('../img/img11.jpeg')}className='w-100' />
      <div className='price'><h4>$99.00 <span>$110</span> </h4>
      <p>Aliquet auctor semali</p>
  <div>
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star" />
  
</div>

      </div>
      </div></div>


    <div className='col-lg-3'><div className='product py-3 px-2'><img src={require('../img/table3.jpeg')}className='w-100' />
      <div className='price'><h4>$119.00 <span>$150</span> </h4>
      <p>Aliquet auctor semali</p>
  <div>
 
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star" />
  <i className="fa fa-star" />
</div>

      </div>
      </div>
      <div className='product py-3 px-2'><img src={require('../img/img7.jpg')}className='w-100' />
      <div className='price'><h4>$79.00 <span>$100</span> </h4>
      <p>Aliquet auctor semali</p>
  <div>
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
 
</div>

      </div>
      </div></div>


    <div className='col-lg-3'><div className='product py-3 px-2'><img src={require('../img/table2.jpg')}className='w-100' />
      <div className='price'><h4>$79.00 <span>$100</span> </h4>
      <p>Aliquet auctor semali</p>
  <div>
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star" />
  <i className="fa fa-star" />
</div>

      </div>
      </div>
      <div className='product py-3 px-2'><img src={require('../img/mtablebook.jpeg')}className='w-100' />
      <div className='price'><h4>$79.00 <span>$100</span> </h4>
      <p>Aliquet auctor semali</p>
  <div>
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star" />
  <i className="fa fa-star" />
</div>

      </div>
      </div>
      
      </div>
  </div>
</div>
</div>
</section>


    
    </>
  )
}

export default Office