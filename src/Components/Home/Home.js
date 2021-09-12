import React, { useEffect, useState } from 'react';
import bcrypt from 'bcryptjs';
import NavBar from '../NavBarComponents/NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux'
import { getBannerImages, listProducts } from './HomeActions';
import SideSearchBar from '../NavBarComponents/SideSearchBar/SideSearchBar';
import bannerImgs from '../../bannerImgs';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SchedulingHome from '../SchedulingComponents/SchedulingHome/SchedulingHome';
import HomeFooter from '../HomeFooter/HomeFooter';
import { toggleSideBar } from '../NavBarComponents/SideSearchBar/SideSearchBarActions';


const Home = (props) => {
    const { sideBarOpened } = useSelector((state) => state.SideSearchBar);
    const dispatch = useDispatch()

    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        className: 'banner',
    };

    const [settings, setSettings] = useState(config);


    const onChangeCenterMode = e => {
        if (e.target.checked) {
            setSettings({
                ...config,
                centerMode: true,
                centerPadding: '50px'
            });
        } else {
            setSettings(config);
        }
    }

    useEffect(() => {
        console.log('testing in home')
        dispatch(toggleSideBar(true))
    }, [])


    return (
        <div className='home-container' >
            <div className='background-container background-image' style={{ backgroundAttachment: 'fixed', backgroundImage: `url('/images/wine-barrel-3.jpeg')` }}>
                <div className='sudo-background-black'>
                    <SideSearchBar />
                    <div className={`${sideBarOpened ? 'sudo-background-white-opened' : 'sudo-background-white-closed'}`}>
                        <NavBar />
                        <div className='sidebar-container'>
                            <div>
                                <Slider {...settings}>
                                    {bannerImgs && bannerImgs.images.map((item, i) => {
                                        return <div key={item._id} className="img-card">
                                            <img className="img" src={item.image[0]} />
                                            <div className="card-body">
                                                <div className="card-title">{item.name}</div>
                                                <div className="card-text">{item.description}</div>
                                            </div>
                                        </div>
                                    })}
                                </Slider>
                            </div>
                        </div>
                        <SchedulingHome />
                        <HomeFooter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
