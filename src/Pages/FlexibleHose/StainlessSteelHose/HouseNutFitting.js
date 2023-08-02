import React from 'react';
import { Table } from 'react-bootstrap';

import BannerImage from "../../../Assets/Images/upgrade_products/Flexible_Hose/product_view_bg.jpg";
import HouseNutFitting_1 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p1.jpg"
import HouseNutFitting_2 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p2.jpg"
import HouseNutFitting_3 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p3.jpg"
import HouseNutFitting_4 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p4.jpg";


import icon1 from "../../../Assets/Images/icon/icon1.png"
import icon2 from "../../../Assets/Images/icon/icon2.png"
import icon3 from "../../../Assets/Images/icon/icon3.png"
import icon4 from "../../../Assets/Images/icon/icon4.png"

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
const HouseNutFitting = () => {

    const industryServices = [
        { id: "01", name: "Mechanical Engineering", icon: icon1, HouseNutFitting: HouseNutFitting_1 },
        { id: "02", name: "Mechanical Engineering", icon: icon2, HouseNutFitting: HouseNutFitting_2 },
        { id: "03", name: "Mechanical Engineering", icon: icon3, HouseNutFitting: HouseNutFitting_3 },
        { id: "04", name: "Mechanical Engineering", icon: icon4, HouseNutFitting: HouseNutFitting_4 },
    ]

    const data = {
        pageBannerImage: BannerImage,
        pageImage: HouseNutFitting_4,
        pageTitle: "Lorem Ipsum",
        pageDescription: "Deroflex offer female thread stainless steel flexible hose pipe assembly comprises of the hose and the end fittings, and are determined by the application in which the hose assembly is going to be placed. SS flexible braided hose is mainly composed of flexible body (corrugated pipe), braided reinforced mesh cover and carbon steel material swivel nut ends in different forms. the inner metal hose is spiral or annular shape thin wall stainless steel bellows, outer mesh is weaved by stainless steel wire or steel belt by certain specification. the corrugated metal hose is made by longitudinal seam stainless steel thin wall hose, using high precision plasticity deformation technology, the elastic characteristic of bellows outline decides hose’s flexibility and fatigue resistance. flexible braided hose can easily absorb all kinds of movement transformation and cyclic loading, especially satisfying compensation for larger displacement, plays an important role on thermal expansion absorption, vibration adsorption of pipeline systems.",
        pageimageDescription: "A swivel nut connect ss flexible braided hose assembly comprises of the hose and the end fittings, and are determined by the application in which the hose assembly is going to be placed. Compared to rubber and other materials which are used for hose pipes, ss flexible braided hose assemblies are an excellent choice for a variety of industrial usage and are suitable for the most demanding technical specification.",
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
        <div className="productview_wrapper">
            <div className="row">
                <img src={data?.pageBannerImage} className="mainBannerImg" />
            </div>
            <div className="container mb-3">
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
                        <p>{data?.pageimageDescription}</p>
                    </div>
                </div>
            </div>
            {/* Application */}
            <div className='container mb-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="small_text_outer">
                            <div className="small_text_primary d-flex align-items-baseline">
                                <div className="f-34 f-w400">Applications of the female thread stainless steel flexible hose pipe </div>
                                <div className="sep-leaf-right-commn"></div>
                            </div>
                        </div>
                        <ul>
                            <li><span></span>Compensation for misalignment – Reduces stresses</li>
                            <li>Controls vibration – Normal mechanical equipment vibrations are reduced at the connector</li>
                            <li>Reduces noise – High pipe vibration noise is greatly reduced and often eliminated</li>
                            <li>All metal construction available – Eliminates shelf life problems and allows operation at elevated temperatures</li>
                            <li>Absorbs thermal growth motion – Excellent protection for adjacent piping and equipment.</li>
                        </ul>
                    </div>
                </div>

            </div>
            {/* Table content */}
            {/* <!-- Start Services --> */}
            <section className="service_main_section p-tp80 p-btm80">
                <div className="service_bgcolor">

                </div>
                <div className="row mx-0">
                    <div className="col-lg-6 z-1">
                        <div className="service_inner mx-5 px-4">
                            <Table bordered className='table-fixed text_white fs_15'>
                                <thead>
                                    <tr>
                                        <th className="text-center" colSpan={2}>Stainless steel flexible hose pipe specifications</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.tableData?.map(el => (
                                            <tr>
                                                <td>{el?.title}</td>
                                                <td>{el?.description}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service_inner_two">
                            <OwlCarousel className='owl-theme service_owl_carousel' loop autoplay={true} margin={10} nav={false} dots={false}>
                                {
                                    industryServices?.map(el => (
                                        <div className="item" key={el?.id}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="hrz_line d-flex mb-5">
                                                        {/* <h5 className="card-title ms-3">{el?.name}</h5> */}
                                                        <div className='pro_400'>
                                                            <img src={el?.HouseNutFitting} />
                                                        </div>

                                                    </div>
                                                    <div className="row d-flex mx-0 justify-content-between align-items-baseline">
                                                        <div className="card_icon col-lg-6">
                                                            <img src={el?.icon} />
                                                        </div>
                                                        <div className="card_count  col-lg-6">
                                                            <p className="mb-0">{el?.id}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </OwlCarousel>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- End Services --> */}
            {/* bottm keywords */}
            <div className='container-fluid mx-5'>
                <div className='row text-center'>
                    <div className='col-12'>
                        <p className='small_text_primary fs_29'>  Food industry, Chemical industry, Marine industry, Steel plant, Power generation, Heating and ventilation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HouseNutFitting
