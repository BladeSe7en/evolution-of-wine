import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import NavBarMini from '../NavBarMini/NavBarMini';

const _loaded = {};

// const ImageLoader = () => {
//     const [ loaded, setLoaded ] = setState()


//     return (
//         <div className='nav-container'>
//             <div className='logo-header'>
//                 <img src={'/images/Evolution-of-Wine-Logo1.png'} className="logo" alt="logo" />
//             </div>
//             <NavBarMini />
//         </div>
//     );
// }

// export default ImageLoader;



class ImageLoader extends React.Component {
    
    //initial state: image loaded stage 
    state = {
        loaded: _loaded[this.props.src]
    };
    componentDidMount() {

        console.log('this.props.src: ',this.props.src)
    }

    //define our loading and loaded image classes
    static defaultProps = {
        className: "",
        loadingClassName: "img-loading",
        loadedClassName: "img-loaded"
    };

    //image onLoad handler to update state to loaded
    onLoad = () => {
        _loaded[this.props.src] = true;
        this.setState(() => ({ loaded: true }));
    };


    render() {

        let { className, loadedClassName, loadingClassName, ...props } = this.props;

        className = `${className} ${this.state.loaded
            ? loadedClassName
            : loadingClassName}`;

        return <img
            src={this.props.src}
            onClick={this.props.onClick}
            className={className}
            onLoad={this.onLoad} />;
    }
}

export default ImageLoader;
