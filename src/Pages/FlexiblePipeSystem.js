import React, { useEffect, useState } from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import Modal from 'react-bootstrap/Modal';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import RubberBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/rubber_bellow.png"
    import SingleArchExpansionJoint_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p1.jpg"
    import SingleArchExpansionJoint_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p2.png"
    import SingleArchExpansionJoint_3 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p3.jpeg"

    import DoubleArchExpansionJoint_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Doubel_Arch_Expansion_Bellow/p1.jpeg"
    import DoubleArchExpansionJoint_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Doubel_Arch_Expansion_Bellow/p2.jpeg"
    import DoubleArchExpansionJoint_3 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Doubel_Arch_Expansion_Bellow/p3.jpeg"

    import ElbowExpansionJoint_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Elbow_Expansion_Bellow/p1.jpg"
    import ElbowExpansionJoint_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Elbow_Expansion_Bellow/p2.jpeg"

    import ReducerExpansionJoint_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Reducer_Expansion_Bellow/p1.jpeg"
    
    import UnionExpansionJoint_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Union_Expansion_Bellow/p1.jpg"

import StainlessSteel from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/stainless_steel.png"
    import ExpansionJointWelding_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Expansion_Joint_Welded_Ending/p1.jpg"
    import ExpansionJointWelding_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Expansion_Joint_Welded_Ending/p2.jpg"

    import SmallMetalBellow_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Small_Metal_Bellow/p1.jpg"

    import StainlessSteelExpansion_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Stainless_Steel_Expnsion_Bellow/p1.jpg"
    import StainlessSteelExpansion_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Stainless_Steel_Expnsion_Bellow/p2.jpg"

    import RectangularMetallicExpansion_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Rectangular_Metallic_Expansion_Joint/p1.jpg"
    import RectangularMetallicExpansion_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Rectangular_Metallic_Expansion_Joint/p2.jpeg"

import FabricBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/febric_bellow.png"
    import RectangularTypeFabricExpansion_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Rectangular_Type_Fabric_Expansion_Joint/p1.jpg"

    import FabricExpansionJoint_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Fabric_Expansion_Joint/p1_new.png"
    import FabricExpansionJoint_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Fabric_Expansion_Joint/p2.jpg"

    
import PneumaticAirBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/pneumatic_air_bellow.png"
    import AirBellow_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Bellow/p1.jpg"
    import AirBellow_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Bellow/p2.jpg"

    import AirSpring_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Spring/p1.jpg"
    import AirSpring_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Spring/p2.jpg"
    import AirSpring_3 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Spring/p3.jpg" 

    import RailwayAirBellow_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Railway_Air_Suspension_Bellow/p1.jpg"
    import RailwayAirBellow_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Railway_Air_Suspension_Bellow/p2.jpg"
    
import PTFRExpansionJoint from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/PTFE_expansion_joints.png"
    import PFTE_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/PTFE_Stainless _Steel_Flange/p1.jpg"
    import PFTE_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/PTFE_Stainless _Steel_Flange/p2.jpg"

    import PFTE_3 from "../Assets/Images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/Rubber_Bellow_Lined_PTFE_Expansion_Joint/p1.jpg"

    import PFTE_4 from "../Assets/Images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/SS_Bellow_Lined_PTFE_Expansion/p1.jpg"
    import PFTE_5 from "../Assets/Images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/SS_Bellow_Lined_PTFE_Expansion/p2.jpg"

import ProtectiveBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/protective_bellow.png"
    import ProtectiveBellow_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Natural_Rubber_bellow/p1.jpg"
    import ProtectiveBellow_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Natural_Rubber_bellow/p2.jpg"

    import ProtectiveBellow_3 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Protective_Bellow/protective_Silicon_bellow/p1.jpg"
    import ProtectiveBellow_4 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Protective_Bellow/protective_Silicon_bellow/p2.jpg"

    import ProtectiveBellow_5 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Canvas_Bellow/p1.jpeg"
    import ProtectiveBellow_6 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Canvas_Bellow/p2.png"

    import ProtectiveBellow_7 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Leather_Bellow/p1.jpg"
    import ProtectiveBellow_8 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Protective_Bellow/Leather_Bellow/p2.jpg"

