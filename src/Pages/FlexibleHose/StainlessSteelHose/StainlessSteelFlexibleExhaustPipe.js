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

import FlexibleExhaustPipe_1 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Stainless_Steel_Flexible_Exhaust_Pipe/p3.jpg";
import FlexibleExhaustPipe_2 from "../../../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Stainless_Steel_Flexible_Exhaust_Pipe/p4.jpg";

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
        pageImage: FlexibleExhaustPipe_1,
        pageTitle: "Lorem Ipsum",
        pageDescription: "Deroflex  is a manufacturer and professional supplier of Stainless Steel Flexible Exhaust Pipe with both side plane coller welded . Deroflex hose   have large pressure and temperature capacities, and is resistant to bursting cracking,\
        and crushing while being quite flexible and resistant to vibration.",
        pageimageDescription: "Stainless Steel Flexible exhaust pipe is also called automobile exhaust bellows. It is installed in the exhaust pipe between the engine exhaust branch pipe and the muffler to make the entire exhaust system flexibly connected, thereby reducing vibration and noise, and is convenient Install and extend the life of the exhaust muffler system.",

        tableData: [
            { title: "Inner Diameter ", description: "1.5 \" \", 1.75\",2\",2.25\",2.5\",3\", 4\", 6\".  View our Technical Chart for more sizes." },
            { title: "Total Length", description: "4\", 5\", 6\", 7\", 8\", 9\", 10\", 11\", 12\", 13\", 14\", 16\", 18\", 20\" long. Custom Sizes are also manufactured." },
            { title: "Braid Type ", description: "Mesh Type or Round Wire Braided, with Multiple Carrier Braiding." },
            { title: "Design Type ", description: "Single Axial Type for lower movement, or Double Axial Type Joint for greater movement." },
        ],
        tableDatatwo: [
            { title: "Inner Diameter", description: "1.5\", 1.75\",2\",2.25\",2.5\",3\", 4\", 6\". View our Technical Chart for more sizes." },
            { title: "Total Length", description: "4\", 5\", 6\", 7\", 8\", 9\", 10\", 11\", 12\", 13\", 14\", 16\", 18\", 20\" long. Custom Sizes are also manufactured." },
            { title: "Exhaust Flexible Element Type", description: "Exhaust Element with Outer Braid, with both Inner Braid/ Inner Lining." },
            { title: "Braid Type", description: "Round Wire Braid, Mesh Wire Braid." },
        ],
        tableDatathree: [
            { title: "Inner Diameter", description: "1.5\", 1.75\",2\",2.25\",2.5\",3\", 4\", 6\". View our Technical Chart for more sizes." },
            { title: "Total Length", description: "4\", 5\", 6\", 7\", 8\", 9\", 10\", 11\", 12\", 13\", 14\", 16\", 18\", 20\" long. Custom Sizes are also manufactured." },
            { title: "Exhaust Flexible Element Type", description: "Exhaust Element with Outer Braid, with both Inner Braid/ Inner Lining." },
            { title: "Braid Type", description: "Round Wire Braid, Mesh Wire Braid." },
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
                            <p>{data?.pageimageDescription}</p>
                            <div className="ask_ques_wrapper">
                                <p className="mb-0 text-capitalize"><a>Ask a question about this product</a></p>
                            </div>
                        </div>
                        {/* <div className='col-lg-12'>
                            <p>{data?.pageimageDescription}</p>
                        </div> */}
                    </div>
                </div>

                <div className='container py-3'>
                    <div className='row'>
                        <div className='col-8'>
                            <h3 class="heading2-commn f-w600 ">Exhaust Flexible Pipe with Inner braid and Outer braid</h3>
                            <p>
                                Deroflex  internal metal braid reduces the noise and dissipates the heat, as a result of which such a design is more suitable in exhaust systems where the temperature and noise levels are much higher. Apart from this, the internal and external braid together prevents excessive movement, which can cause wear and tear and reduce the life of the exhaust flexible pipe. The internal braid acts as a protective layer, separating
                                the inner thin metal bellow from the corrosive exhaust gases. The bellow is composed of single or
                                twin ply stainless steel sheets, along with the inner and outer stainless steel wire braid.
                            </p>
                        </div>
                        <div className='col-4'>
                            <img src={FlexibleExhaustPipe_2} className='pro_400' />
                        </div>
                    </div>
                </div>


                {/* Table content */}
                <div className='container mb-5'>
                    <div className='row'>
                        <div className="col-12">
                            <Table bordered hover className='table-fixed'>
                                <thead>
                                    <tr>
                                        <th className="text-center" colSpan={2}>Technical Data Sheet </th>
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
                </div>

                {/* Exhaust Flexible Element Material  */}
                <div className='container mb-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="small_text_outer">
                                <div className="small_text_primary d-flex align-items-baseline">
                                    <div className="f-34 f-w400">Exhaust Flexible Element Material</div>
                                    <div className="sep-leaf-right-commn"></div>
                                </div>
                            </div>
                            <p>Stainless Steel 304, Stainless Steel 321, Stainless Steel 316.</p>
                        </div>
                    </div>
                </div>
                {/* Inner & Outer Braid Material :-   */}
                <div className='container mb-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="small_text_outer">
                                <div className="small_text_primary d-flex align-items-baseline">
                                    <div className="f-34 f-w400">Inner & Outer Braid Material</div>
                                    <div className="sep-leaf-right-commn"></div>
                                </div>
                            </div>
                            <p>Stainless Steel 304, Galvanised Mild Steel.</p>
                        </div>
                    </div>
                </div>

                {/* Table content */}
                <div className='container mb-5'>
                    <div className='row'>
                        <div className="col-12">
                            <Table bordered hover className='table-fixed'>
                                <thead>
                                    <tr>
                                        <th className="text-center" colSpan={2}>Exhaust Flexible Element with Weldable Pipe End</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.tableDatatwo?.map(el => (
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
                </div>

                {/*Exhaust Flexible Element Material */}
                <div className='container mb-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="small_text_outer">
                                <div className="small_text_primary d-flex align-items-baseline">
                                    <div className="f-34 f-w400">Exhaust Flexible Element Material</div>
                                    <div className="sep-leaf-right-commn"></div>
                                </div>
                            </div>
                            <p>Stainless Steel 304, Stainless Steel 321, Stainless Steel 316.</p>
                        </div>
                    </div>
                </div>

                
                {/*Inner & Outer Braid Material  */}
                <div className='container mb-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="small_text_outer">
                                <div className="small_text_primary d-flex align-items-baseline">
                                    <div className="f-34 f-w400">Inner & Outer Braid Material </div>
                                    <div className="sep-leaf-right-commn"></div>
                                </div>
                            </div>
                            <p>Stainless Steel 304, Galvanised Mild Steel.</p>
                        </div>
                    </div>
                </div>

                {/*Weldable Pipe End Material  */}
                <div className='container mb-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="small_text_outer">
                                <div className="small_text_primary d-flex align-items-baseline">
                                    <div className="f-34 f-w400">Weldable Pipe End Material </div>
                                    <div className="sep-leaf-right-commn"></div>
                                </div>
                            </div>
                            <p>Stainless Steel 304, Stainless Steel 316, Stainless Steel 321, Galvanised Mild Steel.</p>
                        </div>
                    </div>
                </div>

                {/* Exhaust Flexible Pipe with End Pipe & Flanges*/}
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 class="heading2-commn f-w600 ">Exhaust Flexible Pipe with End Pipe & Flanges</h3>
                            <p>
                                DEROFLEX Exhaust Flexible Hose Pipe With SS Wire Brading Both Side Welded Pipe End  So in such cases, to make things simpler, an end pipe with Schedule 40 thickness is welded to the exhaust flexible pipe connector, which can then be welded to the automobile, irrespective of whether the end connection is a flange or a clamp or just a pipe.
                            </p>
                            <p>
                                After installation, the exhaust flexible element should be checked for any damages and the exhaust system should be checked for leakages.
                            </p>
                        </div>
                    </div>
                </div>


                {/* Table content */}
                <div className='container mb-5'>
                    <div className='row'>
                        <div className="col-12">
                            <Table bordered hover className='table-fixed'>
                                {/* <thead>
                                    <tr>
                                        <th className="text-center" colSpan={2}>Exhaust Flexible Element with Weldable Pipe End</th>
                                    </tr>
                                </thead> */}
                                <tbody>
                                    {
                                        data?.tableDatathree?.map(el => (
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
                </div>

                 {/* Exhaust Flexible Element Material  */}
                 <div className='container mb-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="small_text_outer">
                                <div className="small_text_primary d-flex align-items-baseline">
                                    <div className="f-34 f-w400">Exhaust Flexible Element Material</div>
                                    <div className="sep-leaf-right-commn"></div>
                                </div>
                            </div>
                            <p>Stainless Steel 304, Stainless Steel 321, Stainless Steel 316.</p>
                        </div>
                    </div>
                </div>

                {/* Inner & Outer Braid Material*/}
                <div className='container mb-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="small_text_outer">
                                <div className="small_text_primary d-flex align-items-baseline">
                                    <div className="f-34 f-w400">Inner & Outer Braid Material</div>
                                    <div className="sep-leaf-right-commn"></div>
                                </div>
                            </div>
                            <p>Stainless Steel 304, Galvanised Mild Steel.</p>
                        </div>
                    </div>
                </div>

                {/*End Fittings Material & Standard*/}
                <div className='container mb-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="small_text_outer">
                                <div className="small_text_primary d-flex align-items-baseline">
                                    <div className="f-34 f-w400">End Fittings Material & Standard</div>
                                    <div className="sep-leaf-right-commn"></div>
                                </div>
                            </div>
                            <p>Stainless Steel 304, Stainless Steel 316, Stainless Steel 321, Galvanised Mild Steel, with Standardised Flanges.</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default StainlessSteelFlexibleExhaustPipe
