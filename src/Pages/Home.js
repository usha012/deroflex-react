import React from 'react';
import Bg1 from '../Assets/Images/bg/bg.jpg';
import Bg2 from '../Assets/Images/bg/bg2.jpg';
import Bg3 from '../Assets/Images/bg/bg3.jpg';
import WelcomeImage from '../Assets/Images/home/h1.png';
import WhatWeDoImg from '../Assets/Images/home/pic1.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import icon1 from "../Assets/Images/icon/icon1.png"
import icon2 from "../Assets/Images/icon/icon2.png"
import icon3 from "../Assets/Images/icon/icon3.png"
import icon4 from "../Assets/Images/icon/icon4.png"
import icon5 from "../Assets/Images/icon/icon5.png"
import icon6 from "../Assets/Images/icon/icon6.png"
import icon7 from "../Assets/Images/icon/icon7.png"
import icon8 from "../Assets/Images/icon/icon8.png"
import icon9 from "../Assets/Images/icon/icon9.png"
import icon10 from "../Assets/Images/icon/icon10.png"
import Header from '../Components/header';
import Footer from '../Components/footer';

const Home = () => {

    const heroCarousel = [
        { id: "01", label: "First Slide Label", img: Bg1, description: "Some representative placeholder content for the first slide." },
        { id: "02", label: "Second Slide Label", img: Bg2, description: "Some representative placeholder content for the first slide." },
        { id: "03", label: "Third Slide Label", img: Bg3, description: "Some representative placeholder content for the first slide." }
    ]

    const industryServices = [
        { id: "01", name: "Mechanical Engineering", icon: icon1 },
        { id: "02", name: "Mechanical Engineering", icon: icon2 },
        { id: "03", name: "Mechanical Engineering", icon: icon3 },
        { id: "04", name: "Mechanical Engineering", icon: icon4 },
        { id: "05", name: "Mechanical Engineering", icon: icon5 },
        { id: "06", name: "Mechanical Engineering", icon: icon6 },
        { id: "07", name: "Mechanical Engineering", icon: icon7 },
        { id: "08", name: "Mechanical Engineering", icon: icon8 },
        { id: "09", name: "Mechanical Engineering", icon: icon9 },
        { id: "10", name: "Mechanical Engineering", icon: icon10 },

    ]
    return (
        <>
            <Header />
            {/* <!--hero slider --> */}
            <div id="carouselExampleCaptions" className="carousel slide hero_slider mb-4 pb-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
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

                    {/* <div className="carousel-item active">
            <div className="drk">
                <img src={Bg1} className="d-block w-100" alt="..."/>
            </div>
           
            <div className="carousel-caption d-none d-md-block">
                <h5 className="animate__animated animate__fadeInDown animate__slow">First slide label</h5>
                <p className="animate__animated animate__fadeInDown animate__slow" >Some representative placeholder content for the first slide.</p>
                <p className="animate__animated animate__fadeInDown animate__slow" ><a> Know More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="drk">
                <img src={Bg2} className="d-block w-100" alt="..."/>
            </div>
            
            <div className="carousel-caption d-none d-md-block">
                <h5 className="animate__animated animate__fadeInDown animate__slow">First slide label</h5>
                <p className="animate__animated animate__fadeInDown animate__slow" >Some representative placeholder content for the first slide.</p>
                <p className="animate__animated animate__fadeInDown animate__slow" ><a> Know More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="drk">
                <img src={Bg3} className="d-block w-100" alt="..."/>
            </div>
            
            <div className="carousel-caption d-none d-md-block">
                <h5 className="animate__animated animate__fadeInDown animate__slow">First slide label</h5>
                <p className="animate__animated animate__fadeInDown animate__slow" >Some representative placeholder content for the first slide.</p>
                <p className="animate__animated animate__fadeInDown animate__slow" ><a> Know More</a></p>
            </div>
          </div> */}
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

            {/* <!-- about us --> */}
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
                                <div className="sep-leaf-right-commn">

                                </div>

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
                            <li>Environmental Sensitivity, Personalised Solutions</li>
                        </ul>
                        {/* <!-- Li End --> */}

                        {/* <p className="f-w400 mb-3 f-16">
                    Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit. a ballpark value added is activity to beta test. Override the digital divide with additional click throughs from fruit to identify a ballpark value added.
                </p> */}
                        <p className="f-w400 mb-3 f-16">
                            Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit. a ballpark value added is activity to beta test. Override the digital divide with additional click throughs from fruit to identify a ballpark value added.

                        </p>

                        <div className="btn_outer">
                            <a className="btn btn-commn site-btn-effect-commn">Know More </a>
                        </div>
                    </div>

                </div>

            </div>

            {/* <!-- end about us --> */}
            {/* <!-- Start Services --> */}
            <section className="service_main_section p-tp80 p-btm80">
                <div className="service_bgcolor">

                </div>
                <div className="row mx-0">
                    <div className="col-lg-6 z-1">
                        <div className="service_inner mx-5 px-4">
                            {/* <!-- Title Start --> */}
                            <div className="small_text_outer">
                                <div className="small_text_primary d-flex align-items-baseline">
                                    <div className="f-34 f-w400">The Best Industry services </div>
                                    <div className="sep-leaf-right-commn">

                                    </div>

                                </div>

                            </div>
                            <h2 className="heading2-commn-text-white f-w600 ">
                                High Performance Services For Multiple Insdustries And Technologies!
                            </h2>
                            {/* <!-- Title End --> */}
                            <p>
                                Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to
                                identify a ballpark value added is activity to beta test. Override the igital divide with additional click
                                throughs from fruit to identify a ballpark value added.
                            </p>
                            {/* <!-- btn --> */}
                            <div className="btn_outer">
                                <a className="btn btn-commn-bg-primary site-btn-effect-commn-bg-primary">Know More </a>
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="service_inner_two">
                            <OwlCarousel className='owl-theme service_owl_carousel' loop margin={10} nav={false} dots={false}>
                                {
                                    industryServices?.map(el => (
                                        <div className="item" key={el?.id}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="hrz_line d-flex mb-5">
                                                        <h5 className="card-title ms-3">{el?.name}</h5>
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

            {/* <!-- start what we do --> */}
            {/* <!-- <section className="what_we_do_Section">
    <div className="container">
        <div className="col-lg6">

        </div>
        <div className="col-lg-6">
            <div className="wh_we_do_info">
                Title Start
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
                Title End
                <p className="mb-0">
                    Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide
                </p>
                <div className="wh_we_do_card_outer">
                    <div className="card mb-3">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="card-link">Card link</a>
                          <a href="#" className="card-link">Another link</a>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="card-link">Card link</a>
                          <a href="#" className="card-link">Another link</a>
                        </div>
                      </div>

                </div>

            </div>

        </div>

    </div>
   </section> --> */}
            {/* <!-- End what we do --> */}

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
                {/* <!-- <div className="hilite-large-title title-style-2">
            <span>What we do</span>
        </div> --> */}

            </div>
            {/* <!-- WHAT WE DO SECTION END -->    */}

            <Footer />
        </>
    )
}

export default Home
