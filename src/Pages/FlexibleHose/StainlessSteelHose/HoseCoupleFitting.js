import React from 'react'
import { Table } from 'react-bootstrap';

import BannerImage from "../../../Assets/Images/upgrade_products/Flexible_Hose/product_view_bg.jpg";
import HouseNutFitting_1 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p1.jpg"
import HouseNutFitting_2 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p2.jpg"
import HouseNutFitting_3 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p3.jpg"
import HouseNutFitting_4 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p4.jpg";
import HoseCoupleFitting_1 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/house_with_couple_fitting/p1.jpg"

import HoseCoupleFitting_2 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/house_with_couple_fitting/p2.jpg";


import icon1 from "../../../Assets/Images/icon/icon1.png"
import icon2 from "../../../Assets/Images/icon/icon2.png"
import icon3 from "../../../Assets/Images/icon/icon3.png"
import icon4 from "../../../Assets/Images/icon/icon4.png"

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import Footer from '../../../Components/footer';
import Header from '../../../Components/header';

const HoseCoupleFitting = () => {
    const industryServices = [
        { id: "01", name: "Mechanical Engineering", icon: icon1, HouseNutFitting: HouseNutFitting_1 },
        { id: "02", name: "Mechanical Engineering", icon: icon2, HouseNutFitting: HouseNutFitting_2 },
        { id: "03", name: "Mechanical Engineering", icon: icon3, HouseNutFitting: HouseNutFitting_3 },
        { id: "04", name: "Mechanical Engineering", icon: icon4, HouseNutFitting: HouseNutFitting_4 },
    ]

    const data = {
        pageBannerImage: BannerImage,
        pageImage: HoseCoupleFitting_1,
        pageTitle: "Lorem Ipsum",
        pageDescription: "Deroflex  is a manufacturer and professional supplier of Flexible Hose Pipes with Camlock Coupling as end connections We can offer SS Flexible hoses with Camlock Coupling in a variety of configurations with stainless steel 304 or stainless steel 316 wire braiding.We are a specialist manufacturer of Flexible Metal Hoses, with Camlock Couplings Since our inception Deroflex has been a renowned name in manufacturing SS Flexible Hoses with Camlock Couplings for the most demanding applications Our stainless steel braided flexible hose with Camlock Couplings are used by customers in chemical oil and gas food processing pharmaceutical industries and power generation.",
        pageimageDescription: "",
        tableData: [
            { title: "Pipe material", description: "SS304, SS316L, SS321" },
            { title: "Braided mesh material", description: "SS304 or SS316" },
            { title: "Pipe size", description: "1/4inch-4inch (DN6-DN100mm)" },
            { title: "Pipe type", description: "annular or spiral corrugation" },
            { title: "Connection type", description: "swivel female thread" },
            { title: "Thread standard", description: "Metric, BSP, NPT or JIC, etc" },
            { title: "Connector fittings material", description: "stainless steel or carbon steel" },
            { title: "Working pressure range", description: "0.1-20Mpa(Depend on hose size)" },
            { title: "Working temperature range", description: "-200℃ ~ +500℃" },
            { title: "Overall length", description: "as per your request" },
        ],
    }
    return (
        <>
            <Header />
            <div className="productview_wrapper">
                <div className="row">
                    <img src={data?.pageBannerImage} className="mainBannerImg" />
                </div>
                <div className="container mb-5">
                    <div className="row pt-5">
                        <div className="col-lg-4 mb-3">
                            <div className="pro_100_P m-auto">
                                <img src={data?.pageImage} id="pageImage" />
                            </div>
                        </div>
                        <div className="col-lg-8 position-relative mb-3">
                            <h3>{data?.pageTitleTitle}</h3>
                            <p>{data?.pageDescription}</p>
                            <div className="ask_ques_wrapper">
                                <p className="mb-0 text-capitalize"><a>Ask a question about this product</a></p>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            {/* <p>{data?.pageimageDescription}</p> */}
                        </div>
                    </div>
                </div>

                {/* video section*/}
                <div className='container mb-4'>
                    <div className='row'>
                        <div className='col-8'>
                            {/* <div className="small_text_outer">
                                <div className="small_text_primary d-flex align-items-baseline">
                                    <div className="f-34 f-w400">Applications of the female thread stainless steel flexible hose pipe </div>
                                    <div className="sep-leaf-right-commn"></div>
                                </div>
                            </div> */}
                            <p>Deroflex  has in-house manufacturing for stainless steel flanges and stainless steel pipe fittings making it one of the fastest producer and supplier of flange end corrugated flexible hoses in Kolkata  India fexible Metal hoses are commonly known by many names such as stainless steel hose braided steel hose steel Laided lines and flexible metallic hoses</p>
                            <p>Stainless Steel braided flexible hose pipes with Camlock Couplings are the general purpose product and can be used in applications involving high temperatures and working pressures Outside braiding of AISI 304 Stainless steel wire is used to give maximum pressure resistance and external protection to the hose assembly
                            </p>
                        </div>
                        <div className='col-4'>
                            <div className='pro_400'>
                                <img src={HoseCoupleFitting_2 } />
                            </div>
                        </div>
                    </div>

                </div>

                {/*  */}
                <section className='bg_gray_200'>
                        <div className='container p-5 mb-5'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h3 class="heading2-commn f-w600 ">Key Features of Stainless Steel Flexible Hose Pipes with Camlock  Coupling</h3>
                                    <p>Threaded to BSP BSPT NPT Standard Type A Type B Type C Type D Type E Camlock Coupling welded to Metal hose or crimped to PTFE flexible hose</p>
                                </div>
                                <div className='col-12'>
                                    <ul className='position-relative'>
                                        <li className='li_marker_arrow_r ps-4 mb-2'>Stainless Steel 304 Stainless Steel 316 with Rubber gasket.</li>
                                        <li className='li_marker_arrow_r ps-4 mb-2'>Inside Corrugation: SS 304, SS 316, SS 321 Outside Braiding SS 304, SS 316.</li>
                                        <li className='li_marker_arrow_r ps-4 mb-2'>Layer: Single, Double or Triple Braiding.</li>
                                        <li className='li_marker_arrow_r ps-4 mb-2'>Sizes: 1/4" to 12" in lengths upto 20 MTRs.</li>
                                        <li className='li_marker_arrow_r ps-4 mb-2'>Pressure Testing 15 times Working Pressure.</li>
                                        <li className='li_marker_arrow_r ps-4 mb-2'>Design Temperature 200 °C to 800°C for AISI 321 & 316-200°C to 420°C for AISI 304 & 304L</li>
                                        <li className='li_marker_arrow_r ps-4 mb-2'>Test Certificates: Available with Materials.</li>
                                        <li className='li_marker_arrow_r ps-4 mb-2'>Manufacturing Specification BS 6501 Part 1 1991/ISO 10380 2004.</li>
                                        <li className='li_marker_arrow_r ps-4 mb-2'>End Connections Camlock Coupling welded to Metal hose & Threaded to RSP, BSPT. NPT Standard.</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </section>
            </div>
            <Footer />
        </>
        
    )
}

export default HoseCoupleFitting
