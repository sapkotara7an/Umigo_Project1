import React, { useEffect } from 'react';
import productsData from '../All Data/ProductData';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';





const ProductDetail = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    const navigate = useNavigate();
    const handleInfo = () => {
        
        navigate('/');
      };

  let {pid} = useParams()
  let data=productsData.find((a)=>a.id==pid)
  
  return (
  <>
   <button className='bg-light px-2 rounded-2 my-3' style={{marginLeft:'100px'}} onClick={handleInfo}> <FaArrowLeft/> back</button>
    
    <div className='container  my-2 py-4 shadow-lg' style={{maxWidth:'1100px',}}>
        <div className='row'>
        <div className='text-center pb-1'><h2>{data.title}</h2> </div>
            <div className='col-lg-5'>
            
      
      
      <div className='text-center me-4'><img  src={data.image} alt={data.title}width = '500px' /></div>


            </div>

            <div className='col-lg-6 px-3 text-center'>
            <div className='p-5'><p>{data.details}</p></div>
            <div className='price'><h4>{data.discountPrice} &nbsp;<span>{data.price}</span> </h4>
                
                <div className='text-center'>
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star checked" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <button className='btn btn-md px-2 bg-warning  mt-3'>Add To Cart</button>
                
              </div>
            </div>

        </div>

      
      
     
      
    </div>
    </>
  );
};

export default ProductDetail;
