import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Kitchen_page2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    
    <div className='container '>


<div className='row'>
<div className='col-lg-2 brand_names'>
    <p className='text-center brands'>Brands</p>
    <ul>
        <li><Link to={'/kitchen_page2'}>Prestige</Link></li>
        <li><Link>Metalware</Link></li>
        <li><Link>Woodland</Link></li>
        <li><Link>Tabletop</Link></li>
        <li><Link>Landmarks</Link></li>
    </ul>
</div>
<div className='col-lg-10'>
    <div className='flex'>
     <div><img src={require('../img/img1.jpg')} width='250px' /></div>
<div className='kitchen_item_info'>
    
    <p className=' text-danger'><strong>Wooden Top Metal Table</strong></p>
    <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed 
    specifically for the creative professional, this display provides more space for easi..</p>
    <div className='price'><h4>$79.00 <span>$100</span> </h4></div>

    <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star" />
  <i className="fa fa-star" />
    </div>
</div>

<div className='flex'>
     <div><img src={require('../img/mtable.jpeg')} width='250px' /></div>
<div className='kitchen_item_info'>
    
    <p className=' text-danger'><strong>Table clock</strong></p>
    <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed 
    specifically for the creative professional, this display provides more space for easi..</p>
    <div className='price'><h4>$30.00 <span>$60</span> </h4></div>

    <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star" />
  <i className="fa fa-star" />
    </div>
</div>
<div className='flex'>
     <div><img src={require('../img/gtable.jpeg')} width='250px' /></div>
<div className='kitchen_item_info'>
    
    <p className=' text-danger'><strong>Cook Ware</strong></p>
    <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed 
    specifically for the creative professional, this display provides more space for easi..</p>
    <div className='price'><h4>$20.00 <span>$30</span> </h4></div>

    <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star checked" />
  <i className="fa fa-star" />
  <i className="fa fa-star" />
    </div>

</div>


<div className=' ms-auto pt-5'>
<nav aria-label="...">
  <ul className="pagination">
    <li className="page-item ">
      <span className="page-link">Previous</span>
    </li>
    <li className="page-item  active"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><Link className="page-link" to="/">2</Link></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav></div>
</div>

</div>











    </div>
    
    
    
    </>
  )
}

export default Kitchen_page2