import BusDuctBellow from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/bus_duct_bellow.png"
    import BusDuctBellow_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Rectangular_Type_Bus_Duct_Bellow/p1.jpeg"
    import BusDuctBellow_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Rectangular_Type_Bus_Duct_Bellow/p2.jpg"

    import BusDuctBellow_3 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Round_Type_Bus_Duct_Bellow/p1.jpg"
    
    import BusDuctBellow_4 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Railway_Rectangular_Bellow/p1.jpg"
    import BusDuctBellow_5 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Bus_Duct_Bellow/Railway_Rectangular_Bellow/p2.png"

import ProductCard from '../Components/productCard';
import { FlexiblePipePaths } from '../constant';
import { customStyles } from '../helper';
import ProductPageComponent from '../Components/ProductPageComponent';

const FlexiblePipeSystem = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const location = useLocation();
    const productId = searchParams.get('id') ? searchParams.get('id') : ""

    const data = [
        {
            id: "one", 
            title: "Rubber Expansion Bellow", 
            image: RubberBellow, 
            products: [
                {
                    id: "01", 
                    title: "Single Arch Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: true,
                    redirectLink: window.location.pathname + "/" + FlexiblePipePaths.SingleArchExpansionJoint  ,
                    images: [ SingleArchExpansionJoint_1, SingleArchExpansionJoint_2, SingleArchExpansionJoint_3 ]
                },
                {
                    id: "02", 
                    title: "Double Arch Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: true,
                    redirectLink: window.location.pathname + "/" + FlexiblePipePaths.DoubleArchExpansionJoint  ,
                    images: [ DoubleArchExpansionJoint_1, DoubleArchExpansionJoint_2, DoubleArchExpansionJoint_3 ]
                },
                {
                    id: "03", 
                    title: "Elbow Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: true,
                    redirectLink:  window.location.pathname + "/" + FlexiblePipePaths.ElbowExpansionJoint  ,
                    images: [ ElbowExpansionJoint_1, ElbowExpansionJoint_2 ]
                },
                {
                    id: "04", 
                    title: "Reducer Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: true,
                    redirectLink:  window.location.pathname + "/" + FlexiblePipePaths.ReducerExpansionJoint  ,
                    images: [ ReducerExpansionJoint_1]
                },
                {
                    id: "05", 
                    title: "Union Rubber Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    redirect: true,
                    redirectLink:  window.location.pathname + "/" + FlexiblePipePaths.UnionRubberBellow  ,
                    images: [ UnionExpansionJoint_1 ]
                }
            ]
        },
        {
            id: "two", 
            title: "Stainless Steel Bellow", 
            image: StainlessSteel,
            products: [
                {
                    id: "01",
                    title: "Expansion Joint Welded Ending", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ ExpansionJointWelding_1, ExpansionJointWelding_2]
                },
                {
                    id: "02",
                    title: "Small Metal Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ SmallMetalBellow_1, SmallMetalBellow_1]
                },
                {
                    id: "03",
                    title: "Stainless Steel Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ StainlessSteelExpansion_1, StainlessSteelExpansion_2]
                },
                {
                    id: "04",
                    title: "Rectangular Metallic Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ RectangularMetallicExpansion_1, RectangularMetallicExpansion_2]
                }
            ]
        },        
        {
            id: "three", 
            title: "Febric Bellow ", 
            image: FabricBellow,
            products: [
                {
                    id: "01",
                    title: "Rectangular Fabric Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ RectangularTypeFabricExpansion_1, RectangularTypeFabricExpansion_1]
                },
                {
                    id: "02",
                    title: "Fabric Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ FabricExpansionJoint_1, FabricExpansionJoint_2]
                }
            ]
        },
        {
            id: "four", 
            title: "Pneumatic Air Bellow", 
            image: PneumaticAirBellow,
            products: [
                {
                    id: "01",
                    title: "Air bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ AirBellow_1, AirBellow_2]
                },
                {
                    id: "02",
                    title: "Air spring", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ AirSpring_1, AirSpring_2, AirSpring_3]
                },
                { 
                    id: "03",
                    title: "Railways Suspension Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ RailwayAirBellow_1, RailwayAirBellow_2]
                }
            ]
        },
        {
            id: "five", 
            title: "PTFE Bellow", 
            image: PTFRExpansionJoint,
            products: [
                {
                    id: "01",
                    title: "PTFE with Stainless Steel Flange", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ PFTE_1, PFTE_2 ]
                },
                {
                    id: "02",
                    title: "Rubber Bellow Lined PTFE Expansion Joint", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ PFTE_3 ]
                },
                {
                    id: "03",
                    title: "SS Bellow Lined PTFE Expansion", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ PFTE_4, PFTE_5 ]
                }
            ]
        },
        {
            id: "six", 
            title: "Protective bellow", 
            image: ProtectiveBellow,
            products: [
                {
                    id: "01",
                    title: "Natural Rubber Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ ProtectiveBellow_1, ProtectiveBellow_2]
                },
                {
                    id: "02",
                    title: "Protective Silicon Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ ProtectiveBellow_3, ProtectiveBellow_4]
                },
                {
                    id: "03",
                    title: "Canvas Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ ProtectiveBellow_5, ProtectiveBellow_6]
                },
                {
                    id: "04",
                    title: "Leather Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ ProtectiveBellow_7, ProtectiveBellow_8]
                }
            ]
        },
        {
            id: "seven", 
            title: "Bus Duct Bellow", 
            image: BusDuctBellow,
            products: [
                {
                    id: "01",
                    title: "Rectangular Type Bus Duct Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ BusDuctBellow_1, BusDuctBellow_2]
                },
                {
                    id: "02",
                    title: "Round Type Bus Duct Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ BusDuctBellow_3]
                },
                {
                    id: "03",
                    title: "Railway Rectangular Bellow", 
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    modal: true,
                    images: [ BusDuctBellow_4, BusDuctBellow_5]
                }
            ]
        }
    ]

    const productOwlCarouselSetting = {
        loop:true,
        margin:10,
        autoplay:true,
        nav:true,
        dots:false,
        responsive:{ 0:{ items:1 }, 600:{ items:3 }, 1000:{ items:5 } }
    }

    const [displayCard, setDisplayCard] = useState("one")
    const [modal, setModal] = useState({data: {}, show: false})

    const setProductId = id => {
        setDisplayCard(id)
        navigate(location.pathname + `?id=${id}`, { replace: true });
    }

    useEffect(() => {
        setDisplayCard(productId ? productId : "one")
    }, [productId])

    return (
        <>
        <Header />

        <ProductPageComponent data={data} setProductId={setProductId} displayCard={displayCard} modal={modal} setModal={setModal} />

        <Modal show={modal?.show} centered size="xl" onHide={() => setModal({})} animation={true} backdrop="static">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable m-0">
                <div className="modal-content br_6">
                    <div className="modal-body pb-6 pt-6 text-left position-relative">
                        <button type="button" className="btn-close position-absolute" onClick={() => setModal()} style={{right: "2rem", top: "1rem"}}></button>
                        <div className="row">
                            <div className="col-lg-auto col-sm-auto">
                                <div className="pro_200"> <img src={modal?.data?.images?.[0]}/></div>
                            </div>
                            <div className="col-lg-8 col-sm-8">
                                <h3>{modal?.data?.title}</h3>
                                <p className="mb-0 fs_12">{modal?.data?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>

        <Footer />
        </>
    )
}

export default FlexiblePipeSystem