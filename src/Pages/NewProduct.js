import React, { useState } from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import Modal from 'react-modal';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import RubberBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/rubber_bellow.png"
    import SingleArchExpansionJoint_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p1.jpg"
    import SingleArchExpansionJoint_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p2.png"
    import SingleArchExpansionJoint_3 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p3.jpeg"

    import DoubleArchExpansionJoint_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Doubel_Arch_Expansion_Bellow/p1.jpeg"
    import DoubleArchExpansionJoint_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Doubel_Arch_Expansion_Bellow/p2.jpeg"
    import DoubleArchExpansionJoint_3 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Doubel_Arch_Expansion_Bellow/p3.jpeg"

    import ElbowExpansionJoint_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Elbow_Expansion_Bellow/p1.jpg"
    import ElbowExpansionJoint_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Elbow_Expansion_Bellow/p2.jpeg"

    import ReducerExpansionJoint_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Reducer_Expansion_Bellow/p1.jpeg"
    
    import UnionExpansionJoint_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Union_Expansion_Bellow/p1.jpg"

import StainlessSteel from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/stainless_steel.png"
    import ExpansionJointWelding_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Expansion_Joint_Welded_Ending/p1.jpg"
    import ExpansionJointWelding_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Expansion_Joint_Welded_Ending/p2.jpg"

    import SmallMetalBellow_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Small_Metal_Bellow/p1.jpg"

    import StainlessSteelExpansion_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Stainless_Steel_Expnsion_Bellow/p1.jpg"
    import StainlessSteelExpansion_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Stainless_Steel_Expnsion_Bellow/p2.jpg"

    import RectangularMetallicExpansion_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Rectangular_Metallic_Expansion_Joint/p1.jpg"
    import RectangularMetallicExpansion_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Rectangular_Metallic_Expansion_Joint/p2.jpeg"

import FabricBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/febric_bellow.png"
    import RectangularTypeFabricExpansion_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Rectangular_Type_Fabric_Expansion_Joint/p1.jpg"

    import FabricExpansionJoint_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Fabric_Expansion_Joint/p1_new.png"
    import FabricExpansionJoint_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Fabric_Expansion_Joint/p2.jpg"

    
import PneumaticAirBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/pneumatic_air_bellow.png"
import PTFRExpansionJoint from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/PTFE_expansion_joints.png"
import ProtectiveBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/protective_bellow.png"
import BusDuctBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/bus_duct_bellow.png"
import ProductCard from '../Components/productCard';

