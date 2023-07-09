import React from 'react'

const Footer = () => {
  return (
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
                    </div> 

                </div>
            </div>
        </div>
        {/* <!-- FOOTER COPYRIGHT --> */}
        
        <div className="footer-bottom">
          <div className="container">
            <div className="wt-footer-bot-left d-flex justify-content-between">
                <span className="copyrights-text">Copyright © 2023 <span className="site-text-primary">Deroflex</span></span>
                <ul className="copyrights-nav"> 
                    <li><a href="javascript:void(0);">Terms  &amp; Condition</a></li>
                    <li><a href="javascript:void(0);">Privacy Policy</a></li>
                    <li><a href="contact-1.html">Contact Us</a></li>
                </ul>     
            </div>
          </div>   
        </div>   
    </footer>
  )
}

export default Footer