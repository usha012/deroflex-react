import React from 'react'
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate()

    const redirect = (e, productType, id) => {
        e.preventDefault();
        let url = ""
        switch(productType) { 
            case "flexiblePipeSystem":
            url = "/new-products/flexible-pipe-system" + (id ? "?id="+id : "")
            break;
            case "vibrationIsolation":
            url = "/new-products/vibration-isolation" + (id ? "?id="+id : "")
            break;
            case "mechanicalSeal":
            url = "/new-products/mechanical-seal" + (id ? "?id="+id : "")
            break;
            case "flexibleHose":
            url = "/new-products/flexible-hose" + (id ? "?id="+id : "")
            break;
            case "customized":
            url = "/new-products/customized" + (id ? "?id="+id : "")
            break;
        }
        navigate(url)
    }

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
                                                    <li className="clickme micro_menu_li_head" onClick={e => redirect(e, "flexiblePipeSystem")}>
                                                        <span className="inner_item">Flexible Pipe System</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="one" onClick={e => redirect(e, "flexiblePipeSystem", "one")}>
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="one">Rubber Expansion Bellow </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="two" onClick={e => redirect(e, "flexiblePipeSystem", "two")}>
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="two">Stainless steel bellow</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="three" onClick={e => redirect(e, "flexiblePipeSystem", "three")}>
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="three">Fabric bellow</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="four" onClick={e => redirect(e, "flexiblePipeSystem", "four")}>
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="four">Pneumatic Air Bellow </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="five" onClick={e => redirect(e, "flexiblePipeSystem", "five")}>
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="five">PTFE Bellow  </span></
                                                    li>  
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="six" onClick={e => redirect(e, "flexiblePipeSystem", "six")}>
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="six">Protective bellow  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexiblePipeSystem" pageId="seven" onClick={e => redirect(e, "flexiblePipeSystem", "seven")}>
                                                        <span className="headerCustomMenu" productType="flexiblePipeSystem" pageId="seven">Bus Duct Bellow  </span>
                                                    </li>
                                                </div>

                                                <div className="micro_menu_li w-auto headerCustomMenu" productType="vibrationIsolation">
                                                    <li className="micro_menu_li_head" onClick={e => redirect(e, "vibrationIsolation")}>
                                                        <span className="">Vibration Isolation</span>
                                                    </li>                                        
                                                    <li className="headerCustomMenu" productType="vibrationIsolation" pageId="one" onClick={e => redirect(e, "vibrationIsolation", "one")} >
                                                        <span className="headerCustomMenu" productType="vibrationIsolation" pageId="one">Pad</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="vibrationIsolation" pageId="two" onClick={e => redirect(e, "vibrationIsolation", "two")}>
                                                        <span className="headerCustomMenu" productType="vibrationIsolation" pageId="two">Rubber and Metal Bonded anti vibration mounded</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="vibrationIsolation" pageId="three" onClick={e => redirect(e, "vibrationIsolation", "three")}>
                                                        <span className="headerCustomMenu" productType="vibrationIsolation" pageId="three">Spring Based Vibration Isolator </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="vibrationIsolation" pageId="four" onClick={e => redirect(e, "vibrationIsolation", "four")}>
                                                        <span className="headerCustomMenu" productType="vibrationIsolation" pageId="four">Riser Isolator Support </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="vibrationIsolation" pageId="five" onClick={e => redirect(e, "vibrationIsolation", "five")}>
                                                        <span className="headerCustomMenu" productType="vibrationIsolation" pageId="five">Wire Rope Suspension System </span>
                                                    </li>
                                                </div>

                                                <div className="micro_menu_li  w-auto headerCustomMenu" productType="mechanicalSeal">
                                                    <li className="micro_menu_li_head" onClick={e => redirect(e, "mechanicalSeal")}>
                                                        <span className="">Mechanical seal</span>
                                                    </li>                                        
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="one" onClick={e => redirect(e, "mechanicalSeal", "one")}>
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="one">Rubber Bellow Seal </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="two" onClick={e => redirect(e, "mechanicalSeal", "two")}>
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="two">Metal Bellow Seal </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="three" onClick={e => redirect(e, "mechanicalSeal", "three")}>
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="three">Teflon Bellow Seal </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="four" onClick={e => redirect(e, "mechanicalSeal", "four")}>
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="four">Grundfos Mechanical seal </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="five" onClick={e => redirect(e, "mechanicalSeal", "five")}>
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="five">Multi Spring Mechanical Seal  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="six" onClick={e => redirect(e, "mechanicalSeal", "six")}>
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="six">Single Spring Mechanical Seal  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="seven" onClick={e => redirect(e, "mechanicalSeal", "seven")}>
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="seven">Agitator Seal  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="eight" onClick={e => redirect(e, "mechanicalSeal", "eight")}>
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="eight">Cartridge Seal  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="mechanicalSeal" pageId="nine" onClick={e => redirect(e, "mechanicalSeal", "nine")}>
                                                        <span className="headerCustomMenu" productType="mechanicalSeal" pageId="nine">Dry Running Seal  </span>
                                                    </li>
                                                </div>

                                                <div className="micro_menu_li  w-auto headerCustomMenu" productType="flexibleHose">
                                                    <li className="micro_menu_li_head" onClick={e => redirect(e, "flexibleHose")}>
                                                        <span className="">Flexible Hose </span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexibleHose" pageId="one" onClick={e => redirect(e, "flexibleHose", "one")}>
                                                        <span className="headerCustomMenu" productType="flexibleHose" pageId="one">Stainless Steel Hose</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexibleHose" pageId="two" onClick={e => redirect(e, "flexibleHose", "two")}>
                                                        <span className="headerCustomMenu" productType="flexibleHose" pageId="two">Rubber Hose</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexibleHose" pageId="three" onClick={e => redirect(e, "flexibleHose", "three")}>
                                                        <span className="headerCustomMenu" productType="flexibleHose" pageId="three">Spiral Hose</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="flexibleHose" pageId="four" onClick={e => redirect(e, "flexibleHose", "four")}>
                                                        <span className="headerCustomMenu" productType="flexibleHose" pageId="four">PTFE Hose </span>
                                                    </li>
                                                </div>

                                                <div className="micro_menu_li w-auto headerCustomMenu" productType="customized">
                                                    <li className="micro_menu_li_head" onClick={e => redirect(e, "customized")}>
                                                        <span className="">Customized</span>
                                                    </li>                                        
                                                    <li className="headerCustomMenu" productType="customized" pageId="one" onClick={e => redirect(e, "customized", "one")}>
                                                        <span className="headerCustomMenu" productType="customized" pageId="one">Piston Seal</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="customized" pageId="two" onClick={e => redirect(e, "customized", "two")}>
                                                        <span className="headerCustomMenu" productType="customized" pageId="two">O-ring</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="customized" pageId="three" onClick={e => redirect(e, "customized", "three")}>
                                                        <span className="headerCustomMenu" productType="customized" pageId="three">Channel</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="customized" pageId="four" onClick={e => redirect(e, "customized", "four")}>
                                                        <span className="headerCustomMenu" productType="customized" pageId="four">Gasket</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="customized" pageId="five" onClick={e => redirect(e, "customized", "five")}>
                                                        <span className="headerCustomMenu" productType="customized" pageId="five"> Coupling</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="customized" pageId="six" onClick={e => redirect(e, "customized", "six")}>
                                                        <span className="headerCustomMenu" productType="customized" pageId="six">Rubber Sheet</span>
                                                    </li>
                                                    <li className="headerCustomMenu" productType="customized" pageId="seven" onClick={e => redirect(e, "customized", "seven")}>
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