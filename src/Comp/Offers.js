import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import productsData from '../All Data/ProductData'
import { FaArrowLeft } from 'react-icons/fa'


function Offers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const navigate = useNavigate();
  const handleInfo = () => {
      
      navigate('/offers');
    };
  return (
    <>
     
    
    
    <div className='featured container'>
      <h2 className='text-center py-3 text-danger shadow'>CLEARANCE OFFER!!</h2>
        <div className='row'>
          {productsData.map((a) => (
            <div className='col-lg-3 col-md-6 col-sm-10 text-center ' key={a.id}>
              <div className='product py-3 px-2 shadow rounded-2'>
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
    
    
    </>
  )
}

export default Offers