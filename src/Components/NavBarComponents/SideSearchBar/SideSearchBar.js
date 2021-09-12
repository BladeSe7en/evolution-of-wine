import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SubMenu
} from "react-pro-sidebar";

//import icons from react icons
import { IconContext } from 'react-icons';
import { FaUserTie, FaStoreAlt, FaCartArrowDown, FaGem, FaHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { GoSignIn } from 'react-icons/go'
import { GrUserAdmin } from "react-icons/gr";
import "react-pro-sidebar/dist/css/styles.css";
import { toggleSideBar } from './SideSearchBarActions';
import { updateTotalCartItems } from '../../CartCheckoutComponents/Cart/CartActions';
import { signout } from '../../UserComponents/SignIn/SignInActions';





const SideSearchBar = (props) => {
    const { sideBarOpened } = useSelector((state) => state.SideSearchBar);
    const [change, setChange] = useState(true);
    const { user } = useSelector(state => state.SignIn);

    const { cartItems, totalItemsOrdered, shippingAddress } = useSelector(state => state.Cart);
    const dispatch = useDispatch();

    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);

    useEffect(() => {
        let total = cartItems.length === 0 ? 0 : cartItems.reduce((previousValue, currentValue) => {
            return {
                qty: previousValue.qty + currentValue.qty,
            }
        });
        console.log('total: ', total)
        let sum = total === 0 ? 0 : total.qty
        dispatch(updateTotalCartItems(sum))
    }, [dispatch, cartItems])



    useEffect(() => {
        console.log('this is sideBarOpened: ', sideBarOpened)
    }, [sideBarOpened]);


    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        console.log('this is sidebaropened in click: ', sideBarOpened)
        console.log('this is !sidebaropened in click: ', !sideBarOpened)

        dispatch(toggleSideBar(!sideBarOpened))
    };

    const signoutHandler = () => {
        dispatch(signout())
    }

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? "EoW" : "Evolution Of Wine"}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">

                            <MenuItem active={true} icon={<FiHome />}>
                                Home
                                <Link to="/" />
                            </MenuItem>

                            <MenuItem icon={<FaStoreAlt />}>
                                Store
                                <Link to="/store" />
                            </MenuItem>
                            <MenuItem icon={<FaCartArrowDown />}>
                                Cart {totalItemsOrdered > 0 && <span className='badge'>{totalItemsOrdered}</span>}
                                <Link to="/cart" />
                            </MenuItem>

                            <MenuItem icon={<BiCog />}>Profile</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>

                    {user.name ? (
                        <Menu iconShape='square'>
                        <SubMenu title={`${user.name}`} icon={<RiUserLine />}>
                            <MenuItem icon={<BiCog />}>Profile</MenuItem>
                            <MenuItem icon={<FiLogOut />}>
                                Log Out
                                <Link to = '/' onClick = { signoutHandler } ></Link>
                            </MenuItem>
                        </SubMenu>
                        </Menu>
                    ) : (
                        <Menu iconShape='square'>
                        <MenuItem icon={<GoSignIn />}>
                            Sign In
                            <Link to="/signin"  />
                        </MenuItem>
                        </Menu>
                    )}  
                    {user && user.isAdmin && (
                        <Menu iconShape="square">
                            
                            <SubMenu title="Admin Dashboard" icon={<FaUserTie/>}>
                                <MenuItem>
                                Dashboard
                                <Link to="/productlist"  />
                                </MenuItem>
                                <SubMenu title="Product List" icon={<FaHeart />}>
                                    <Link to="/productlist"  />
                                </SubMenu>
                                <SubMenu title="Admin Order List" icon={<FaHeart />}>
                                    <Link to="/adminOrderList"  />
                                </SubMenu>
                                <SubMenu title="User List" icon={<FaHeart />}>
                                    <Link to="/userlist"  />
                                </SubMenu>
                                <SubMenu title="Discount Codes" icon={<FaHeart />}>
                                    <Link to="/discountCodes"  />
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    )}
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default SideSearchBar;





// {user.name ? (
//     <div className='admin dropdown'>
//             <button className='nav-btn' onClick={() => setChange(!change)}> {user.name} <i className='fa fa-caret-down'> </i> </button>
//         <ul className = 'admin-dc dropdown-content'>
//             <Link to = '/userProfile' > User Profile </Link>
//             <Link to = '/' onClick = { signoutHandler } > Sign Out </Link>
//         </ul>
//     </div>
// ) : (
//     <Link to="/signin"  >
//         <button className='nav-btn' onClick={() => setChange(!change)}> Sign In </button>
//     </Link>
// )}

// {user && user.isAdmin && (
//     <div className="admin dropdown">
//             <button className='nav-btn' > Admin <i className="fa fa-caret-down"></i>  </button>
//         <div className="admin-dc2 dropdown-content">
//             <div>
//                 <Link to="/dashboard">Dashboard</Link>
//             </div>
//             <div>
//                 <Link to="/productlist">Products</Link>
//             </div>
//             <div>
//                 <Link to="/adminOrderList">All Orders</Link>
//             </div>
//             <div>
//                 <Link to="/userlist">Users</Link>
//             </div>
//             <div>
//                 <Link to="/discountCodes">Discount Codes</Link>
//             </div>
//             <div>
//                 <Link to="/stats">Stats</Link>
//             </div>
//         </div>
//     </div>
// )}

