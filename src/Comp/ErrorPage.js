import { useEffect } from "react";
import { Link } from "react-router-dom"


export const ErrorPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (<>
        
        <h1 className="text-center my-5 text-warning">*404 Page not found</h1>
       <Link to={'/'}> <p className="text-center"><i className='fa fa-home me-2 text-warning'/>Return to Homepage</p></Link>

    </>)
}
