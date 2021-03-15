import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import Product from './Product';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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

            <h2 className="text__home2">FEATURED</h2>
         <div className="trending__shirt">
            <Grid container spacing={3}>
                    <Grid item xs>
                        <div className="image__text">                   
                                <img className="image__white" src="/images/assets/mask.jpg" alt="" />                            
                        </div>               
                    </Grid>
                    <Grid item xs>
                        <div className="image__text">                   
                                <img className="image__white" src="/images/assets/pokro.jpg" alt="" />                             
                        </div>               
                    </Grid>
                    <Grid item xs>
                        <div className="image__text">                   
                                <img className="image__white" src="/images/assets/merch.jpg" alt="" />                          
                        </div>               
                    </Grid>
                </Grid> 
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
                        <img className="image__white3" src="/images/assets/weebclass.png" alt="" />      
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
         <div className="trending__shirt2">
            <Grid container spacing={3}>
                    <Grid item xs>
                        <div className="image__text2">                   
                            <img className="image__white2" src="/images/assets/white.png" alt="" />                       
                            <button className="btn__categories"><b>MASK</b></button>       
                        </div>               
                    </Grid>
                    <Grid item xs>
                        <div className="image__text2">                   
                                <img className="image__white2" src="/images/assets/red.png" alt="" />                       
                            <button className="btn__categories"><b>T-SHIRT</b></button>       
                        </div>               
                    </Grid>
                    <Grid item xs>
                        <div className="image__text2">                   
                                <img className="image__white2" src="/images/assets/red.png" alt="" />                       
                            <button className="btn__categories"><b>HOODIE</b></button>       
                        </div>               
                    </Grid>
                </Grid> 
            </div>

            <h2 className="text__home2">CATEGORIES</h2>
        </div>
    )
}

//https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB428684220_.jpg

export default Home;