import React from 'react';
import Bg1 from '../Asserts/Images/bg/bg.jpg';
import Bg2 from '../Asserts/Images/bg/bg2.jpg';
import Bg3 from '../Asserts/Images/bg/bg3.jpg';
import WelcomeImage from '../Asserts/Images/home/h1.png';

const Home = () => {
  return (
    <>
        {/* <!--hero slider --> */}
    <div id="carouselExampleCaptions" className="carousel slide hero_slider mb-4 pb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="drk">
                <img src={Bg1} className="d-block w-100" alt="..."/>
            </div>
           
            <div className="carousel-caption d-none d-md-block">
                <h5 className="animate__animated animate__fadeInDown animate__slow">First slide label</h5>
                <p className="animate__animated animate__fadeInDown animate__slow" >Some representative placeholder content for the first slide.</p>
                <p className="animate__animated animate__fadeInDown animate__slow" ><a className="#"> Know More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="drk">
                <img src={Bg2} className="d-block w-100" alt="..."/>
            </div>
            
            <div className="carousel-caption d-none d-md-block">
                <h5 className="animate__animated animate__fadeInDown animate__slow">First slide label</h5>
                <p className="animate__animated animate__fadeInDown animate__slow" >Some representative placeholder content for the first slide.</p>
                <p className="animate__animated animate__fadeInDown animate__slow" ><a className="#"> Know More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="drk">
                <img src={Bg3} className="d-block w-100" alt="..."/>
            </div>
            
            <div className="carousel-caption d-none d-md-block">
                <h5 className="animate__animated animate__fadeInDown animate__slow">First slide label</h5>
                <p className="animate__animated animate__fadeInDown animate__slow" >Some representative placeholder content for the first slide.</p>
                <p className="animate__animated animate__fadeInDown animate__slow" ><a className="#"> Know More</a></p>
            </div>
          </div>
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
                        <img src={WelcomeImage} className="colarge_img" alt='deroflex welcome'/>
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
                    <div className="small_text d-flex align-items-baseline">
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
                <p  className="f-w400 mb-3 f-16">
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
                <div className="small_text d-flex align-items-baseline">
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
        <div className="owl-carousel owl-theme service_owl_carousel">
           
            <div className="item">
                <div className="card">
                    <div className="card-body">
                        <div className="hrz_line d-flex mb-5">
                            <h5 className="card-title ms-3">Mechanical Engineering</h5>
                        </div>
                        <div className="row d-flex mx-0 justify-content-between align-items-baseline">
                            <div className="card_icon col-lg-6">
                            <img src="./images/icon/icon1.png"/>
                            </div>
                            <div className="card_count  col-lg-6">
                                <p className="mb-0">01</p>

                            </div>

                        </div>
                    </div>
                  </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-body">
                        <div className="hrz_line d-flex mb-5">
                            <h5 className="card-title ms-3">Mechanical Engineering</h5>
                        </div>
                        <div className="row d-flex mx-0 justify-content-between align-items-baseline">
                            <div className="card_icon col-lg-6">
                            <img src="./images/icon/icon2.png"/>
                            </div>
                            <div className="card_count  col-lg-6">
                                <p className="mb-0">02</p>

                            </div>

                        </div>
                    </div>
                  </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-body">
                        <div className="hrz_line d-flex mb-5">
                            <h5 className="card-title ms-3">Mechanical Engineering</h5>
                        </div>
                        <div className="row d-flex mx-0 justify-content-between align-items-baseline">
                            <div className="card_icon col-lg-6">
                            <img src="./images/icon/icon3.png"/>
                            </div>
                            <div className="card_count  col-lg-6">
                                <p className="mb-0">03</p>

                            </div>

                        </div>
                    </div>
                  </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-body">
                        <div className="hrz_line d-flex mb-5">
                            <h5 className="card-title ms-3">Mechanical Engineering</h5>
                        </div>
                        <div className="row d-flex mx-0 justify-content-between align-items-baseline">
                            <div className="card_icon col-lg-6">
                            <img src="./images/icon/icon4.png"/>
                            </div>
                            <div className="card_count  col-lg-6">
                                <p className="mb-0">04</p>

                            </div>

                        </div>
                    </div>
                  </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-body">
                        <div className="hrz_line d-flex mb-5">
                            <h5 className="card-title ms-3">Mechanical Engineering</h5>
                        </div>
                        <div className="row d-flex mx-0 justify-content-between align-items-baseline">
                            <div className="card_icon col-lg-6">
                            <img src="./images/icon/icon5.png"/>
                            </div>
                            <div className="card_count  col-lg-6">
                                <p className="mb-0">05</p>

                            </div>

                        </div>
                    </div>
                  </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-body">
                        <div className="hrz_line d-flex mb-5">
                            <h5 className="card-title ms-3">Mechanical Engineering</h5>
                        </div>
                        <div className="row d-flex mx-0 justify-content-between align-items-baseline">
                            <div className="card_icon col-lg-6">
                            <img src="./images/icon/icon6.png"/>
                            </div>
                            <div className="card_count  col-lg-6">
                                <p className="mb-0">06</p>

                            </div>

                        </div>
                    </div>
                  </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-body">
                        <div className="hrz_line d-flex mb-5">
                            <h5 className="card-title ms-3">Mechanical Engineering</h5>
                        </div>
                        <div className="row d-flex mx-0 justify-content-between align-items-baseline">
                            <div className="card_icon col-lg-6">
                            <img src="./images/icon/icon7.png"/>
                            </div>
                            <div className="card_count  col-lg-6">
                                <p className="mb-0">07</p>

                            </div>

                        </div>
                    </div>
                  </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-body">
                        <div className="hrz_line d-flex mb-5">
                            <h5 className="card-title ms-3">Mechanical Engineering</h5>
                        </div>
                        <div className="row d-flex mx-0 justify-content-between align-items-baseline">
                            <div className="card_icon col-lg-6">
                            <img src="./images/icon/icon8.png"/>
                            </div>
                            <div className="card_count  col-lg-6">
                                <p className="mb-0">08</p>

                            </div>

                        </div>
                    </div>
                  </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-body">
                        <div className="hrz_line d-flex mb-5">
                            <h5 className="card-title ms-3">Mechanical Engineering</h5>
                        </div>
                        <div className="row d-flex mx-0 justify-content-between align-items-baseline">
                            <div className="card_icon col-lg-6">
                            <img src="./images/icon/icon9.png"/>
                            </div>
                            <div className="card_count  col-lg-6">
                                <p className="mb-0">09</p>

                            </div>

                        </div>
                    </div>
                  </div>
            </div>
            <div className="item">
                <div className="card">
                    <div className="card-body">
                        <div className="hrz_line d-flex mb-5">
                            <h5 className="card-title ms-3">Mechanical Engineering</h5>
                        </div>
                        <div className="row d-flex mx-0 justify-content-between align-items-baseline">
                            <div className="card_icon col-lg-6">
                            <img src="./images/icon/icon10.png"/>
                            </div>
                            <div className="card_count  col-lg-6">
                                <p className="mb-0">10</p>

                            </div>

                        </div>
                    </div>
                  </div>
            </div>
           
            
        </div>

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
                    <div className="small_text d-flex align-items-baseline">
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
                                <img src="./images/home/pic1.jpg" alt=""/>
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
                                    <div className="small_text d-flex align-items-baseline">
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
    {/* <!-- FOOTER START --> */}
    <footer className="site-footer footer-large footer-dark text-white footer-style1" >

        
        {/* <!-- FOOTER BLOCKES START -->   */}
        <div className="footer-top bg-no-repeat bg-bottom-right" style={{backgroundImage:'url(images/background/footer-bg.png)'}}>
            <div className="container">
                <div className="row">
                
                    <div className="col-lg-5 col-md-12 col-sm-12"> 
                        <div className="footer-h-left"> 
                            <div className="widget widget_about">
                                <div className="logo-footer clearfix">
                                    <a href="index.html"><img src="images/logo-light.png" alt="" /></a>
                                </div>
                                <p>Over 15 year experience and knowledge international standards technologicaly changes our industrial systems, we are dedicated to provides the best solutions to our valued customers there are many variation solution we makes long-term investments goal in global companies in different sectors, mainly in USA and other countries</p>
                             </div>
                            <div className="widget recent-posts-entry">
                               <ul className="widget_address"> 
                                    <li><i className="fa fa-map-marker"></i>San Francisco City Hall, San Francisco, CA</li>
                                    <li><i className="fa fa-envelope"></i>contact123@gmail.com</li>
                                    <li> <i className="fa fa-phone"></i>(654) 321-7654 </li>
                                </ul>  
                            </div>
                            <ul className="social-icons  wt-social-links footer-social-icon">
                                <li><a href="javascript:void(0);" className="fa fa-google"></a></li>
                                <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
                                <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                                <li><a href="javascript:void(0);" className="fa fa-linkedin"></a></li>
                            </ul> 
                        </div>                              
                        
                    </div> 

                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="row footer-h-right">
                            <div className="col-lg-5 col-md-4">
                                <div className="widget widget_services">
                                    <h3 className="widget-title">Useful links</h3>
                                    <ul>
                                        <li><a href="about-1.html">About</a></li>
                                        <li><a href="our-prices.html">Pricing Plan </a></li>
                                        <li><a href="Faq.html">FAQ</a></li>
                                        <li><a href="team-single.html">Our Team </a></li>
                                        <li><a href="services-1.html">Services </a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-8">
                                <div className="widget widget_services">
                                    <h3 className="widget-title">Our Services</h3>
                                    {/* <!-- <ul>
                                        <li><a href="s-oilgas.html">Oil & Gas Factory</a><a href="s-chemical.html">Chemical Research</a></li>
                                        <li><a href="s-chemical.html">Chemical Research</a><a href="s-agricultural.html">Agricultural</a></li>
                                        <li><a href="s-mechanical.html">Mechanical</a><a href="s-agricultural.html">Agricultural </a></li>
                                        <li><a href="s-civil.html">Manufacturing</a><a href="s-civil.html">Civil Engineering</a></li>
                                        <li><a href="s-automotive.html">Mechanical </a><a href="s-automotive.html">Auto Motive  </a></li>
                                    </ul> --> */}
                                </div>
                            </div>                                
                        
                        </div>
                        
                        {/* <!-- <div className="widget widget_newsletter">
                            <h3 className="widget-title">Newsletter</h3>
                                <p>Subscribe to our newsletter to receive latest news on our services.</p>
                                <div className="newsletter-input">
                                  <div className="input-group">
                                    <input id="email" type="text" className="form-control" name="email" placeholder="Enter your email">
                                    <div className="input-group-append">
                                      <button type="submit" className="input-group-text nl-search-btn text-black site-bg-primary title-style-2">Subscribe</button>
                                    </div>
                                  </div>
                                </div>
                        </div> --> */}
                        
                    </div> 

                </div>
            </div>
        </div>
        {/* <!-- FOOTER COPYRIGHT --> */}
        
        <div className="footer-bottom">
          <div className="container">
            <div className="wt-footer-bot-left d-flex justify-content-between">
                <span className="copyrights-text">Copyright © 2020 <span className="site-text-primary">Deroflex</span></span>
                <ul className="copyrights-nav"> 
                    <li><a href="javascript:void(0);">Terms  &amp; Condition</a></li>
                    <li><a href="javascript:void(0);">Privacy Policy</a></li>
                    <li><a href="contact-1.html">Contact Us</a></li>
                </ul>     
            </div>
          </div>   
        </div>   


    </footer>
    {/* <!-- FOOTER END -->  */}

      
    </>
  )
}

export default Home
