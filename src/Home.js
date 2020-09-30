import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://cdn.onebauer.media/one/media/5ecd/034a/d192/6f65/c245/afbd/PrimeDay-Empire-Banner.png?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg"
                alt="" />

            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />

                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12321341"
                    title="Q950TS QLED 8K Smart TV (2020)"
                    price={29.300}
                    rating={5}
                    image="https://images.samsung.com/is/image/samsung/my-qled-tv-q950t-qa85q950tskxxm-black-246101453?$PD_GALLERY_L_JPG$"
                />

                <Product
                    id="12321341"
                    title="2.6GHz 6-core 9th-generation Intel Core i7 processor, Turbo Boost up to 4.5GHz"
                    price={10, 499.00}
                    rating={5}
                    image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16touch-space-select-201911_GEO_MY?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1573242759842"
                />

                <Product
                    id="12321341"
                    title="Apple Watch Series 6"
                    price={11.96}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQIbyk8z8nlXGQz-wgKICtmvvaQ0MuTvx5rg&usqp=CAU"
                />
            </div>

            <div className="home__row">
                <Product
                    id="4903850"
                    title="LENOVO LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={11.96}
                    rating={5}
                    image="data:image/jpeg;base64,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"
                />

            </div>
        </div>
    )
}

//https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB428684220_.jpg

export default Home;
