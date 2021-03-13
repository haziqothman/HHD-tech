import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import Product from './Product';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Home() {
    return (
        <div className="home">
            <div className="image__button">
                <div className="banner__text">
                    <h1 >Pok Ro Jersey [Dark Edition]</h1>
                    <h2 >Now Available</h2>
                    <img className="banner__image" src="/images/assets/red.png" alt=""/>
                </div>
                <button className="btn__image"><b>SHOP NOW</b></button>
                <img className="home__image"
                    src="https://c4.wallpaperflare.com/wallpaper/175/985/284/abstract-3d-digital-art-dark-wallpaper-preview.jpg"
                    alt="" 
                    />  
            </div>

            <h2 className="text__home">FEATURED</h2>

            <div className="home__row">
               
                <Product/>
                

                <Product
                    // id="12231341"
                    // title="Razer ManO'War Wireless 7.1 Surround Sound Gaming Headset."
                    // price={11.96}
                    // rating={5}
                    // image="https://images-na.ssl-images-amazon.com/images/I/71K-OQ0ex7L._AC_SX466_.jpg"
                />
            </div>

         <h2 className="text__home2">TRENDING</h2>
         <div className="trending__shirt">
            <Grid container spacing={3}>
                <Grid item xs>
                    <div className="image__text">
                        <img className="image__white" src="/images/assets/red.png" alt="" />      
                        <h1 className="image__description">POKRO JERSEY</h1>
                    </div>
                    <h2 className="price__description">RM 69.00</h2>
                    <div className="icon__text">
                        <FavoriteBorderOutlinedIcon className="icon__love"/>
                        <LocalMallOutlinedIcon/>
                    </div>
                </Grid>
                <Grid item xs>
                    <div className="image__text">
                    <img className="image__white" src="/images/assets/white.png" alt="" />      
                    <h1 className="image__description">POKRO JERSEY</h1>
                    </div>
                    <h2 className="price__description">RM 69.00</h2>
                    <div className="icon__text">
                    <FavoriteBorderOutlinedIcon className="icon__love"/>
                    <LocalMallOutlinedIcon/>
                    </div>
                </Grid>
                <Grid item xs>
                    <div className="image__text">
                        <img className="image__white" src="/images/assets/white.png" alt="" />      
                        <h1 className="image__description">WEEBCLASS SHIRT</h1>
                    </div>
                    <h2 className="price__description">RM 25.00</h2>
                    <div className="icon__text">
                        <FavoriteBorderOutlinedIcon className="icon__love"/>
                        <LocalMallOutlinedIcon/>
                    </div>
                </Grid>
             </Grid>       
         </div>

         <div className="trending__shirt">
            <Grid container spacing={3}>
                <Grid item xs>
                    <div className="image__text">
                        <img className="image__white" src="/images/assets/red.png" alt="" />      
                        <h1 className="image__description">POKRO JERSEY</h1>
                    </div>
                    <h2 className="price__description">RM 69.00</h2>
                    <div className="icon__text">
                        <FavoriteBorderOutlinedIcon className="icon__love"/>
                        <LocalMallOutlinedIcon/>
                    </div>
                </Grid>
                <Grid item xs>
                    <div className="image__text">
                    <img className="image__white" src="/images/assets/white.png" alt="" />      
                    <h1 className="image__description">POKRO JERSEY</h1>
                    </div>
                    <h2 className="price__description">RM 69.00</h2>
                    <div className="icon__text">
                    <FavoriteBorderOutlinedIcon className="icon__love"/>
                    <LocalMallOutlinedIcon/>
                    </div>
                </Grid>
                <Grid item xs>
                    <div className="image__text">
                        <img className="image__white" src="/images/assets/white.png" alt="" />      
                        <h1 className="image__description">WEEBCLASS SHIRT</h1>
                    </div>
                    <h2 className="price__description">RM 69.00</h2>
                    <div className="icon__text">
                        <FavoriteBorderOutlinedIcon className="icon__love"/>
                        <LocalMallOutlinedIcon/>
                    </div>
                </Grid>
             </Grid>       
         </div>
         

         <h2 className="text__home2">CATEGORIES</h2>
         <div className="trending__shirt">
            <Grid container spacing={3}>
                    <Grid item xs>
                        <div className="image__text">
                            <Box className="image__box" clone>
                                <img className="image__white" src="/images/assets/red.png" alt="" />  
                                {/* <button><b>SHOP NOW</b></button>     */}
                            </Box>
                           
                        </div>               
                    </Grid>
                    <Grid item xs>
                        <div className="image__text">
                        <Box className="image__box" clone>
                            <img className="image__white" src="/images/assets/white.png" alt="" />      
                        </Box>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <div className="image__text">
                        <Box className="image__box" clone>
                            <img className="image__white" src="/images/assets/white.png" alt="" />      
                        </Box>
                        </div>
                    </Grid>
                </Grid> 
            </div>
        </div>
    )
}

//https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB428684220_.jpg

export default Home;
