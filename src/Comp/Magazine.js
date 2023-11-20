import React, { useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'



function MagazineLatest() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

  const navigate = useNavigate();
    const handleInfo = () => {
        
        navigate('/');
      };
  return (
    

    <>
       <button className='bg-warning px-2 rounded-2' style={{marginLeft:'200px'}} onClick={handleInfo}> <FaArrowLeft/> back</button>
    
    <div className='container '>
<div className='text-center py-3 kitchen shadow rounded-1'><h3>MAGAZINE</h3></div>

<div className='row'>
<div className='col-lg-2 brand_names'>
    <p className='text-center brands'>Latest</p>
    <ul>
        <Link to='prestige'><li>Latest Fashion</li></Link>
        <Link to='prestige'><li>Winter collections</li></Link>
        <Link to='prestige'><li>Trending</li></Link>
        
    </ul>
</div>
<div className='col-lg-10'>
    <div className='flex p-3 mb-3'>
     <div className='shadow'><img src={require('../img/magazine2.jpg')} width='450px' /></div>
<div className='kitchen_item_info'>
    
    <p className=' '><strong>Latest Collections</strong></p>
    <p>The Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed 
    specifically for the creative professional, this display provides more space for easi..
    Designed 
    specifically for the creative professional, this display provides more space for easi</p>
    
    </div>
</div>

<div className='flex p-3 mb-3'>
     <div className='shadow'><img  src={require('../img/magazine1.jpg')} width='450px' /></div>
<div className='kitchen_item_info'>
    
    <p className=''><strong>Interior</strong></p>
    <p>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed 
    specifically for the creative professional, this display provides more space for easi.
    Designed 
    specifically for the creative professional, this display provides more space for easi</p>
   
    </div>
</div>
<div className='flex p-3 mb-3'>
     <div className='shadow'><img src={require('../img/magazine3.jpg')} width='450px' /></div>
<div className='kitchen_item_info'>
    
    <p className=' '><strong>Added Brands</strong></p>
    <p>The Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed 
    specifically for the creative professional, this display provides more space for easi..</p>
    
    </div>

</div>



</div>

</div>











    </div>


   
    

    </>
  )
}

export default MagazineLatest