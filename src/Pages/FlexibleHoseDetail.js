import React from 'react'
import BannerImage from "../Assets/Images/upgrade_products/Flexible_Hose/product_view_bg.jpg"
import PageImage from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Stainless_Steel_Hose/p1.jpg"

import StainlessSteelHose1 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Stainless_Steel_Hose/p1.jpg"
import StainlessSteelHose2 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Stainless_Steel_Hose/p2.jpeg"

import FlangeBellowWelded1 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Flange_With_Bellow_Welded/p1.jpg"
import FlangeBellowWelded2 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Flange_With_Bellow_Welded/p2.jpg"
import ProductCard from '../Components/productCard'
import Footer from '../Components/footer'
import Header from '../Components/header'

const FlexibleHoseDetail = () => {


    const data = {
        pageBannerImage : BannerImage,
        pageImage: PageImage,
        pageTitle: "Lorem Ipsum",
        pageDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, ad voluptatibus. Nam officiis voluptates numquam, et labore dolorum, amet nemo qui rerum eum mollitia inventore dicta vel illum ab dolorem.",
        products: [
            {
                id: "Stainless_Steel_Hose",
                title: "Stainless Steel Hose",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                images: [ StainlessSteelHose1, StainlessSteelHose2 ],
                redirect: true,
                redirectLink: "https://www.google.com"
            },
            {
                id: "Flange_With_Bellow_Welded",
                title: "Flange With Bellow Welded",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                images: [ FlangeBellowWelded1, FlangeBellowWelded2 ],
                redirect: true,
                redirectLink: "https://www.google.com"
            },
        ]
    }

    return (
        <>
            <Header />
            <div class="productview_wrapper">
                <div class="row">
                    <img id="pageBannerImage" src={data?.pageBannerImage} class="mainBannerImg" />
                </div>
                <div class="container">
                    <div class="row py-5">
                        <div class="col-lg-4">
                            <div class="pro_400 m-auto">
                                <img src={data?.pageImage} id="pageImage" /> 
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <h3>{data?.pageTitle}</h3>
                            <p>{data?.pageDescription}</p>
                            <div class="ask_ques_wrapper">
                                <p class="mb-0"><a>Ask Question</a>/ <a>This product</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- products list --> */}
                <section className="product_list">
                    <div className="container px-0 py-4 list active container-list">
                        <div className=" product_grid_container">
                            {
                                data?.products?.map(el => <ProductCard card={el} />) 
                            }
                        </div>
                    </div>
                </section>
            </div>

            <Footer/>
        </>
    )
}

export default FlexibleHoseDetail