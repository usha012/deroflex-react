import React from 'react'
import Footer from '../../../Components/footer'
import Header from '../../../Components/header';
import { Table } from 'react-bootstrap';

import BannerImage from "../../../Assets/Images/upgrade_products/Flexible_Hose/product_view_bg.jpg";
import HouseNutFitting_1 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p1.jpg"
import HouseNutFitting_2 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p2.jpg"
import HouseNutFitting_3 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p3.jpg"
import FlangeBellowWelded_1 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Flange_With_Bellow_Welded/p2.jpg";
import FlangeBellowWelded_2 from '../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Flange_With_Bellow_Welded/p1.jpg'

import icon1 from "../../../Assets/Images/icon/icon1.png"
import icon2 from "../../../Assets/Images/icon/icon2.png"
import icon3 from "../../../Assets/Images/icon/icon3.png"
import icon4 from "../../../Assets/Images/icon/icon4.png"

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const StainlessSteelFlexibleExhaustPipe = () => {
    const industryServices = [
        { id: "01", name: "Mechanical Engineering", icon: icon1, HouseNutFitting: HouseNutFitting_1 },
        { id: "02", name: "Mechanical Engineering", icon: icon2, HouseNutFitting: HouseNutFitting_2 },
        { id: "03", name: "Mechanical Engineering", icon: icon3, HouseNutFitting: HouseNutFitting_3 },
        { id: "04", name: "Mechanical Engineering", icon: icon4, HouseNutFitting: FlangeBellowWelded_1 },
    ]

    const data = {
        pageBannerImage: BannerImage,
        pageImage: FlangeBellowWelded_1,
        pageTitle: "Lorem Ipsum",
        pageDescription: "Deroflex  is a manufacturer and professional supplier of Flexible Hose Pipes with stainless steel or carbon/mild steel flanges as end connections. We can offer SS wire Braided Flexible Hoses with flanges in a variety of configurations, with stainless steel 304 or stainless steel 316 wire braiding SS wire braided flexible hoses with flanges manufactured by Deroflex  have large pressure and temperature capacities, and is resistant to bursting cracking, and crushing while being quite flexible and resistant to vibration.We are a specialist manufacturer of SS 304 Braided Flexible Metal Hose Pipe with Flange ends. Since our inception, Deroflex  has been a renowned name in manufacturing Flexible Hoses with Flanges for the most demanding applications. Our stainless steel braided flexible hose with flanges are used by customers in chemical, oil and gas, food processing, pharmaceutical industries, and power generation.",
        pageimageDescription: "Deroflex  has in-house manufacturing for stainless steel flanges and stainless steel pipe fittings making it one of the fastest produce and supplier of flange end corrugated flexible hoses in Kolkata  India Flexible Metal hoses are commonly known by many names such as stainless steel hose, braided steel hose steel braided lines, and flexible metallic hoses.",
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
        industrialAreas: {
            title: "Industries and Application Areas ",
            description: "Stainless Steel braided flexible hose pipes with flanges are the general purpose product and can be used in applications involving high temperatures and working pressures Outside braiding of AISI 304 stainless steel wire is used, to give maximum pressure resistance and external protection to the hose assembly.",
            points: [
                "Inside Corrugation: SS 304, SS 316, SS 321.",
                "Outside Braiding: SS 304, SS 316.",
                "Layer: Single, Double or Triple Braiding.",
                "Sizes 1/4\" to 12\" in lengths upto 20 MTR's.",
                "Pressure Testing 15 times Working Pressure.",
                "Design Temperature 200°C to 800 C for AISI 321 & 316 - 200°C to 420°C for AISI 304 & 304L.",
                "Test Certificates Available with Materials.",
                "Manufacturing Specification BS 6501: Part 1 1991 / ISO 10380 2004.",
                "End Connections Fixed or Swivel Type Flanges in Stainless Steel. Mild Steel Carbon Steel."
            ]
        }
    }
    return (
        <>
            <Header />
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

                {/* <!-- Advantages --> */}
                <section className='bg_gray_200'>
                    <div className='container p-5 mb-5'>
                        <div className='row'>
                            <div className='col-12'>
                                <h3 class="heading2-commn f-w600 ">We produce ss wire braided flexible hose pipes with various type of end fittings carbon steel, mild steel, stainless steel & brass for stainless steel annular corrugated metallic flexible hoses. The end connections are either TIG ( argon) welded or brazed</h3>
                            </div>
                            <div className='col-12'>
                                <ul className='position-relative'>
                                    <li className='li_marker_arrow_r ps-4 mb-2'>SS Wire Braided Flexible Hose Pipes with Flange Fittings - Round Flange, Square Flange, Custom Flanges.</li>
                                    <li className='li_marker_arrow_r ps-4 mb-2'>SS Wire Braided Flexible Hose Pipes with Union Fittings - Stainless Steel, Carbon Steel, Mild Steel, Brass, Coper.</li>
                                    <li className='li_marker_arrow_r ps-4 mb-2'>SS Wire Braided Flexible Metal Hose Pipes with Threaded Fittings - BSP, BSPT, NPT, UNUF, JIC.</li>
                                    <li className='li_marker_arrow_r ps-4 mb-2'> SS Wire Braided Flexible Metal Hose Pipes with Tri Clover - TC Ferrule, Tri Clamp, Gaskets.</li>
                                    <li className='li_marker_arrow_r ps-4 mb-2'>SS Wire Braided Flexible Metal Hose Pipes with Camlock & Quick Release Couplings.</li>
                                    <li className='li_marker_arrow_r ps-4 mb-2'>SS Wire Braided Flexible Metal Hose Pipes with Pipes, Elbows, Bends</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- Industries and application areas --> */}
                <div className='container p-5  pb-2 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            {/* <h2 class="heading2-commn f-w600 ">{data?.industrialAreas?.title}</h2> */}
                        </div>
                        <div className="col-12">
                            <p className='fs_16'>{data?.industrialAreas?.description}</p>
                        </div>
                        <div className='col-6'>
                            <ul className='position-relative py-5'>
                                {
                                    data?.industrialAreas?.points?.map(el => <li className='li_marker_arrow_r ps-4 mb-2 fs_16'>{el}</li>)
                                }

                            </ul>
                        </div>
                        <div className='col-6'>
                            <img src={FlangeBellowWelded_2} />
                        </div>
                    </div>
                </div>

                {/* Fixed Flange or Swivel/Loose Flanges */}
                <div className='container mb-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="small_text_outer">
                                <div className="small_text_primary d-flex align-items-baseline">
                                    <div className="f-34 f-w400">Fixed Flange or Swivel/Loose Flanges </div>
                                    <div className="sep-leaf-right-commn"></div>
                                </div>
                            </div>
                            <p>British Standard Table D E F H [ressure Rated Flanges PN10 PN16. PN25, DIN, ISO ANSI/ASME Standard ANSI B165 ASA 150# ASA 300# ASA 600# JIS Flange Standard 5k 10k Threaded Flanges Butt Weld Flanges Custom Made Flanges Slip On Welded & Others available Custom flanges as per Customer Specifications - Fixed Flanges or Loose Flanges</p>
                        </div>
                    </div>
                </div>
                {/* MOC of Flanges Materials */}
                <div className='container mb-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="small_text_outer">
                                <div className="small_text_primary d-flex align-items-baseline">
                                    <div className="f-34 f-w400">MOC of Flanges Materials </div>
                                    <div className="sep-leaf-right-commn"></div>
                                </div>
                            </div>
                            <p>Stainless Steel 304/304L Flanges Stainless Steel 316/3161 Flanges Mild Steel/Carbon Steel Flange</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default StainlessSteelFlexibleExhaustPipe
