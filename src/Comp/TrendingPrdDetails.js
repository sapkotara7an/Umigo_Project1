
import React, { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import TrendingProduct from '../All Data/TrendingData';
import { FaArrowLeft } from 'react-icons/fa';





const TrendingProductDetail = ({ }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const navigate = useNavigate();
    const handleInfo = () => {
        
        navigate('/');
      };

  let {tid} = useParams()
  let data=TrendingProduct.find((a)=>a.id==tid)
  
  return (
  <>
      <button className='bg-warning px-2 rounded-2' style={{marginLeft:'200px'}} onClick={handleInfo}> <FaArrowLeft/> back</button>
    
    <div className='container  my-2 py-4 ' style={{maxWidth:'900px',border:'1px solid grey',}}>
        <div className='row'>
        <div className='text-center pb-1'><h2>{data.title}</h2> </div>
            <div className='col-lg-5'>
            
      
      
      <div className='text-center me-4'><img  src={data.imgSrc} alt={data.title}width = '400px' /></div>


            </div>

            <div className='col-lg-6 px-3 text-center'>
            <div className='p-5'><p>{data.description}</p></div>
            <div className='price'><h4>{data.discountedPrice} &nbsp;<span>{data.price}</span> </h4>
                
                <div>
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

export default TrendingProductDetail;
