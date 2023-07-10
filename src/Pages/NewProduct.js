import React, { useState } from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import RubberBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/rubber_bellow.png"
import RubberBellowP1_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p1.jpg"
import RubberBellowP1_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p2.png"
import RubberBellowP1_3 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p3.jpeg"

import StainlessSteel from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/stainless_steel.png"
import FabricBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/febric_bellow.png"
import PneumaticAirBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/pneumatic_air_bellow.png"
import PTFRExpansionJoint from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/PTFE_expansion_joints.png"
import ProtectiveBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/protective_bellow.png"
import BusDuctBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/bus_duct_bellow.png"

const NewProduct = () => {

    const data = [
        {
            id: "one", 
            title: "Rubber Expansion Bellow", 
            image: RubberBellow, 
            products: [
                {
                    id: "01", 
                    title: "Single Arch Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: true,
                    redirectLink: "https://www.google.com",
                    images: [ RubberBellowP1_1, RubberBellowP1_2, RubberBellowP1_3 ]
                }
            ]
        },
        {id: "two", title: "Stainless Steel Bellow", image: StainlessSteel },        
        {id: "three", title: "Febric Bellow ", image: FabricBellow },
        {id: "four", title: "Pneumatic Air Bellow", image: PneumaticAirBellow },
        {id: "five", title: "PTFE Bellow", image: PTFRExpansionJoint },
        {id: "six", title: "Protective bellow", image: ProtectiveBellow },
        {id: "seven", title: "Bus Duct Bellow", image: BusDuctBellow }
    ]

    const productOwlCarouselSetting = {
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        nav:true,
        dots:false,
        responsive:{ 0:{ items:1 }, 600:{ items:3 }, 1000:{ items:5 } }
    } 

    const [displayCard, setDisplayCard] = useState("one")

    return (
        <>
        <Header />
        <div class="flexible_pipe_system products_category">

            {/* <!-- top header --> */}
            <section>
                <div class="container bg_gray_200">
                    <div class="row mx-0 product_top_header ps-3 pe-3 pt-5 pb-5">
                        <div class="col-lg-4">
                            <p class="mb-0 fs_12">Lorem ipsum dolor sit, us, debitis qui sed totam autem quam sapiente! </p>                
                        </div>
                        <diV class="col-lg-8">
                            <OwlCarousel className='owl-theme product-owl-carousel' {...productOwlCarouselSetting}>
                                {
                                    data?.map(el => (
                                        <div class="item text-center clickme" onClick={() => setDisplayCard(el?.id)} key={el?.id}>
                                            <a class="" href="#" data-tag="seven">
                                                <div class="pro_50 m-auto">
                                                    <img src={el?.image} class="img-fluid"/>
                                                </div>
                                            </a>
                                            <p class="mt-1 mb-1 text_secondary fs_10">{el?.title}</p>
                                        </div> 
                                    ))
                                }
                            </OwlCarousel>
                        </diV>     
                    </div>
                </div>    
            </section>

            {/* <!-- products list --> */}
            <section class="product_list">
                {
                    data?.map(el => el?.id === displayCard
                        ?
                        <div class="container px-0 py-4 list active container-list" id='one'>
                            <div class=" product_grid_container">
                                {
                                    el?.products?.map(el => (
                                        <div class="grid-item px-0 product_card_outer">
                                            <div class="card text-center">
                                                {/* <div id="single_arch_p1" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Single Arch Expansion Joint" />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p2.png" class="d-block" alt="Single Arch Expansion Joint" />
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Single Arch Expansion Joint" />
                                                        </div>
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#single_arch_p1" data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target="#single_arch_p1" data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div> */}
                                                <OwlCarousel id="single_arch_p1" className='owl-theme slide product_card_slider'>
                                                {
                                                    el?.images?.map((img, index) => (
                                                        <div class={`item carousel-item ${index === 0 ? "active" : ""}`}>
                                                            <img src={img} class="d-block" alt="Single Arch Expansion Joint" />
                                                        </div>
                                                    ))
                                                }
                                                {/* <button class="carousel-control-prev" type="button" data-bs-target="#single_arch_p1" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#single_arch_p1" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button> */}
                                                </OwlCarousel>
                                                <div class="card-body">
                                                    <h5 class="card-title">Single Arch Expansion Joint  </h5>
                                                    <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="./Rubber_Expansion_Bellow/Single_arch_expansion_joint.html" target="_blank" class="btn btn-commn-bg-primary w-100">View More</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div class="grid-item px-0 product_card_outer">
                                    <div class="card text-center">
                                        <div id="single_arch_p1" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Single Arch Expansion Joint" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p2.png" class="d-block" alt="Single Arch Expansion Joint" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Single Arch Expansion Joint" />
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#single_arch_p1" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#single_arch_p1" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                        <OwlCarousel id="single_arch_p1" className='owl-theme slide product_card_slider'>
                                            
                                        </OwlCarousel>
                                        <div class="card-body">
                                            <h5 class="card-title">Single Arch Expansion Joint  </h5>
                                            <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="./Rubber_Expansion_Bellow/Single_arch_expansion_joint.html" target="_blank" class="btn btn-commn-bg-primary w-100">View More</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid-item px-0 product_card_outer">
                                    <div class="card text-center">
                                        <div id="single_arch_p2" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                            <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Doubel_Arch_Expansion_Bellow/p1.jpeg" class="d-block" alt="Double Arch Expansion Joint" />
                                                
                                            </div>
                                            <div class="carousel-item">
                                                <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Doubel_Arch_Expansion_Bellow/p2.jpeg" class="d-block" alt="Double Arch Expansion Joint" />
                                            </div>
                                            <div class="carousel-item">
                                                <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Doubel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Double Arch Expansion Joint" />
                                            </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#single_arch_p2" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#single_arch_p2" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                        <h5 class="card-title">Double Arch Expansion Joint </h5>
                                        <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="./Rubber_Expansion_Bellow/double_arch_expansion_joint.html" target="_blank" class="btn btn-commn-bg-primary w-100">View More</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid-item px-0 product_card_outer">
                                    <div class="card text-center">
                                        <div id="single_arch_p3" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                            <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Elbow_Expansion_Bellow/p1.jpg" class="d-block" alt="Elbow Expansion Joint" />
                                                
                                            </div>
                                            <div class="carousel-item">
                                                <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Elbow_Expansion_Bellow/p2.jpeg" class="d-block" alt="Elbow Expansion Joint" />
                                            </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#single_arch_p3" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#single_arch_p3" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                        <h5 class="card-title">Elbow Expansion Joint</h5>
                                        <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="./Rubber_Expansion_Bellow/elbow_expansion_joint.html" target="_blank" class="btn btn-commn-bg-primary w-100">View More</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid-item px-0 product_card_outer">
                                    <div class="card text-center">
                                        <div id="single_arch_p4" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                            <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Reducer_Expansion_Bellow/p1.jpeg" class="d-block" alt="Reducer Expansion Joint" />
                                                
                                            </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#single_arch_p4" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#single_arch_p4" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                        <h5 class="card-title">Reducer Expansion Joint </h5>
                                        <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="./Rubber_Expansion_Bellow/reducer_expansion_joint.html" target="_blank" class="btn btn-commn-bg-primary w-100">View More</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid-item px-0 product_card_outer">
                                    <div class="card text-center">
                                        <div id="single_arch_p5" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                            <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Union_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow" />
                                            </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#single_arch_p5" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#single_arch_p5" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                        <div class="card-body">
                                        <h5 class="card-title">Union Rubber Bellow</h5>
                                        <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="./Rubber_Expansion_Bellow/union_rubber_bellow.html" target="_blank" class="btn btn-commn-bg-primary w-100">View More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        ""
                    )
                }
                <h1>sasdasdasdas</h1>
            {/* <!-- container-1 --> */}
                <div class="container px-0 py-4 list active container-list" id='one'>
                    <div class=" product_grid_container">
                        <div class="grid-item px-0 product_card_outer">
                            <div class="card text-center">
                                {/* <!-- <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="card-img-top" alt="..."> --> */}
                                <div id="single_arch_p1" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Single Arch Expansion Joint" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p2.png" class="d-block" alt="Single Arch Expansion Joint" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Single Arch Expansion Joint" />
                                    </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#single_arch_p1" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#single_arch_p1" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-body">
                                <h5 class="card-title">Single Arch Expansion Joint  </h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <!-- <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a> --> */}
                                <a href="./Rubber_Expansion_Bellow/Single_arch_expansion_joint.html" target="_blank" class="btn btn-commn-bg-primary w-100">View More</a>
                                </div>
                                {/* <!-- end quick view modal --> */}
                            </div>
                        </div>

                        <div class="grid-item px-0 product_card_outer">
                            <div class="card text-center">
                                {/* <!-- <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="card-img-top" alt="..."> --> */}
                                <div id="single_arch_p2" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        {/* <!-- <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                        </div> --> */}
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Doubel_Arch_Expansion_Bellow/p1.jpeg" class="d-block" alt="Double Arch Expansion Joint" />
                                        
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Doubel_Arch_Expansion_Bellow/p2.jpeg" class="d-block" alt="Double Arch Expansion Joint" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Doubel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Double Arch Expansion Joint" />
                                    </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#single_arch_p2" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#single_arch_p2" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-body">
                                <h5 class="card-title">Double Arch Expansion Joint </h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <!-- <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a> --> */}
                                <a href="./Rubber_Expansion_Bellow/double_arch_expansion_joint.html" target="_blank" class="btn btn-commn-bg-primary w-100">View More</a>
                                </div>
                            </div>
                        </div>

                        <div class="grid-item px-0 product_card_outer">
                            <div class="card text-center">
                                {/* <!-- <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="card-img-top" alt="..."> --> */}
                                <div id="single_arch_p3" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        {/* <!-- <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                        </div> --> */}
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Elbow_Expansion_Bellow/p1.jpg" class="d-block" alt="Elbow Expansion Joint" />
                                        
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Elbow_Expansion_Bellow/p2.jpeg" class="d-block" alt="Elbow Expansion Joint" />
                                    </div>
                                    {/* <!-- <div class="carousel-item">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Union expansion bellow">
                                    </div> --> */}
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#single_arch_p3" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#single_arch_p3" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-body">
                                <h5 class="card-title">Elbow Expansion Joint</h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <!-- <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a> --> */}
                                <a href="./Rubber_Expansion_Bellow/elbow_expansion_joint.html" target="_blank" class="btn btn-commn-bg-primary w-100">View More</a>
                                </div>
                            </div>
                        </div>

                        <div class="grid-item px-0 product_card_outer">
                            <div class="card text-center">
                                {/* <!-- <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="card-img-top" alt="..."> --> */}
                                <div id="single_arch_p4" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        {/* <!-- <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                        </div> --> */}
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Reducer_Expansion_Bellow/p1.jpeg" class="d-block" alt="Reducer Expansion Joint" />
                                        
                                    </div>
                                    {/* <!-- <div class="carousel-item">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p2.png" class="d-block" alt="Union expansion bellow">
                                    </div> --> */}
                                    {/* <!-- <div class="carousel-item">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Union expansion bellow">
                                    </div> --> */}
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#single_arch_p4" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#single_arch_p4" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-body">
                                <h5 class="card-title">Reducer Expansion Joint </h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <!-- <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a> --> */}
                                <a href="./Rubber_Expansion_Bellow/reducer_expansion_joint.html" target="_blank" class="btn btn-commn-bg-primary w-100">View More</a>
                                </div>
                            </div>
                        </div>

                        <div class="grid-item px-0 product_card_outer">
                            <div class="card text-center">
                                {/* <!-- <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="card-img-top" alt="..."> --> */}
                                <div id="single_arch_p5" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        {/* <!-- <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                        </div> --> */}
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Union_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow" />
                                        
                                    </div>
                                    {/* <!-- <div class="carousel-item">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p2.png" class="d-block" alt="Union expansion bellow">
                                    </div> --> */}
                                    {/* <!-- <div class="carousel-item">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Union expansion bellow">
                                    </div> --> */}
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#single_arch_p5" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#single_arch_p5" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div class="card-body">
                                <h5 class="card-title">Union Rubber Bellow</h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <!-- <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a> --> */}
                                <a href="./Rubber_Expansion_Bellow/union_rubber_bellow.html" target="_blank" class="btn btn-commn-bg-primary w-100">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- container -2 -->
                <div class="container px-0 py-4 list hide container-list" id='two'>
                <div class=" product_grid_container">
                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <!-- <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="card-img-top" alt="..."> -->
                            <div id="Expansion_Joint_Welded" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <!-- <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Expansion_Joint_Welded_Ending/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    
                                    </div>
                                    <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Expansion_Joint_Welded_Ending/p2.jpg" class="d-block" alt="Union expansion bellow">
                                    </div>
                                    <!-- <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#Expansion_Joint_Welded" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Expansion_Joint_Welded" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Expansion Joint Welded Ending</h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                        <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                            <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <!-- <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="card-img-top" alt="..."> -->
                            <div id="Small_Metal_Bellow" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <!-- <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Small_Metal_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    
                                    </div>
                                    <!-- <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p2.png" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <!-- <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                </div>
                                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#Small_Metal_Bellow" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Small_Metal_Bellow" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button> -->
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Small Metal Bellow </h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                    <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                        <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <!-- <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="card-img-top" alt="..."> -->
                            <div id="Stainless_Steel" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <!-- <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Stainless_Steel_Expnsion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    
                                    </div>
                                    <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Stainless_Steel_Expnsion_Bellow/p2.jpg" class="d-block" alt="Union expansion bellow">
                                    </div>
                                    <!-- <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#Stainless_Steel" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Stainless_Steel" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Stainless Steel Expansion Joint </h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                    <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                        <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <!-- <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="card-img-top" alt="..."> -->
                            <div id="Rectangular_Metallic" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <!-- <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Rectangular_Metallic_Expansion_Joint/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    
                                    </div>
                                    <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Rectangular_Metallic_Expansion_Joint/p2.jpeg" class="d-block" alt="Union expansion bellow">
                                    </div>
                                    <!-- <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#Rectangular_Metallic" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Rectangular_Metallic" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Rectangular Metallic Expansion Joint </h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                    <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                        <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>
                </div>
                </div>


                <!-- container -3 -->
                <div class="container px-0 py-4 list hide container-list" id='three'>
                <div class=" product_grid_container">
                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <!-- <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="card-img-top" alt="..."> -->
                            <div id="Rectangular_Fabric" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <!-- <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Rectangular_Type_Fabric_Expansion_Joint/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    
                                    </div>
                                    <!-- <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Expansion_Joint_Welded_Ending/p2.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <!-- <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                </div>
                                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#Rectangular_Fabric" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button> -->
                                <!-- <button class="carousel-control-next" type="button" data-bs-target="#Rectangular_Fabric" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button> -->
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Rectangular Fabric Expansion Joint</h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                        <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                            <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <!-- <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="card-img-top" alt="..."> -->
                            <div id="Fabric_Expansion" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <!-- <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Fabric_Expansion_Joint/p1.jpeg" class="d-block" alt="Union expansion bellow">
                                    
                                    </div>
                                    <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Fabric_Expansion_Joint/p2.jpg" class="d-block" alt="Union expansion bellow">
                                    </div>
                                    <!-- <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#Fabric_Expansion" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Fabric_Expansion" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Fabric Expansion Joint </h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                    <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                        <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>
                </div>
                </div>

                <!-- container -4 -->
                <div class="container px-0 py-4 list hide container-list" id='four'>
                <div class=" product_grid_container">
                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <!-- <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="card-img-top" alt="..."> -->
                            <div id="Air_bellow" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <!-- <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Bellow/p1.jpg" class="d-block" alt="Air bellow">
                                    
                                    </div>
                                    <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Bellow/p2.jpg" class="d-block" alt="Air bellow">
                                    </div>
                                    <!-- <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#Air_bellow" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Air_bellow" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Air bellow</h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                        <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                            <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <div id="Air_spring" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <!-- <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Spring/p1.jpg" class="d-block" alt="Air spring">
                                    
                                    </div>
                                    <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Spring/p2.jpg" class="d-block" alt="Air spring">
                                    </div>
                                    <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Spring/p3.jpg" class="d-block" alt="Air spring">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#Air_spring" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Air_spring" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Air spring </h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                    <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                        <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <div id="Railway_Air_Suspension_Bellow" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Railway_Air_Suspension_Bellow/p1.jpg" class="d-block" alt="Air spring">
                                    
                                </div>
                                <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Railway_Air_Suspension_Bellow/p2.jpg" class="d-block" alt="Air spring">
                                </div>
                                <!-- <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Spring/p3.jpg" class="d-block" alt="Air spring">
                                </div> -->
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#Railway_Air_Suspension_Bellow" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Railway_Air_Suspension_Bellow" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">Railways Suspension Bellow  </h5>
                            <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content br_6">
                                <!-- <div class="modal-header border-0">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                </div> -->
                                <div class="modal-body pb-6 pt-6 text-left">
                                    <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="row">
                                    <div class="col-lg-auto col-sm-auto">
                                        <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-sm-8">
                                        <h3>Single Arch Expansion Bellow</h3>
                                        <p class="mb-0 fs_12">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div> -->
                                </div>
                            </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>
                </div>
                </div>

                <!-- container -5 -->
                <div class="container px-0 py-4 list hide container-list" id='five'>
                <div class=" product_grid_container">
                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <div id="PTFE_Stainless_Steel_Flange" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <!-- <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/PTFE_Stainless _Steel_Flange/p1.jpg" class="d-block" alt="PTFE Stainless Steel Flange">
                                    
                                    </div>
                                    <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/PTFE_Stainless _Steel_Flange/p2.jpg" class="d-block" alt="PTFE Stainless Steel Flange">
                                    </div>
                                    <!-- <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#PTFE_Stainless_Steel_Flange" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#PTFE_Stainless_Steel_Flange" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">PTFE with Stainless Steel Flange</h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                        <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                            <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <div id="PTFE_Expansion_Joint" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <!-- <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/Rubber_Bellow_Lined_PTFE_Expansion_Joint/p1.jpg" class="d-block" alt="Air spring">
                                    
                                    </div>
                                </div>
                                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#PTFE_Expansion_Joint" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button> -->
                                <!-- <button class="carousel-control-next" type="button" data-bs-target="#PTFE_Expansion_Joint" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button> -->
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Rubber Bellow Lined PTFE Expansion Joint</h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                    <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                        <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <div id="SS_Bellow_Lined" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <!-- <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/SS_Bellow_Lined_PTFE_Expansion/p1.jpg" alt="PTFE Stainless Steel Flange">
                                    
                                </div>
                                <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/SS_Bellow_Lined_PTFE_Expansion/p2.jpg" class="d-block" alt="PTFE Stainless Steel Flange">
                                </div>
                                <!-- <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Union expansion bellow">
                                </div> -->
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#SS_Bellow_Lined" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#SS_Bellow_Lined" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">SS Bellow Lined PTFE Expansion</h5>
                            <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                    <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                        <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>
                </div>
                </div>

                <!-- container -6 -->
                <div class="container px-0 py-4 list hide container-list" id='six'>
                <div class="product_grid_container">

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <div id="Natural_Rubber_bellow" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Natural_Rubber_bellow/p1.jpg" class="d-block" alt="Natural Rubber bellow">
                                    
                                </div>
                                <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Natural_Rubber_bellow/p2.jpg" class="d-block" alt="Natural Rubber bellow">
                                </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#Natural_Rubber_bellow" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Natural_Rubber_bellow" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">Natural Rubber Bellow </h5>
                            <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                    <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                        <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <div id="Protective_Silicon_Bellow" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/protective_Silicon_bellow/p1.jpg" class="d-block" alt="Protective Silicon Bellow">
                                    
                                </div>
                                <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/protective_Silicon_bellow/p2.jpg" class="d-block" alt="Protective Silicon Bellow">
                                </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#Protective_Silicon_Bellow" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Protective_Silicon_Bellow" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">Protective Silicon Bellow </h5>
                            <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                    <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                        <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <div id="Canvas_Bellow" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Canvas_Bellow/p1.jpeg" class="d-block" alt="Canvas Bellow">
                                    
                                    </div>
                                    <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Canvas_Bellow/p2.png" class="d-block" alt="Canvas Bellow">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#Canvas_Bellow" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Canvas_Bellow" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Canvas Bellow</h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                        <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                            <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <div id="Leather_Bellow" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Leather_Bellow/p1.jpg" class="d-block" alt="Leather Bellow">
                                    
                                </div>
                                <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Leather_Bellow/p2.jpg" class="d-block" alt="Leather Bellow">
                                </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#Leather_Bellow" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Leather_Bellow" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">Leather Bellow</h5>
                            <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                    <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                        <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>
                </div>
                </div>

                <!-- container -7-->
                <div class="container px-0 py-4 list hide container-list" id='seven'>
                <div class=" product_grid_container">
                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <div id="Rectangular_Type_Bus_Duct_Bellow" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <!-- <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Rectangular_Type_Bus_Duct_Bellow/p1.jpeg" class="d-block" alt="Rectangular Type Bus Duct Bellow">
                                    
                                    </div>
                                    <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Rectangular_Type_Bus_Duct_Bellow/p2.jpg" class="d-block" alt="Rectangular Type Bus Duct Bellow">
                                    </div>
                                    <!-- <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#Rectangular_Type_Bus_Duct_Bellow" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Rectangular_Type_Bus_Duct_Bellow" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Rectangular Type Bus Duct Bellow</h5>
                                <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                        <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                            <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <div id="Round_Type_Bus_Duct_Bellow" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <!-- <div class="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" class="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Round_Type_Bus_Duct_Bellow/p1.jpg" class="d-block" alt="Round Type Bus Duct Bellow">
                                    
                                </div>
                                
                                </div>
                                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#Round_Type_Bus_Duct_Bellow" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                                </button> -->
                                <!-- <button class="carousel-control-next" type="button" data-bs-target="#Round_Type_Bus_Duct_Bellow" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                                </button> -->
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">Round Type Bus Duct Bellow</h5>
                            <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                    <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                        <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div class="grid-item px-0 product_card_outer">
                        <div class="card text-center">
                            <div id="Railway_Rectangular_bellow" class="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Railway_Rectangular_Bellow/p1.jpg" class="d-block" alt="Railway Rectangular bellow">
                                    
                                </div>
                                <div class="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Railway_Rectangular_Bellow/p2.png" class="d-block" alt="Railway Rectangular bellow">
                                    
                                </div>
                                
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#Railway_Rectangular_bellow" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#Railway_Rectangular_bellow" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">Railway Rectangular Bellow</h5>
                            <p class="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content br_6">
                                    <!-- <div class="modal-header border-0">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div class="modal-body pb-6 pt-6 text-left">
                                    <button type="button" class="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div class="row">
                                        <div class="col-lg-auto col-sm-auto">
                                        <div class="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div class="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p class="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>
                </div>
                </div> */}
            </section>
        </div>
        <Footer />
        </>
    )
}

export default NewProduct