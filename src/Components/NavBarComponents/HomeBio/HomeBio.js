import React from 'react';
import LoadingBox from '../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';
import { useSelector } from 'react-redux';


const HomeBio = () => {
    // const [products, setProducts] = useState([]);
    const { loading, error } = useSelector((state) => state.Home);


    return (
        <div className='home-bio-container' >
                
                {loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant='danger' >{error} </MessageBox>) : (
                    <div className='row center'>
                        <h1>We all have a favorite pair of jeans, a leather jacket, or a rockin’ pair of kicks, that make us happy just by putting them on. 
                            The comfort of the right fabric, the right fit, the right color. It soothes the soul. At Evolution of Wine Co. we are celebrating 
                            the new standards of greatness that every wine region have reached. Each trip to visit a new region, to appreciate the perfectly 
                            nurtured rows of vines and sip from the freshly opened bottles is a religious experience that I wanted to remember when I throw on 
                            a new favorite tshirt or hat. We are creating this apparel because we love these items. We hope you will love them just as much.</h1>
                    </div>
                )}
        </div>
    );
}

export default HomeBio;