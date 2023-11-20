

import React, { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import TrendingProduct from '../All Data/TrendingData';
import { FaArrowLeft } from 'react-icons/fa';
import Recent_view_productsData from '../All Data/RecentlyViewed';





const RecentlyViewedDetail = ({ }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const navigate = useNavigate();
    const handleInfo = () => {
        
        navigate('/');
      };

  let {pid} = useParams()
  let data=Recent_view_productsData.find((a)=>a.id==pid)
  
  return (
  <>
      <button className='bg-warning px-2 rounded-2' style={{marginLeft:'200px'}} onClick={handleInfo}> <FaArrowLeft/> back</button>
    
    <div className='container  my-2 py-4 ' style={{maxWidth:'900px',border:'1px solid grey',}}>
        <div className='row'>
        <div className='text-center '><h2 className='pb-4'>{data.name}</h2> </div>
            <div className='col-lg-5'>
            
      
      
      <div className='text-center me-5'><img  src={data.image} alt={data.title}width = '400px' /></div>


            </div>

            <div className='col-lg-6 px-3 text-center'>
            <div className='p-5'><p>{data.detail}</p></div>
            <div className='price'><h4>${data.price} </h4>
                
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

export default RecentlyViewedDetail;
