import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate()

    const redirect = (e, productType, id) => {
        e.stopPropagation()
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
                                    <Link className="nav-link  active" aria-current="page" to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page">Corporate overview</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page">market segment</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" >
                                        products
                                    </a>
                                    <ul className="sub-menu product_sub_menu commn_sub_menu_height px-2 pb-3">                                    
                                        <div className="container">
                                            <div className="micro_menu row mx-0 d-flex">

                                                <div className="micro_menu_li w-auto headerCustomMenu" productType="flexiblePipeSystem" onClick={e => redirect(e, "flexiblePipeSystem")}>
                                                    <li className="clickme micro_menu_li_head" onClick={e => redirect(e, "flexiblePipeSystem")}>
                                                        <span className="inner_item">Flexible Pipe System</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "flexiblePipeSystem", "one")}>
                                                        <span className="headerCustomMenu">Rubber Expansion Bellow </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "flexiblePipeSystem", "two")}>
                                                        <span className="headerCustomMenu">Stainless steel bellow</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "flexiblePipeSystem", "three")}>
                                                        <span className="headerCustomMenu">Fabric bellow</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "flexiblePipeSystem", "four")}>
                                                        <span className="headerCustomMenu">Pneumatic Air Bellow </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "flexiblePipeSystem", "five")}>
                                                        <span className="headerCustomMenu">PTFE Bellow  </span></
                                                    li>  
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "flexiblePipeSystem", "six")}>
                                                        <span className="headerCustomMenu">Protective bellow  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "flexiblePipeSystem", "seven")}>
                                                        <span className="headerCustomMenu">Bus Duct Bellow  </span>
                                                    </li>
                                                </div>

                                                <div className="micro_menu_li w-auto headerCustomMenu" productType="vibrationIsolation" onClick={e => redirect(e, "vibrationIsolation")}>
                                                    <li className="micro_menu_li_head" onClick={e => redirect(e, "vibrationIsolation")}>
                                                        <span className="">Vibration Isolation</span>
                                                    </li>                                        
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "vibrationIsolation", "one")} >
                                                        <span className="headerCustomMenu">Pad</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "vibrationIsolation", "two")}>
                                                        <span className="headerCustomMenu">Rubber and Metal Bonded anti vibration mounded</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "vibrationIsolation", "three")}>
                                                        <span className="headerCustomMenu">Spring Based Vibration Isolator </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "vibrationIsolation", "four")}>
                                                        <span className="headerCustomMenu">Riser Isolator Support </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "vibrationIsolation", "five")}>
                                                        <span className="headerCustomMenu">Wire Rope Suspension System </span>
                                                    </li>
                                                </div>

                                                <div className="micro_menu_li  w-auto headerCustomMenu" productType="mechanicalSeal" onClick={e => redirect(e, "mechanicalSeal")}>
                                                    <li className="micro_menu_li_head" onClick={e => redirect(e, "mechanicalSeal")}>
                                                        <span className="">Mechanical seal</span>
                                                    </li>                                        
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "mechanicalSeal", "one")}>
                                                        <span className="headerCustomMenu">Rubber Bellow Seal </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "mechanicalSeal", "two")}>
                                                        <span className="headerCustomMenu">Metal Bellow Seal </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "mechanicalSeal", "three")}>
                                                        <span className="headerCustomMenu">Teflon Bellow Seal </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "mechanicalSeal", "four")}>
                                                        <span className="headerCustomMenu">Grundfos Mechanical seal </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "mechanicalSeal", "five")}>
                                                        <span className="headerCustomMenu">Multi Spring Mechanical Seal  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "mechanicalSeal", "six")}>
                                                        <span className="headerCustomMenu">Single Spring Mechanical Seal  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "mechanicalSeal", "seven")}>
                                                        <span className="headerCustomMenu">Agitator Seal  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "mechanicalSeal", "eight")}>
                                                        <span className="headerCustomMenu">Cartridge Seal  </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "mechanicalSeal", "nine")}>
                                                        <span className="headerCustomMenu">Dry Running Seal  </span>
                                                    </li>
                                                </div>

                                                <div className="micro_menu_li  w-auto headerCustomMenu" productType="flexibleHose" onClick={e => redirect(e, "flexibleHose")}>
                                                    <li className="micro_menu_li_head" onClick={e => redirect(e, "flexibleHose")}>
                                                        <span className="">Flexible Hose </span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "flexibleHose", "one")}>
                                                        <span className="headerCustomMenu">Stainless Steel Hose</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "flexibleHose", "two")}>
                                                        <span className="headerCustomMenu">Rubber Hose</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "flexibleHose", "three")}>
                                                        <span className="headerCustomMenu">Spiral Hose</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "flexibleHose", "four")}>
                                                        <span className="headerCustomMenu">PTFE Hose </span>
                                                    </li>
                                                </div>

                                                <div className="micro_menu_li w-auto headerCustomMenu" productType="customized" onClick={e => redirect(e, "customized")}>
                                                    <li className="micro_menu_li_head" onClick={e => redirect(e, "customized")}>
                                                        <span className="">Customized</span>
                                                    </li>                                        
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "customized", "one")}>
                                                        <span className="headerCustomMenu">Piston Seal</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "customized", "two")}>
                                                        <span className="headerCustomMenu">O-ring</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "customized", "three")}>
                                                        <span className="headerCustomMenu">Channel</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "customized", "four")}>
                                                        <span className="headerCustomMenu">Gasket</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "customized", "five")}>
                                                        <span className="headerCustomMenu"> Coupling</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "customized", "six")}>
                                                        <span className="headerCustomMenu">Rubber Sheet</span>
                                                    </li>
                                                    <li className="headerCustomMenu" onClick={e => redirect(e, "customized", "seven")}>
                                                        <span className="headerCustomMenu">Mat</span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </ul> 
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  active" aria-current="page">contact us</a>
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