import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Table } from 'react-bootstrap';

import BannerImage from "../Assets/Images/upgrade_products/Flexible_Hose/product_view_bg.jpg"
import PageImage from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Stainless_Steel_Hose/p1.jpg"

import StainlessSteelHose1 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Stainless_Steel_Hose/p1.jpg"
import StainlessSteelHose2 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Stainless_Steel_Hose/p2.jpeg"

import FlangeBellowWelded1 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Flange_With_Bellow_Welded/p1.jpg"
import FlangeBellowWelded2 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Flange_With_Bellow_Welded/p2.jpg"
import ProductCard from '../Components/productCard'
import Footer from '../Components/footer'
import Header from '../Components/header';
import Dummy2 from '../Assets/Images/dummyImage/dummy2.jpg'


const FlexibleHoseDetail = () => {


    const data = {
        pageBannerImage: BannerImage,
        pageImage: PageImage,
        pageTitle: "Lorem Ipsum",
        pageDescription: "Deroflex  offers corrugated flexible stainless steel hoses from 6mm (1/4’) to up to 300 mm (12’). Apart from the standard pitch, the other two types of Deroflex  corrugated stainless steel hoses available are; open-pitch and close-pitch. Here, in an ‘open-pitch’ corrugated hose flexible hoses in SS AISI 304, 321, 316 & 316-L ,  Deroflex regularly manufactures hoses for highly critical application, the corrugations are more widely spaced, while in a ‘closed-pitch’ corrugated hose, the corrugations are more closely spaced. Stainless steel corrugated flexible hoses manufactured by Deroflex are widely used in fertilizer industries refineries petrochemicals plants chemical and pharmaceuticals plants Stainless steel flexible metal braided hoses and fittings can be used widely in systems like water steam hot oil and gas with their resistance to pressure and flexible structure",
        products: [
            {
                id: "Stainless_Steel_Hose",
                title: "House With Custom Nut Fitting",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                images: [StainlessSteelHose1, StainlessSteelHose2],
                redirect: true,
                redirectLink: "https://www.google.com"
            },
            {
                id: "Flange_With_Bellow_Welded",
                title: "Flange With Bellow Welded",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                images: [FlangeBellowWelded1, FlangeBellowWelded2],
                redirect: true,
                redirectLink: "https://www.google.com"
            },
            {
                id: "Flange_With_Bellow_Welded",
                title: "Stainless Steel Fllexible Exhaust Pipe",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                images: [FlangeBellowWelded1, FlangeBellowWelded2],
                redirect: true,
                redirectLink: "https://www.google.com"
            },
        ],
        tableData: [
            {title: "Hose Materials", description: "SS 304/304L SS 316/316L SS 321"},
            {title: "Braid Materials", description: "SS 304/304L SS 316/316L"},
            {title: "Braid Type", description: "Single Wire Braid Double Wire Braid Triple Wire Braid "},
            {title: "Hose Size", description: `DN6 (1/4" NB) to DN 300 (12" NB)`},
            {title: "Hose Length", description: "Customized Upto 20 MTRs "},
            {title: "End Fittings", description: "Flanges Adaptor. Nut Nipple Pipes Reducer"},
            {title: "End Fitting Materials", description: "Carbon Steel Stainless Steel. Nickel Alloys Mild Steel Copper "},
            {title: "Working Pressure   ", description: "High/ Medium /Low"},
        ],
        industrialAreas: {
            title: "Industries and Application Areas ",
            description: "As one of the leading stainless steel corrugated hose manufacturers, our wide range of hoses are available in several grades of stainless steel and comes with different flexible hose assemblies. These can be used for a variety of industries and application including",
            points: [
                "Refineries, steel plant, paper plant, fertilizer and pharmaceuticals industries.",
                "Lubrication system, Steam, hot water, pneumatic services; and Vacuum system.",
                "Railways, ports & shipyards, cryogenic service, air-conditioning & refrigeration.",
                "Absorption, piping, boilers and vibration."
            ]
        }
    }

    return (
        <>
            <Header />
            <div className="productview_wrapper">
                <div className="row">
                    <img id="pageBannerImage" src={data?.pageBannerImage} className="mainBannerImg" />
                </div>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-lg-4 mb-3">
                            <div className="pro_100_P m-auto">
                                <img src={data?.pageImage} id="pageImage" />
                            </div>
                        </div>
                        <div className="col-lg-8 position-relative mb-3">
                            <h3>{data?.pageTitle}</h3>
                            <p>{data?.pageDescription}</p>
                            <div className="ask_ques_wrapper">
                                {/* <p className="mb-0"><a>Ask Question</a>/ <a>This product</a></p> */}
                                <p className="mb-0 text-capitalize"><a>Ask a question about this product</a></p>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <p>Deroflex has in-house manufacturing for stainless steel flanges and stainless steel pipe fittings making it one of the fastest producer and supplier of flange end corrugated flexible hoses in Kolkata </p>
                        </div>
                    </div>
                </div>

                {/* <!-- products list --> */}
                <section className="product_list mb-4">
                    <div className="container px-0 py-4 list active container-list">
                        <div className=" product_grid_container">
                            {
                                data?.products?.map(el => <ProductCard card={el} key={el?.id} />)
                            }
                        </div>
                    </div>
                </section>

                {/* <!-- Advantages --> */}
                <div className='container bg_gray_200 p-5 mb-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 class="heading2-commn f-w600 ">Advantages of Deroflex Corrugated Stainless Steel Flexible Hoses</h3>
                        </div>
                        <div className='col-12'>
                            <ul className='position-relative'>
                                <li className='li_marker_arrow_r ps-4 mb-2'>Suitable for wide temperature ranges (-270°C to700°C), Deroflex  corrugated flexible pipe (hoses) have a high physical strength.</li>
                                <li className='li_marker_arrow_r ps-4 mb-2'> They are fire & moisture resistant and compensates for thermal expansion-contraction in the piping system.</li>
                                <li className='li_marker_arrow_r ps-4 mb-2'> These hoses are a flexible and quick option for rigid piping in difficult locations. They have a longer life and come with excellent corrosion characteristics.</li>
                                <li className='li_marker_arrow_r ps-4 mb-2'> They are resistant to abrasion, penetration and damage. They also suppress rigid pipe noise transmission while operating under vacuum and high pressures.</li>
                                <li className='li_marker_arrow_r ps-4 mb-2'> Plus, these stainless steel corrugated flexible hoses help adjust/correct misaligned rigid piping and absorb/dampens vibration.</li>
                                <li className='li_marker_arrow_r ps-4 mb-2'>Stainless Steel Corrugated Flexible Hose Pipe Production and Supply   Range </li>
                            </ul>

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
                                        <th className="text-center" colSpan={2}>Stainless Steel Corrugated Flexible Hose Pipes</th>
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

                {/* <!-- Industries and application areas --> */}
                <div className='container  p-5 mb-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h2 class="heading2-commn f-w600 ">{data?.industrialAreas?.title}</h2>
                        </div>
                        <div className="col-12">
                            <p className='fs_18 '>{data?.industrialAreas?.description}</p>
                        </div>
                        <div className='col-6'>
                            <ul className='position-relative py-5'>
                                {
                                    data?.industrialAreas?.points?.map(el => <li className='li_marker_arrow_r ps-4 mb-4 fs_25'>{el}</li>)
                                }
                                
                            </ul>

                        </div>
                        <div className='col-6'>
                            <img src={Dummy2}/>

                        </div>
                    </div>
                </div>
 
                {/*  Question and answer accordion */}
                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='accordion_header fs_28 bg_gray_200'>Why Select a Flexible Metal Hose </Accordion.Header>
                                    <Accordion.Body className='bg_gray_200 fs_16'>
                                    Flexibility is one of the top reasons to choose a metal hose for a piping system. Compared to rigid conventional pipes, flexible metal hoses are simple to route. They can absorb vibrations, dampen noise, withstand thermal expansion & contraction and are resistant to abrasion, permeation and penetration. Flexible hoses can also withstand extreme temperatures and are naturally resistant to fire.
                                    Corrugated metal hoses have excellent hoop strength, which ensures that they can effectively handle full vacuum without any damage. The best part, flexible hoses are compatible with a broad range of chemicals, which is why they are best suited for a range of applications.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className='accordion_header fs_28 bg_gray_200'>What is a flexible stainless steel hose used for?</Accordion.Header>
                                    <Accordion.Body className='bg_gray_200 fs_16'>
                                    A flexible stainless steel hose is used to transfer/transport fluid, gases, steam and fluidized solids from one location to another. It can be used for varied applications such as pharmaceuticals industries, pneumatic services, railways, ports & shipyards, refineries, among others.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className='accordion_header fs_28 bg_gray_200'>How long does a flexible stainless steel hose last?</Accordion.Header>
                                    <Accordion.Body className='bg_gray_200 fs_16'>
                                    All high-quality corrugated stainless steel hoses have long longevity. They are manufactured to last throughout the lifespan of a mechanical system.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default FlexibleHoseDetail