const NewProduct = () => {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
        overlay: {
            zIndex: 1000,
            background: "rgba(0, 0, 0, 0.5)"
        }
    }   

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
                    images: [ SingleArchExpansionJoint_1, SingleArchExpansionJoint_2, SingleArchExpansionJoint_3 ]
                },
                {
                    id: "02", 
                    title: "Double Arch Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: true,
                    redirectLink: "https://www.google.com",
                    images: [ DoubleArchExpansionJoint_1, DoubleArchExpansionJoint_2, DoubleArchExpansionJoint_3 ]
                },
                {
                    id: "03", 
                    title: "Elbow Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: true,
                    redirectLink: "https://www.google.com",
                    images: [ ElbowExpansionJoint_1, ElbowExpansionJoint_2 ]
                },
                {
                    id: "04", 
                    title: "Reducer Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: true,
                    redirectLink: "https://www.google.com",
                    images: [ ReducerExpansionJoint_1, ReducerExpansionJoint_1]
                },
                {
                    id: "05", 
                    title: "Union Rubber Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: true,
                    redirectLink: "https://www.google.com",
                    images: [ UnionExpansionJoint_1, UnionExpansionJoint_1 ]
                }
            ]
        },
        {
            id: "two", 
            title: "Stainless Steel Bellow", 
            image: StainlessSteel,
            products: [
                {
                    id: "01",
                    title: "Expansion Joint Welded Ending", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ ExpansionJointWelding_1, ExpansionJointWelding_2]
                },
                {
                    id: "02",
                    title: "Small Metal Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ SmallMetalBellow_1, SmallMetalBellow_1]
                },
                {
                    id: "03",
                    title: "Stainless Steel Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ StainlessSteelExpansion_1, StainlessSteelExpansion_2]
                },
                {
                    id: "04",
                    title: "Rectangular Metallic Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ RectangularMetallicExpansion_1, RectangularMetallicExpansion_2]
                }
            ]
        },        
        {
            id: "three", 
            title: "Febric Bellow ", 
            image: FabricBellow,
            products: [
                {
                    id: "01",
                    title: "Rectangular Fabric Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ RectangularTypeFabricExpansion_1, RectangularTypeFabricExpansion_1]
                },
                {
                    id: "02",
                    title: "Fabric Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ FabricExpansionJoint_1, FabricExpansionJoint_2]
                }
            ]
        },
        {
            id: "four", 
            title: "Pneumatic Air Bellow", 
            image: PneumaticAirBellow,
            products: [
                {
                    id: "01",
                    title: "Expansion Joint Welded Ending", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ ExpansionJointWelding_1, ExpansionJointWelding_2]
                },
                {
                    id: "02",
                    title: "Small Metal Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ SmallMetalBellow_1, SmallMetalBellow_1]
                },
                {
                    id: "03",
                    title: "Stainless Steel Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ StainlessSteelExpansion_1, StainlessSteelExpansion_2]
                },
                {
                    id: "04",
                    title: "Rectangular Metallic Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ RectangularMetallicExpansion_1, RectangularMetallicExpansion_2]
                }
            ]
        },
        {
            id: "five", 
            title: "PTFE Bellow", 
            image: PTFRExpansionJoint,
            products: [
                {
                    id: "01",
                    title: "Expansion Joint Welded Ending", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ ExpansionJointWelding_1, ExpansionJointWelding_2]
                },
                {
                    id: "02",
                    title: "Small Metal Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ SmallMetalBellow_1, SmallMetalBellow_1]
                },
                {
                    id: "03",
                    title: "Stainless Steel Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ StainlessSteelExpansion_1, StainlessSteelExpansion_2]
                },
                {
                    id: "04",
                    title: "Rectangular Metallic Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ RectangularMetallicExpansion_1, RectangularMetallicExpansion_2]
                }
            ]
        },
        {
            id: "six", 
            title: "Protective bellow", 
            image: ProtectiveBellow,
            products: [
                {
                    id: "01",
                    title: "Expansion Joint Welded Ending", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ ExpansionJointWelding_1, ExpansionJointWelding_2]
                },
                {
                    id: "02",
                    title: "Small Metal Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ SmallMetalBellow_1, SmallMetalBellow_1]
                },
                {
                    id: "03",
                    title: "Stainless Steel Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ StainlessSteelExpansion_1, StainlessSteelExpansion_2]
                },
                {
                    id: "04",
                    title: "Rectangular Metallic Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ RectangularMetallicExpansion_1, RectangularMetallicExpansion_2]
                }
            ]
        },
        {
            id: "seven", 
            title: "Bus Duct Bellow", 
            image: BusDuctBellow,
            products: [
                {
                    id: "01",
                    title: "Expansion Joint Welded Ending", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ ExpansionJointWelding_1, ExpansionJointWelding_2]
                },
                {
                    id: "02",
                    title: "Small Metal Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ SmallMetalBellow_1, SmallMetalBellow_1]
                },
                {
                    id: "03",
                    title: "Stainless Steel Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ StainlessSteelExpansion_1, StainlessSteelExpansion_2]
                },
                {
                    id: "04",
                    title: "Rectangular Metallic Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: false,
                    redirectLink: "https://www.google.com",
                    images: [ RectangularMetallicExpansion_1, RectangularMetallicExpansion_2]
                }
            ]
        }
    ]

    const productOwlCarouselSetting = {
        loop:true,
        margin:10,
        autoplay:true,
        nav:true,
        dots:false,
        responsive:{ 0:{ items:1 }, 600:{ items:3 }, 1000:{ items:5 } }
    }

    const [displayCard, setDisplayCard] = useState("one")
    const [modal, setModal] = useState({data: {}, show: false})

    return (
        <>
        <Header />
        <div className="flexible_pipe_system products_category">

            {/* <!-- top header --> */}
            <section>
                <div className="container bg_gray_200">
                    <div className="row mx-0 product_top_header ps-3 pe-3 pt-5 pb-5">
                        <div className="col-lg-4">
                            <p className="mb-0 fs_12">Lorem ipsum dolor sit, us, debitis qui sed totam autem quam sapiente! </p>                
                        </div>
                        <diV className="col-lg-8">
                            <OwlCarousel className='owl-theme product-owl-carousel' {...productOwlCarouselSetting}>
                                {
                                    data?.map(el => (
                                        <div className="item text-center clickme" onClick={() => setDisplayCard(el?.id)} key={el?.id}>
                                            <a className="" href="#" data-tag="seven">
                                                <div className="pro_50 m-auto">
                                                    <img src={el?.image} className="img-fluid"/>
                                                </div>
                                            </a>
                                            <p className="mt-1 mb-1 text_secondary fs_10">{el?.title}</p>
                                        </div> 
                                    ))
                                }
                            </OwlCarousel>
                        </diV>     
                    </div>
                </div>
            </section>

            {/* <!-- products list --> */}
            <section className="product_list">
                {
                    data?.map(el => el?.id === displayCard
                        ?
                        <div className="container px-0 py-4 list active container-list">
                            <div className=" product_grid_container">
                                {
                                    el?.products?.map(el => <ProductCard card={el} setModal={setModal} />) 
                                }
                            </div>
                        </div>
                        :
                        ""
                    )
                }


                {/* <!-- container -4 -->
                <div className="container px-0 py-4 list hide container-list" id='four'>
                <div className=" product_grid_container">
                    <div className="grid-item px-0 product_card_outer">
                        <div className="card text-center">
                            <!-- <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" className="card-img-top" alt="..."> -->
                            <div id="Air_bellow" className="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <!-- <div className="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" className="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Bellow/p1.jpg" className="d-block" alt="Air bellow">
                                    
                                    </div>
                                    <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Bellow/p2.jpg" className="d-block" alt="Air bellow">
                                    </div>
                                    <!-- <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" className="d-block" alt="Union expansion bellow">
                                    </div> -->
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#Air_bellow" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#Air_bellow" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Air bellow</h5>
                                <p className="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content br_6">
                                    <!-- <div className="modal-header border-0">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        
                                    </div> -->
                                    <div className="modal-body pb-6 pt-6 text-left">
                                        <button type="button" className="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="row">
                                        <div className="col-lg-auto col-sm-auto">
                                            <div className="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p className="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    <!-- <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div className="grid-item px-0 product_card_outer">
                        <div className="card text-center">
                            <div id="Air_spring" className="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <!-- <div className="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" className="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Spring/p1.jpg" className="d-block" alt="Air spring">
                                    
                                    </div>
                                    <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Spring/p2.jpg" className="d-block" alt="Air spring">
                                    </div>
                                    <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Spring/p3.jpg" className="d-block" alt="Air spring">
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#Air_spring" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#Air_spring" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Air spring </h5>
                                <p className="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content br_6">
                                    <!-- <div className="modal-header border-0">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div className="modal-body pb-6 pt-6 text-left">
                                    <button type="button" className="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div className="row">
                                        <div className="col-lg-auto col-sm-auto">
                                        <div className="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p className="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div className="grid-item px-0 product_card_outer">
                        <div className="card text-center">
                            <div id="Railway_Air_Suspension_Bellow" className="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Railway_Air_Suspension_Bellow/p1.jpg" className="d-block" alt="Air spring">
                                    
                                </div>
                                <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Railway_Air_Suspension_Bellow/p2.jpg" className="d-block" alt="Air spring">
                                </div>
                                <!-- <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Spring/p3.jpg" className="d-block" alt="Air spring">
                                </div> -->
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#Railway_Air_Suspension_Bellow" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#Railway_Air_Suspension_Bellow" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">Railways Suspension Bellow  </h5>
                            <p className="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content br_6">
                                <!-- <div className="modal-header border-0">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                </div> -->
                                <div className="modal-body pb-6 pt-6 text-left">
                                    <button type="button" className="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div className="row">
                                    <div className="col-lg-auto col-sm-auto">
                                        <div className="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-sm-8">
                                        <h3>Single Arch Expansion Bellow</h3>
                                        <p className="mb-0 fs_12">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <!-- <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
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
                <div className="container px-0 py-4 list hide container-list" id='five'>
                <div className=" product_grid_container">
                    <div className="grid-item px-0 product_card_outer">
                        <div className="card text-center">
                            <div id="PTFE_Stainless_Steel_Flange" className="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <!-- <div className="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" className="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/PTFE_Stainless _Steel_Flange/p1.jpg" className="d-block" alt="PTFE Stainless Steel Flange">
                                    
                                    </div>
                                    <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/PTFE_Stainless _Steel_Flange/p2.jpg" className="d-block" alt="PTFE Stainless Steel Flange">
                                    </div>
                                    <!-- <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" className="d-block" alt="Union expansion bellow">
                                    </div> -->
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#PTFE_Stainless_Steel_Flange" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#PTFE_Stainless_Steel_Flange" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">PTFE with Stainless Steel Flange</h5>
                                <p className="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content br_6">
                                    <!-- <div className="modal-header border-0">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        
                                    </div> -->
                                    <div className="modal-body pb-6 pt-6 text-left">
                                        <button type="button" className="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="row">
                                        <div className="col-lg-auto col-sm-auto">
                                            <div className="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p className="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    <!-- <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div className="grid-item px-0 product_card_outer">
                        <div className="card text-center">
                            <div id="PTFE_Expansion_Joint" className="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <!-- <div className="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" className="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/Rubber_Bellow_Lined_PTFE_Expansion_Joint/p1.jpg" className="d-block" alt="Air spring">
                                    
                                    </div>
                                </div>
                                <!-- <button className="carousel-control-prev" type="button" data-bs-target="#PTFE_Expansion_Joint" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button> -->
                                <!-- <button className="carousel-control-next" type="button" data-bs-target="#PTFE_Expansion_Joint" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button> -->
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Rubber Bellow Lined PTFE Expansion Joint</h5>
                                <p className="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content br_6">
                                    <!-- <div className="modal-header border-0">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div className="modal-body pb-6 pt-6 text-left">
                                    <button type="button" className="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div className="row">
                                        <div className="col-lg-auto col-sm-auto">
                                        <div className="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p className="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div className="grid-item px-0 product_card_outer">
                        <div className="card text-center">
                            <div id="SS_Bellow_Lined" className="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <!-- <div className="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" className="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/SS_Bellow_Lined_PTFE_Expansion/p1.jpg" alt="PTFE Stainless Steel Flange">
                                    
                                </div>
                                <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/SS_Bellow_Lined_PTFE_Expansion/p2.jpg" className="d-block" alt="PTFE Stainless Steel Flange">
                                </div>
                                <!-- <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" className="d-block" alt="Union expansion bellow">
                                </div> -->
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#SS_Bellow_Lined" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#SS_Bellow_Lined" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">SS Bellow Lined PTFE Expansion</h5>
                            <p className="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content br_6">
                                    <!-- <div className="modal-header border-0">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div className="modal-body pb-6 pt-6 text-left">
                                    <button type="button" className="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div className="row">
                                        <div className="col-lg-auto col-sm-auto">
                                        <div className="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p className="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
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
                <div className="container px-0 py-4 list hide container-list" id='six'>
                <div className="product_grid_container">

                    <div className="grid-item px-0 product_card_outer">
                        <div className="card text-center">
                            <div id="Natural_Rubber_bellow" className="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Natural_Rubber_bellow/p1.jpg" className="d-block" alt="Natural Rubber bellow">
                                    
                                </div>
                                <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Natural_Rubber_bellow/p2.jpg" className="d-block" alt="Natural Rubber bellow">
                                </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#Natural_Rubber_bellow" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#Natural_Rubber_bellow" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">Natural Rubber Bellow </h5>
                            <p className="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content br_6">
                                    <!-- <div className="modal-header border-0">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div className="modal-body pb-6 pt-6 text-left">
                                    <button type="button" className="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div className="row">
                                        <div className="col-lg-auto col-sm-auto">
                                        <div className="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p className="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div className="grid-item px-0 product_card_outer">
                        <div className="card text-center">
                            <div id="Protective_Silicon_Bellow" className="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/protective_Silicon_bellow/p1.jpg" className="d-block" alt="Protective Silicon Bellow">
                                    
                                </div>
                                <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/protective_Silicon_bellow/p2.jpg" className="d-block" alt="Protective Silicon Bellow">
                                </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#Protective_Silicon_Bellow" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#Protective_Silicon_Bellow" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">Protective Silicon Bellow </h5>
                            <p className="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content br_6">
                                    <!-- <div className="modal-header border-0">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div className="modal-body pb-6 pt-6 text-left">
                                    <button type="button" className="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div className="row">
                                        <div className="col-lg-auto col-sm-auto">
                                        <div className="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p className="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div className="grid-item px-0 product_card_outer">
                        <div className="card text-center">
                            <div id="Canvas_Bellow" className="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Canvas_Bellow/p1.jpeg" className="d-block" alt="Canvas Bellow">
                                    
                                    </div>
                                    <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Canvas_Bellow/p2.png" className="d-block" alt="Canvas Bellow">
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#Canvas_Bellow" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#Canvas_Bellow" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Canvas Bellow</h5>
                                <p className="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content br_6">
                                    <!-- <div className="modal-header border-0">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        
                                    </div> -->
                                    <div className="modal-body pb-6 pt-6 text-left">
                                        <button type="button" className="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="row">
                                        <div className="col-lg-auto col-sm-auto">
                                            <div className="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p className="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    <!-- <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div className="grid-item px-0 product_card_outer">
                        <div className="card text-center">
                            <div id="Leather_Bellow" className="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Leather_Bellow/p1.jpg" className="d-block" alt="Leather Bellow">
                                    
                                </div>
                                <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Leather_Bellow/p2.jpg" className="d-block" alt="Leather Bellow">
                                </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#Leather_Bellow" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#Leather_Bellow" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">Leather Bellow</h5>
                            <p className="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content br_6">
                                    <!-- <div className="modal-header border-0">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div className="modal-body pb-6 pt-6 text-left">
                                    <button type="button" className="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div className="row">
                                        <div className="col-lg-auto col-sm-auto">
                                        <div className="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p className="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
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
                <div className="container px-0 py-4 list hide container-list" id='seven'>
                <div className=" product_grid_container">
                    <div className="grid-item px-0 product_card_outer">
                        <div className="card text-center">
                            <div id="Rectangular_Type_Bus_Duct_Bellow" className="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <!-- <div className="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" className="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Rectangular_Type_Bus_Duct_Bellow/p1.jpeg" className="d-block" alt="Rectangular Type Bus Duct Bellow">
                                    
                                    </div>
                                    <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Rectangular_Type_Bus_Duct_Bellow/p2.jpg" className="d-block" alt="Rectangular Type Bus Duct Bellow">
                                    </div>
                                    <!-- <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p3.jpeg" className="d-block" alt="Union expansion bellow">
                                    </div> -->
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#Rectangular_Type_Bus_Duct_Bellow" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#Rectangular_Type_Bus_Duct_Bellow" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Rectangular Type Bus Duct Bellow</h5>
                                <p className="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content br_6">
                                    <!-- <div className="modal-header border-0">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        
                                    </div> -->
                                    <div className="modal-body pb-6 pt-6 text-left">
                                        <button type="button" className="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="row">
                                        <div className="col-lg-auto col-sm-auto">
                                            <div className="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p className="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    <!-- <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div className="grid-item px-0 product_card_outer">
                        <div className="card text-center">
                            <div id="Round_Type_Bus_Duct_Bellow" className="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <!-- <div className="pro_200">
                                        <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg" className="d-block" alt="Union expansion bellow">
                                    </div> -->
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Round_Type_Bus_Duct_Bellow/p1.jpg" className="d-block" alt="Round Type Bus Duct Bellow">
                                    
                                </div>
                                
                                </div>
                                <!-- <button className="carousel-control-prev" type="button" data-bs-target="#Round_Type_Bus_Duct_Bellow" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                                </button> -->
                                <!-- <button className="carousel-control-next" type="button" data-bs-target="#Round_Type_Bus_Duct_Bellow" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                                </button> -->
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">Round Type Bus Duct Bellow</h5>
                            <p className="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content br_6">
                                    <!-- <div className="modal-header border-0">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div className="modal-body pb-6 pt-6 text-left">
                                    <button type="button" className="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div className="row">
                                        <div className="col-lg-auto col-sm-auto">
                                        <div className="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p className="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                    </div> -->
                                </div>
                                </div>
                            </div>
                            <!-- end quick view modal -->
                        </div>
                    </div>

                    <div className="grid-item px-0 product_card_outer">
                        <div className="card text-center">
                            <div id="Railway_Rectangular_bellow" className="carousel slide product_card_slider" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Railway_Rectangular_Bellow/p1.jpg" className="d-block" alt="Railway Rectangular bellow">
                                    
                                </div>
                                <div className="carousel-item">
                                    <img src="../../images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Railway_Rectangular_Bellow/p2.png" className="d-block" alt="Railway Rectangular bellow">
                                    
                                </div>
                                
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#Railway_Rectangular_bellow" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#Railway_Rectangular_bellow" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">Railway Rectangular Bellow</h5>
                            <p className="card-text fs_12">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-commn-bg-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                            </div>
                            <!-- quick view modal -->
                            <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content br_6">
                                    <!-- <div className="modal-header border-0">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    
                                    </div> -->
                                    <div className="modal-body pb-6 pt-6 text-left">
                                    <button type="button" className="btn-close product_detail_close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div className="row">
                                        <div className="col-lg-auto col-sm-auto">
                                        <div className="pro_200">
                                            <img src="../../images/upgrade_products/Flexible_pipe_System/Singel_Arch_Expansion_Bellow/p1.jpg"/>

                                        </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-8">
                                            <h3>Single Arch Expansion Bellow</h3>
                                            <p className="mb-0 fs_12">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum itaque dolore quis quo, adipisci nesciunt cupiditate rem, natus corporis quae magnam repudiandae tenetur repellat. Quam corporis consequuntur alias delectus ad.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                    <!-- <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
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

        <Modal
            isOpen={modal?.show}
            onRequestClose={() => setModal({})}
            style={customStyles}
            contentLabel="Prodyct Modal"
        >
                <div className="modal-body pb-6 pt-6 text-left position-relative">
                    <button type="button" className="btn-close position-absolute" onClick={() => setModal()} style={{right: 0}} data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="row">
                        <div className="col-lg-auto col-sm-auto">
                            <div className="pro_200"> <img src={modal?.data?.images?.[0]}/></div>
                        </div>
                        <div className="col-lg-8 col-sm-8">
                            <h3>{modal?.data?.title}</h3>
                            <p className="mb-0 fs_12">{modal?.data?.description}</p>
                        </div>
                    </div>
                </div>
        </Modal>

        <Footer />
        </>
    )
}

export default NewProduct