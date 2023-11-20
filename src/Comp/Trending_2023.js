import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TrendingProduct from '../All Data/TrendingData';
import { useEffect } from 'react';





const Trending =()=>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
    return(
        <>
        
        <section className='trending_deal'>
        <div className='heading mt-5 mb-3'>
          <h3><strong>2023 </strong>Trending Now</h3>
        </div>

        <div className='container flex'>
          <div className='trending_banner me-5 '>
            <div className=' opeity_wood  shop py-2 '>
              <div className=''>
                <img src={require('../img/ceiling.jpg')} alt="pic"/>
                <div className='contents'>
                  <p >20% off</p>
                  <h5>opeity Wood <br />Ceiling
                  </h5>
                  <Button variant="dark" >Shop Now</Button>
                </div>
              </div>
              <div className='odinimg text-center'>
                <img src={require('../img/bchair.jpg')} alt="pic"/>
                <div className='odin'>

                  <p className='px-3'>Minimal Odin<br/> Chair from <br/>$69</p>

                </div>

              </div>
            </div>

          </div>
          <div className='row'>
       
            {TrendingProduct.map((a) => (
              <div className='col-lg-4 col-md-6 col-sm-10 text-center'>
          <Link to={`/trending_product_detail/${a.id}`}>
                <div className='product py-3 px-2'>
                  <img src={a.imgSrc} alt={a.id} className='w-100' />
                  <h5 className='mt-3'>{a.title}</h5>
                  <div className='price'><h4>${a.price} <span>${a.discountedPrice}</span> </h4>
                    
                    <div>

                      <i className="fa fa-star checked" />
                      <i className="fa fa-star checked" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>

                  </div>
                </div>
                </Link>

              </div>
              
            ))}
            
          </div>
          

        </div>
              
      </section>
        </>
    )
}

export default Trending;

