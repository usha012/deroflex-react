import React from 'react'
import ProductCard from './productCard'
import OwlCarousel from "react-owl-carousel"
import { productOwlCarouselSetting } from '../helper'

const ProductPageComponent = ({ data, setProductId, displayCard, setModal }) => {
    return (
        <div className="flexible_pipe_system products_category">
            <section>
                <div className="container bg_gray_200">
                    <div className="row mx-0 product_top_header ps-3 pe-3 pt-5 pb-5">
                        <div className="col-lg-4">
                            <p className="mb-0 fs_12">Lorem ipsum dolor sit, us, debitis qui sed totam autem quam sapiente! </p>                
                        </div>
                        <div className="col-lg-8">
                            <OwlCarousel className='owl-theme product-owl-carousel' {...productOwlCarouselSetting}>
                                {
                                    data?.map(el => (
                                        <div className="item text-center clickme" onClick={() => setProductId(el?.id)} key={el?.id}>
                                            <a>
                                                <div className="pro_50 m-auto">
                                                    <img src={el?.image} className="img-fluid"/>
                                                </div>
                                            </a>
                                            <p className="mt-1 mb-1 text_secondary fs_10">{el?.title}</p>
                                        </div> 
                                    ))
                                }
                            </OwlCarousel>
                        </div>     
                    </div>
                </div>
            </section>

            {/* <!-- products list --> */}
            <section className="product_list">
                {
                    data?.map(el => el?.id === displayCard
                        ?
                        <div className="container px-0 py-4 list active container-list" key={el?.id}>
                            <div className=" product_grid_container">
                                {
                                    el?.products?.map(el => <ProductCard card={el} setModal={setModal} key={el?.id}/>) 
                                }
                            </div>
                        </div>
                        :
                        ""
                    )
                }
            </section>
        </div>
    )
}

export default ProductPageComponent