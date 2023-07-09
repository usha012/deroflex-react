import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header_style_2">
            <div className="container-fluid px-0">
                <nav className="navbar navbar-expand-lg">
                    <div className="container px-0">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse header_nav" id="navbarSupportedContent">
                            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link  active" aria-current="page" href="/">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Corporate overview</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">market segment</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="#" >
                                        products
                                    </a>
                                    <ul className="sub-menu product_sub_menu commn_sub_menu_height px-2 pb-3">                                    
                                        <div className="container">
                                            <div className="micro_menu row mx-0 d-flex">
                                                <div className="micro_menu_li w-auto headerCustomMenu" productType="flexiblePipeSystem">
                                                    <li className="clickme micro_menu_li_head">
                                                        <span className="inner_item">Flexible Pipe System</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="one">
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="one">Rubber Expansion Bellow </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="two">
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="two">Stainless steel bellow</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="three">
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="three">Fabric bellow</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="four">
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="four">Pneumatic Air Bellow </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="five">
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="five">PTFE Bellow  </span></
                                                    li>  
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="six">
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="six">Protective bellow  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="seven">
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="seven">Bus Duct Bellow  </span>
                                                    </li>
                                                </div>
                                                <div className="micro_menu_li w-auto headerCustomMenu" productType="vibrationIsolation">
                                                    <li className="micro_menu_li_head ">
                                                        <span className="">Vibration Isolation</span>
                                                    </li>                                        
                                                    <li className="headerCustomMenu" productType="vibrationIsolation" pageId="one">
                                                        <span className="headerCustomMenu" productType="vibrationIsolation" pageId="one">Pad</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="vibrationIsolation" pageId="two">
                                                        <span className="headerCustomMenu" productType="vibrationIsolation" pageId="two">Rubber and Metal Bonded anti vibration mounded</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="vibrationIsolation" pageId="three">
                                                        <span className="headerCustomMenu" productType="vibrationIsolation" pageId="three">Spring Based Vibration Isolator </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="vibrationIsolation" pageId="four">
                                                        <span className="headerCustomMenu" productType="vibrationIsolation" pageId="four">Riser Isolator Support </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="vibrationIsolation" pageId="five">
                                                        <span className="headerCustomMenu" productType="vibrationIsolation" pageId="five">Wire Rope Suspension System </span>
                                                    </li>
                                                </div>
                                                <div className="micro_menu_li  w-auto headerCustomMenu" productType="mechanicalSeal">
                                                    <li className="micro_menu_li_head ">
                                                        <span className="">Mechanical seal</span>
                                                    </li>                                        
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="one">
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="one">Rubber Bellow Seal </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="two">
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="two">Metal Bellow Seal </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="three">
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="three">Teflon Bellow Seal </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="four">
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="four">Grundfos Mechanical seal </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="five">
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="five">Multi Spring Mechanical Seal  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="six">
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="six">Single Spring Mechanical Seal  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="seven">
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="seven">Agitator Seal  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="eight">
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="eight">Cartridge Seal  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="nine">
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="nine">Dry Running Seal  </span>
                                                    </li>
                                                </div>
                                                <div className="micro_menu_li  w-auto headerCustomMenu" productType="flexibleHose">
                                                    <li className="micro_menu_li_head ">
                                                        <span className="">Flexible Hose </span>
                                                    </li>                                        
                                                    <li className="headerCustomMenu" productType="flexibleHose" pageId="one">
                                                        <span className="headerCustomMenu" productType="flexibleHose" pageId="one">Stainless Steel Hose</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexibleHose" pageId="two">
                                                        <span className="headerCustomMenu" productType="flexibleHose" pageId="two">Rubber Hose</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexibleHose" pageId="three">
                                                        <span className="headerCustomMenu" productType="flexibleHose" pageId="three">Spiral Hose</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexibleHose" pageId="four">
                                                        <span className="headerCustomMenu" productType="flexibleHose" pageId="four">PTFE Hose </span>
                                                    </li>
                                                </div>
                                                <div className="micro_menu_li w-auto headerCustomMenu" productType="customized">
                                                    <li className="micro_menu_li_head ">
                                                        <span className="" >Customized</span>
                                                    </li>                                        
                                                    <li className="headerCustomMenu" productType="customized" pageId="one">
                                                        <span className="headerCustomMenu" productType="customized" pageId="one">Piston Seal</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="customized" pageId="two">
                                                        <span className="headerCustomMenu" productType="customized" pageId="two">O-ring</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="customized" pageId="three">
                                                        <span className="headerCustomMenu" productType="customized" pageId="three">Channel</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="customized" pageId="four">
                                                        <span className="headerCustomMenu" productType="customized" pageId="four">Gasket</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="customized" pageId="five">
                                                        <span className="headerCustomMenu" productType="customized" pageId="five"> Coupling</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="customized" pageId="six">
                                                        <span className="headerCustomMenu" productType="customized" pageId="six">Rubber Sheet</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="customized" pageId="seven">
                                                        <span className="headerCustomMenu" productType="customized" pageId="seven">Mat</span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </ul> 
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  active" aria-current="page" href="#">contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header