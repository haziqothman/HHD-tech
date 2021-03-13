import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { useStateValue } from './StateProvider';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function Header() {
    const [{ basket }] = useStateValue();

    console.log(basket);

    return <nav className="header">
        <Link to="/">
            <img className="header__logo" src="/images/assets/logo.jpg" alt="" />
        </Link>

        {/* <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div> */}

        <div className="header__nav">
            <div className="header__link1">
                <Link to="/Login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">WHAT'S NEW</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">SALES</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">CATEGORIES</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">CONTACT US</span>
                    </div>
                </Link>
            </div>

            <div className="header__link2">
                <Link to="/checkout" className="header__link">
                        <SearchIcon/>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <AccountCircleOutlinedIcon/>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <LocalMallOutlinedIcon />
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>

    </nav>

}

export default Header