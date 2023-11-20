import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Comp/Home';
import Contact from './Comp/Contact';
import './style.scss';
import Offers from './Comp/Offers';
import Kitchen from './Comp/Kitchen';
import Kitchen_page2 from './Comp/Kitchen_page2';
import Office from './Comp/Office';
import HomePageLayout from './Comp/HomePageLayout';
import ProductDetail from './Comp/ProductDetails';
import NewArrival from './Comp/NewArrivals';
import TrendingProductDetail from './Comp/TrendingPrdDetails';
import { ErrorPage } from './Comp/ErrorPage';
import LoginPage from './Comp/Login';
import RegisterHere from './Comp/Register';
import MagazineLatest from './Comp/Magazine';
import Trending from './Comp/Trending_2023';
import RecentlyViewedDetail from './Comp/RecentlyViewedDetails';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <HomePageLayout/> } >

        <Route path="/" element={ <Home/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="login" element={ <LoginPage/> } />
        <Route path="register" element={ <RegisterHere/> } />
        <Route path="offers" element={ <Offers/> } />
        <Route path="office" element={ <Office/> } />
        <Route path="kitchen" element={ <Kitchen/> } />
        <Route path="magazine" element={ <MagazineLatest/> } />
        <Route path="kitchen_page2" element={ <Kitchen_page2/> } />
        <Route path="/product_details/:pid" element={<ProductDetail/>} />
        <Route path="/new-arrivals" element={ <NewArrival/> } />
        <Route path="/trending_2023" element={ <Trending/> } />
        <Route path="/recently_viewed/:pid" element={ <RecentlyViewedDetail/> } />
        <Route path="/trending_product_detail/:tid" element={<TrendingProductDetail/>} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      
      </Routes>
    </div>
  )
}

export default App
