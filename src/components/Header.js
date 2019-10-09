import React from 'react';
import Logo from "./Header/Logo"
import Search from "./Header/Search"
import Favorite from "./Header/Favorite"
import Cart from "./Header/Cart"
import MyAccount from "./Header/MyAccount"
import '../styles/Header.css'

const Header = () => {

    return (
        <div className="header">

            <div className="logo">    <Logo /></div>
            <div className="search">  <Search /></div>
            <div className="favorite">   <Favorite /></div>
            <div className="Cart">    <Cart /></div>
            <div className="myAccount">     <MyAccount /></div>
        </div>
    )
}
export default Header;