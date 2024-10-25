import React, { useEffect, useRef, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from '../Components/header';
import Footer from '../Components/footer';
import Bg1 from '../Assets/Images/bg/bg.jpg';
import Bg2 from '../Assets/Images/bg/bg2.jpg';
import Bg3 from '../Assets/Images/bg/bg3.jpg';
import Dummy2 from '../Assets/Images/dummyImage/dummy2.jpg';
import Dummy1 from '../Assets/Images/dummyImage/product.png';
import WelcomeImage from '../Assets/Images/home/h2.jpeg';
import WhatWeDoImg from '../Assets/Images/home/pic1.jpg';
import icon1 from "../Assets/Images/icon/icon1.png"
import carouselIndustry1 from "../Assets/Images/home/best_industry_service/rubber_expansion_joint.jpg"
import carouselIndustry2 from "../Assets/Images/home/best_industry_service/stainless _steel_expansion_joint.jpg"
import carouselIndustry3 from "../Assets/Images/home/best_industry_service/mechanical_seal.jpg"
import carouselIndustry4 from "../Assets/Images/home/best_industry_service/rubber_flexible_hose.jpg"
import carouselIndustry5 from "../Assets/Images/home/best_industry_service/seal_kit.jpg"
import vibration1 from "../Assets/Images/home/products/Vibration Isolation/p1.jpg"
import vibration2 from "../Assets/Images/home/products/Vibration Isolation/p2.png"
import vibration3 from "../Assets/Images/home/products/Vibration Isolation/p3.png"
import hose1 from "../Assets/Images/home/products/Hose/p1.png"
import hose2 from "../Assets/Images/home/products/Hose/p2.jpg"
import mecancal1 from "../Assets/Images/home/products/Mecancal seal/p1.png"
import mecancal2 from "../Assets/Images/home/products/Mecancal seal/p2.png"
import mecancal3 from "../Assets/Images/home/products/Mecancal seal/p3.png"
import mecancal4 from "../Assets/Images/home/products/Mecancal seal/p4.png"
import valve1 from "../Assets/Images/home/products/Valve/p1.png"
import valve2 from "../Assets/Images/home/products/Valve/p2.png"
import valve3 from "../Assets/Images/home/products/Valve/p3.png"
import valve4 from "../Assets/Images/home/products/Valve/p4.png"
import expansion1 from "../Assets/Images/home/products/Expansion Joint/p1.png"
import expansion2 from "../Assets/Images/home/products/Expansion Joint/p2.png"
import expansion3 from "../Assets/Images/home/products/Expansion Joint/p3.png"
import expansion4 from "../Assets/Images/home/products/Expansion Joint/p4.png"
import expansion5 from "../Assets/Images/home/products/Expansion Joint/p5.png"
import expansion6 from "../Assets/Images/home/products/Expansion Joint/p6.png"
import expansion7 from "../Assets/Images/home/products/Expansion Joint/p7.png"
import otherproduct1 from "../Assets/Images/home/products/Oth product/p1.png"
import { Link } from 'react-router-dom';

const Home = () => {

    const [tab, setTab] = useState("vibration")
    const carouselRef = useRef(null);
    const industyCarouselRef = useRef(null)


    const bestIndustryCarousel ={
        nav:false,
        margin:25,
        dots:false,
        loop:true,
        autoplay:true,
        responsive:{
          0:{
              items:1
          },
          1000:{
            items:1
          }
        }  
    }
    const heroCarousel = [
        { id: "01", label: "Rubber Expansion Joint", img: Bg1, description: "Pressure hold, vibration  &noise control." },
        { id: "02", label: "Stainless Steel Expansion  Joint", img: Bg2, description: "The most significant element thin-walled, flexibility  containing pressure and media." },
        { id: "03", label: "Mechanical Seal", img: Bg3, description: "Seal helps join systems and mechanisms together by preventing leakage." },
        { id: "04", label: "Vibration Mounting", img: Bg3, description: "High frequency vibration and sound control." },
        { id: "05", label: "Wire rope suspension", img: Bg3, description: "Wire rope suspension system can be used to support a very wide range of loads and objects." }
    ]
    const bannerSliderContentList = [
        {title: 'Rubber Expansion Joint', description: "The rubber expansion joint is an elastic element of the pipeline system which is provide the flexibility necessary to absorb the system  , and they are  used on pumps, chillers and other reciprocating machinery to compensate for thermal expansion and contraction, reduce noise and vibration."},
        {title: 'Stainless Steel Expansion Joint ', description: "Metallic Expansion Joint is a flexible pipeling element , it has excellent absorption qualities that allow them to absorb deformations and reduce forces on equipment connections , contraction due to changes in temperature."},
        {title: 'Mechanical Seal', description: "Mechanical seals are leakage control devices and which are critical part of any mechanical operation involving fluid movement through rotational shafts and they are found on rotating equipment such as pumps and mixers to prevent the leakage of liquids and gases from escaping into the environment."},
        {title: 'Rubber Flexible Hose', description: "Rubber hose is widely used in conveying systems for both pipeline and bends and in systems where a degree of natural flexibility is required. If the rubber absorbs more of the energy of impact of the particles than steel and also greater pressure drop."},
        {title: 'Seal Kit', description: "Seal kits are used to close gaps between components in hydraulic cylinders , preventing leakage of hydraulic fluid or air .Closing these gaps is essential because seals are responsible for maintaining hydraulic pressure  in fluid power systems."}
    ]
    const onPrevClick = () => {
        if(carouselRef.current){
          carouselRef.current.prev();
          industyCarouselRef.current.prev();
        }
  
    }
    const onNextClick = () => {

    if(carouselRef.current){
        carouselRef.current.next();
        industyCarouselRef.current.next();
    }
    }

  

    return (
        <>
            <Header />
            {/* <!--hero slider --> */}
            <div id="carouselExampleCaptions" className="carousel slide hero_slider mb-4 pb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        heroCarousel?.map((el, index) => (
                            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={el?.id}>
                                <div className="drk">
                                    <img src={el?.img} className="d-block w-100" alt="..." />
                                </div>

                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="animate__animated animate__fadeInDown animate__slow">{el?.label}</h5>
                                    <p className="animate__animated animate__fadeInDown animate__slow" >{el?.description}</p>
                                    <p className="animate__animated animate__fadeInDown animate__slow" ><a> Know More</a></p>
                                </div>
                            </div>
                        ))
                    }   
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <!-- end hero slider --> */}

            {/* <!-- welcome to deroflex --> */}
            <div className="container mb-5 py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="img-colarge">
                            <div className="colarge-1">
                                <img src={WelcomeImage} className="colarge_img" alt='deroflex welcome' />
                            </div>
                            <div className="since_year_outer">
                                <div className="since_year">
                                    <span>Since</span>
                                    <strong>1989</strong>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* <!-- Title Start --> */}
                        <div className="small_text_outer">
                            <div className="small_text_primary d-flex align-items-baseline">
                                <div className="f-34 f-w400">Welcome to industro </div>
                                <div className="sep-leaf-right-commn"></div>
                            </div>
                        </div>
                        <h2 className="heading2-commn f-w600 ">
                            We Are Here to Increase Your Knowledge With Experience
                        </h2>
                        {/* <!-- Title End --> */}

                        {/* <!-- Li Start --> */}
                        <ul className="list_styele_one">
                            <li>Quality Control System , 100% Satisfaction Guarantee</li>
                            <li>Unrivalled Workmanship, Professional and Qualified</li>
                        </ul>
                        {/* <!-- Li End --> */}

                        <p className="f-w400 mb-3 f-16">
                            Our all manufacturing items are fitted in various type of
                            industry , some example where product are using like- pipeline
                            jointing/ vibration control product are bellow , hose , valve
                            etc or any other example like pump leakage or hydraulic cylinder
                            oil leakage product like mechanical seal , seal kit , piston
                            seal , O-ring etc and also other many types of manufacturing
                            product like mounting, spiral Wound gasket, Machining job- SS/MS
                            , Rubber molded / Plastic molding items and have built a strong
                            technical capacity and industry-specific expertise throughout
                            this period, enabling us to handle complex and demanding
                            projects from leading clients around the world
                         </p>
                        <div className="btn_outer">
                            <a className="btn btn-commn site-btn-effect-commn">Know More </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end welcome to deroflex --> */}

            {/* <!-- Start Services --> */}
            <section className="service_main_section p-tp80 p-btm80">
                <div className="service_bgcolor"></div>
                <div className="row mx-0">
                    <div className="col-lg-6 z-1">
                        <div className="service_inner mx-5 px-4">


                        <OwlCarousel className='owl-theme' ref={industyCarouselRef}  {...bestIndustryCarousel}>
                            {
                                bannerSliderContentList?.map((el,i)=>(
                                    <div class='item'>
                                        {/* <!-- Title Start --> */}
                                        <div className="small_text_outer">
                                            <div className="small_text_primary d-flex align-items-baseline">
                                                <div className="f-34 f-w400">The Best Industry services </div>
                                                <div className="sep-leaf-right-commn">
                                                </div>
                                            </div>
                                        </div>
                                            <h2 className="heading2-commn-text-white f-w600 ">
                                                {el?.title}
                                            </h2>
                                            <p>
                                                {el?.description}
                                            </p>
                                    
                                        <div className="btn_outer">
                                            <a className="btn btn-commn-bg-primary site-btn-effect-commn-bg-primary">Know More </a>
                                        </div>
                                    </div>

                                ))
                            }
                            
                        </OwlCarousel>
                           
                        </div>
                    </div>


                    <div className="col-lg-6">
                        <div className="service_inner_two position-relative">
                                <button className="btn pre text_primary me-3 mb-4 ms-4" onClick={onPrevClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                                    </svg>
                                </button>
                                <button className="btn text_primary next me-3 mb-4" onClick={onNextClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                    </svg>
                                </button>


                            <OwlCarousel ref={carouselRef}  className='owl-theme' {...bestIndustryCarousel}>
                            <div class='item'>
                                <div className='pro_rec_height'>
                                    <img src={carouselIndustry1}/>
                                </div>  
                            </div>

                            <div class='item'>
                                <div className='pro_rec_height'>
                                <img src={carouselIndustry2}/>
                                </div>
                            </div>
                            <div class='item'>
                            <div className='pro_rec_height'>
                                <img src={carouselIndustry3}/>
                                </div>
                            </div>
                            <div class='item'>
                            <div className='pro_rec_height'>
                                <img src={carouselIndustry4}/>
                                </div>
                            </div>
                            <div class='item'>
                            <div className='pro_rec_height'>
                                <img src={carouselIndustry5}/>
                                </div>
                            </div>
                            </OwlCarousel>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- End Services --> */}

            {/* <!-- start who we are  --> */}
            <section className="what_we_do_Section">
                <div className="container">
                    <div className='row'>
                        <div className="col-lg-6">
                            <div className="wh_we_do_info">
                                <div className="small_text_outer">
                                    <div className="small_text_primary d-flex align-items-baseline">
                                        <div className="f-34 f-w400">Who we are</div>
                                        <div className="sep-leaf-right-commn"></div>
                                    </div>
                                </div>
                                <p className="mb-0">
                                    DEROFLEX is an industry leader in the design and manufacture of Expansion Joints, 
                                    Mechanical seal, Valve ,Vibration & Seismic & Noise Isolation Products. 
                                    Our standard products are complimented by special designs to fit specific 
                                    application requirements. Our comprehensive product and engineering solutions 
                                    cover a variety of industries - HVAC, Industrial, OEM, Infrastructure and Defense. 
                                    We provide our competitive price due to innovation and extensive knowhow from years 
                                    of industrial experiences and also value the importance of timely and efficient production 
                                    and delivery of components to our clients
                                </p>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <OwlCarousel className='owl-theme owl_carousel_one' loop={true} margin={10} autoplay={true} dots={false} items={1} nav={false}>
                                <div class='item'>
                                    <div className='img_outer'>
                                        <img src={Bg1}/>
                                    </div>
                                </div>
                                <div class='item'>
                                    <div className='img_outer'>
                                        <img src={Bg2}/>
                                    </div>
                                </div>
                                <div class='item'>
                                    <div className='img_outer'>
                                        <img src={Bg3}/>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End who we are --> */}

            {/* <!-- WHAT WE DO SECTION START --> */}
            <div className="section-full p-t80 p-b70 bg-gray what-we-do-section">
                <div className="container">
                    <div className="section-content what-we-do-content">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="whatWedo-media-section">
                                    <div className="wt-media">
                                        <img src={WhatWeDoImg} alt="" />
                                    </div>
                                    <div className="whatWedo-media-content text-white">
                                        <div className="whatWedo-media-inner">
                                            <h3>Team Working Dedicatedly</h3>
                                            <p>We have 26+ years of experience with providing wide area of specialty services works </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="whatWedo-info-section">
                                    {/* <!-- Title Start --> */}
                                    <div className="small_text_outer">
                                        <div className="small_text_primary d-flex align-items-baseline">
                                            <div className="f-34 f-w400">What We do</div>
                                            <div className="sep-leaf-right-commn">

                                            </div>

                                        </div>

                                    </div>
                                    <h2 className="heading2-commn f-w600 ">
                                        Providing Full Range of High Quality Products Worldwide
                                    </h2>
                                    {/* <!-- Title End --> */}
                                    <p>Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide</p>
                                    <div className="wt-icon-card-outer">
                                        <div className="wt-icon-card bg-white shadow">
                                            <div className="wt-card-header"><i className="flaticon-robotic-arm site-text-primary"></i><span className="title-style-2 site-text-secondry">A Full Products</span></div>
                                            <div className="wt-card-content"><p>We are Providing different services in this sector to wide area of world</p></div>
                                        </div>

                                        <div className="wt-icon-card bg-white shadow">
                                            <div className="wt-card-header"><i className="flaticon-repair site-text-primary"></i><span className="title-style-2 site-text-secondry">All Maintenance</span></div>
                                            <div className="wt-card-content"><p>We are Prous to Protect your organization with our award-winning products</p></div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- WHAT WE DO SECTION END -->    */}

            {/* products */}
            <div className='container py-5'>
                <div className='row products'>
                    <div className='col-12'>
                        <ul className="nav justify-content-center">
                            <li className="nav-item" onClick={()=> setTab("vibration")}>
                                <Link className={`nav-link px-4 ${tab === "vibration" ? "active" :""}`} aria-current="page">Vibration Isolation</Link>
                            </li>
                            <li className="nav-item" onClick={()=> setTab("hose")}>
                                <Link className={`nav-link px-4 ${tab === "hose" ? "active" :""}`}>Hose</Link>
                            </li>
                            <li className="nav-item" onClick={()=> setTab("mecancal")}>
                                <Link className={`nav-link px-4 ${tab === "mecancal" ? "active" :""}`}>Mecancal seal</Link>
                            </li>
                            <li className="nav-item" onClick={()=> setTab("valve")}>
                                <Link className={`nav-link px-4 ${tab === "valve" ? "active" :""}`}>Valve</Link>
                            </li>
                            <li className="nav-item" onClick={()=> setTab("expansion")}>
                                <Link className={`nav-link px-4 ${tab === "expansion" ? "active" :""}`}>Expansion Joint</Link>
                            </li>
                            <li className="nav-item" onClick={()=> setTab("hydralc")}>
                                <Link className={`nav-link px-4 ${tab === "hydralc" ? "active" :""}`}>Hydralc Cylinder  part</Link>
                            </li>
                            <li className="nav-item" onClick={()=> setTab("other")}>
                                <Link className={`nav-link px-4 ${tab === "other" ? "active" :""}`}>Other product</Link>
                            </li>
                        </ul>

                    </div>
                    

                </div>
                <div className='row pt-5'>
                    {
                        tab === "vibration" 
                        ?
                            <>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={vibration1}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>spring isolators</p>
                            </div>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={vibration2}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>Vibration Isolator</p>
                            </div>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={vibration3}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>spring polycal wire rope isolator</p>
                            </div>
                            </>
                        :
                        tab === "hose"
                        ?
                            <>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={hose1}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>ptfe hose with fitting</p>
                            </div>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={hose2}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>ss bellow hose</p>
                            </div>
                            </>
                        :
                        tab === "mecancal"
                        ?
                            <>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={mecancal1}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>NA</p>
                            </div>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={mecancal2}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>rubber bellow mechanical seals</p>
                            </div>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={mecancal3}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>na</p>
                            </div>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={mecancal4}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>WP compact mechanical seal</p>
                            </div>
                           
                            </>
                        :
                        tab === "valve"
                        ?
                        <>
                        <div className='col-2 mb-3'>
                            <div className='img_outer mx-auto pro_150 mb-3'>
                                <img src={valve1}/>
                            </div>
                            <p className='text-capitalize text-center text_gray_800'>NA</p>
                        </div>
                        <div className='col-2 mb-3'>
                            <div className='img_outer mx-auto pro_150 mb-3'>
                                <img src={valve2}/>
                            </div>
                            <p className='text-capitalize text-center text_gray_800'>Carbon steel globe valve</p>
                        </div>
                        <div className='col-2 mb-3'>
                            <div className='img_outer mx-auto pro_150 mb-3'>
                                <img src={valve3}/>
                            </div>
                            <p className='text-capitalize text-center text_gray_800'>Cast iron valve</p>
                        </div>
                        <div className='col-2 mb-3'>
                            <div className='img_outer mx-auto pro_150 mb-3'>
                                <img src={valve4}/>
                            </div>
                            <p className='text-capitalize text-center text_gray_800'>fly valve</p>
                        </div>
                       
                        </>
                        :
                        tab === "expansion" 
                        ?
                            <>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={expansion1}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>NA</p>
                            </div>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={expansion2}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>Expansion Joint with Flange</p>
                            </div>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={expansion3}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>Protective bellow</p>
                            </div>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={expansion4}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>Stainless Steel Expansion</p>
                            </div>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={expansion5}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>rubber expansion joint</p>
                            </div>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={expansion6}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>Protective Silicon Bellow</p>
                            </div>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={expansion7}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>NA</p>
                            </div>

                            </>
                        :
                        tab === "hydralc"
                        ?
                            <p>hydralc</p>
                        :
                        tab === "other"
                        ?
                            <>
                            <div className='col-2 mb-3'>
                                <div className='img_outer mx-auto pro_150 mb-3'>
                                    <img src={otherproduct1}/>
                                </div>
                                <p className='text-capitalize text-center text_gray_800'>NA</p>
                            </div>
                            </>

                        :
                            <p>someting went wrong</p>


                    }
                    
                </div>

            </div>
            {/* end products */}
            {/* Recent Blogs  */}
            <div className='container py-5 mb-5'>
                <div className='row'> 
                    <div className='col-12 text-center'>
                        <h1>Recent Blogs</h1>
                    </div>
                </div>
                <div className='row'>
                    <OwlCarousel className='owl-theme' loop margin={30} nav={false} dots={false}>
                        <div class='item'>
                            <div className=''>
                                <div className='pro_rec_100'>
                                    <img src={Dummy2}/>
                                </div>
                                <h3>heading1</h3>
                                <p>
                                Easyflex has successfully designed, manufactured and shipped 8 nos. 
                                of a very uniquely designed Round-to-Rectangular Projection Fabric Flexible 
                                Connection. These flexible connections will be used as part of a DG Room ventilation
                                </p>
                                <Link>Read More</Link>
                            </div>
                        </div>
                        <div class='item'>
                            <div className=''>
                                <div className='pro_rec_100'>
                                    <img src={Dummy2}/>
                                </div>
                                <h3>heading1</h3>
                                <p>
                                Easyflex has successfully designed, manufactured and shipped 8 nos. 
                                of a very uniquely designed Round-to-Rectangular Projection Fabric Flexible 
                                Connection. These flexible connections will be used as part of a DG Room ventilation
                                </p>
                                <Link>Read More</Link>
                            </div>
                        </div>
                        <div class='item'>
                            <div className=''>
                                <div className='pro_rec_100'>
                                    <img src={Dummy2}/>
                                </div>
                                <h3>heading1</h3>
                                <p>
                                Easyflex has successfully designed, manufactured and shipped 8 nos. 
                                of a very uniquely designed Round-to-Rectangular Projection Fabric Flexible 
                                Connection. These flexible connections will be used as part of a DG Room ventilation
                                </p>
                                <Link>Read More</Link>
                            </div>
                        </div>
                        <div class='item'>
                            <div className=''>
                                <div className='pro_rec_100'>
                                    <img src={Dummy2}/>
                                </div>
                                <h3>heading1</h3>
                                <p>
                                Easyflex has successfully designed, manufactured and shipped 8 nos. 
                                of a very uniquely designed Round-to-Rectangular Projection Fabric Flexible 
                                Connection. These flexible connections will be used as part of a DG Room ventilation
                                </p>
                                <Link>Read More</Link>
                            </div>
                        </div>
                        <div class='item'>
                            <div className=''>
                                <div className='pro_rec_100'>
                                    <img src={Dummy2}/>
                                </div>
                                <h3>heading1</h3>
                                <p>
                                Easyflex has successfully designed, manufactured and shipped 8 nos. 
                                of a very uniquely designed Round-to-Rectangular Projection Fabric Flexible 
                                Connection. These flexible connections will be used as part of a DG Room ventilation
                                </p>
                                <Link>Read More</Link>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            {/* Recent Blogs end  */}

            {/* Certificate */}
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center mb-3'>
                        <h1>Certificates</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 text-center'>
                        <div className='pro_150 mx-auto'>
                            <img src={Dummy1}/>
                        </div>
                        <p className='text-capitalize'>name</p>
                    </div>
                    <div className='col-3 text-center'>
                        <div className='pro_150 mx-auto'>
                            <img src={Dummy1}/>
                        </div>
                        <p className='text-capitalize'>name</p>
                    </div>
                    <div className='col-3 text-center'>
                        <div className='pro_150 mx-auto'>
                            <img src={Dummy1}/>
                        </div>
                        <p className='text-capitalize'>name</p>
                    </div>
                    <div className='col-3 text-center'>
                        <div className='pro_150 mx-auto'>
                            <img src={Dummy1}/>
                        </div>
                        <p className='text-capitalize'>name</p>
                    </div>

                </div>

            </div>
            {/* Certificate end */}

            <Footer />
        </>
    )
}

export default Home
