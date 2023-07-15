import React, { useEffect, useState } from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ProductPageComponent from "../Components/ProductPageComponent"

import DummyProduct from "../Assets/Images/dummyImage/product.png"
import StainlessSteelHose from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Hose/stainless_steal.png"
	import StainlessSteelHose_11 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Stainless_Steel_Hose/p1.jpg"
	import StainlessSteelHose_12 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Stainless_Steel_Hose/p2.jpeg" 

    import StainlessSteelHose_21 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Flange_With_Bellow_Welded/p1.jpg"    
    import StainlessSteelHose_22 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Flange_With_Bellow_Welded/p2.jpg"

    import StainlessSteelHose_31 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Stainless_Steel_Flexible_Exhaust_Pipe/p1.jpg"    
    import StainlessSteelHose_32 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/Stainless_Steel_Flexible_Exhaust_Pipe/p2.jpg"
    
    import StainlessSteelHose_41 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p1.jpg"    
    import StainlessSteelHose_42 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p2.jpg"
    import StainlessSteelHose_43 from "../Assets/Images/upgrade_products/Flexible_Hose/Stainles_Steel_Hose/hose_with_custom_nut_fitting/p3.jpg" 

import RubberHose from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Hose/rubber_hose.png"
    import RubberHose_11 from "../Assets/Images/upgrade_products/Flexible_Hose/Rubber_Hose/Dredging_Hose/p1.jpg"
    import RubberHose_12 from "../Assets/Images/upgrade_products/Flexible_Hose/Rubber_Hose/Dredging_Hose/p2.jpg"

    import RubberHose_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Stainless_Steel_Bellow/Small_Metal_Bellow/p1.jpg"

    import RubberHose_3 from "../Assets/Images/upgrade_products/Flexible_Hose/Rubber_Hose/Rubber_Hose_Connector_with_Flange/p1.jpg"

    import RubberHose_41 from "../Assets/Images/upgrade_products/Flexible_Hose/Rubber_Hose/Slurry_Hose/p1.jpg"
    import RubberHose_42 from "../Assets/Images/upgrade_products/Flexible_Hose/Rubber_Hose/Slurry_Hose/p2.jpg"

    import RubberHose_51 from "../Assets/Images/upgrade_products/Flexible_Hose/Rubber_Hose/Hydralic_hose/p1.jpg"
    import RubberHose_52 from "../Assets/Images/upgrade_products/Flexible_Hose/Rubber_Hose/Hydralic_hose/p2.jpg"

    import RubberHose_61 from "../Assets/Images/upgrade_products/Flexible_Hose/Rubber_Hose/Hose_with_custom_fitting/p1.jpg"
    import RubberHose_62 from "../Assets/Images/upgrade_products/Flexible_Hose/Rubber_Hose/Hose_with_custom_fitting/p2.jpg"
    import RubberHose_63 from "../Assets/Images/upgrade_products/Flexible_Hose/Rubber_Hose/Hose_with_custom_fitting/p3.jpg"
    import RubberHose_64 from "../Assets/Images/upgrade_products/Flexible_Hose/Rubber_Hose/Hose_with_custom_fitting/p4.jpg"

import SpiralHose from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Hose/spiral_hose.png"
    import SpiralHose_11 from "../Assets/Images/upgrade_products/Flexible_Hose/Spiral_hose/Stainless_Steel_Spiral_Hose/p1.jpg"
    import SpiralHose_12 from "../Assets/Images/upgrade_products/Flexible_Hose/Spiral_hose/Stainless_Steel_Spiral_Hose/p2.jpg"

    import SpiralHose_2 from "../Assets/Images/upgrade_products/Flexible_Hose/Spiral_hose/G.I_Spiral_Hose/p1.jpg"

    import SpiralHose_31 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Fabric_Expansion_Joint/p1_new.png"
    import SpiralHose_32 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Fabric_Expansion_Joint/p2.jpg"

    import SpiralHose_41 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Fabric_Expansion_Joint/p1_new.png"
    import SpiralHose_42 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Fabric_Expansion_Joint/p2.jpg"

import PTFEHose from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Hose/ptfe_hose.png"
    import PTFEHose_11 from "../Assets/Images/upgrade_products/Flexible_Hose/PTFE_Hose/PTFE_Hose/p1.jpg"
    import PTFEHose_12 from "../Assets/Images/upgrade_products/Flexible_Hose/PTFE_Hose/PTFE_Hose/p2.jpg"

    import PTFEHose_21 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Bellow/p1.jpg"
    import PTFEHose_22 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Bellow/p2.jpg"

    import PTFEHose_31 from "../Assets/Images/upgrade_products/Flexible_Hose/PTFE_Hose/PTFE_Hose_Flange_Fitting/p1.jpeg"
    import PTFEHose_32 from "../Assets/Images/upgrade_products/Flexible_Hose/PTFE_Hose/PTFE_Hose_Flange_Fitting/p2.jpg"

const FlexibleHose = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const location = useLocation();
    const productId = searchParams.get('id') ? searchParams.get('id') : ""
 
    const data = [
        {
            id: "one", 
            title: "Stainless Steel Hose", 
            image: StainlessSteelHose,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Stainless Steel Hose",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ StainlessSteelHose_11, StainlessSteelHose_12 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },     
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Flange With Bellow Welded",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ StainlessSteelHose_21, StainlessSteelHose_22 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },       
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Stainless Steel Flexible Exhaust Pipe",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ StainlessSteelHose_31, StainlessSteelHose_32 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },  
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Hose with Custom Nut Fitting",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ StainlessSteelHose_41, StainlessSteelHose_42, StainlessSteelHose_43 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                }
            ]
        },
        {
            id: "two", 
            title: "Rubber Hose", 
            image: RubberHose,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Dredging Hose",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ RubberHose_11, RubberHose_12 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Rubber Flexible Suction Hose",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ RubberHose_2 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },            
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Rubber Hose Connector With Flange",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ RubberHose_3 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Slurry Hose",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ RubberHose_41, RubberHose_42 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Hydraulic Hose",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ RubberHose_51, RubberHose_52 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Hose With Custom Fitting",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ RubberHose_61, RubberHose_62, RubberHose_63, RubberHose_64 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },
            ]
        },        
        {
            id: "three", 
            title: "Spiral Hose", 
            image: SpiralHose,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Stainless Steel Spiral Hose",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ SpiralHose_11, SpiralHose_12 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "G.I Spiral Hose",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ SpiralHose_2 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },          
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Spiral Hose With Flange Welded",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ SpiralHose_31, SpiralHose_32 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Spiral Hose With Custom Fitting",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ SpiralHose_41, SpiralHose_42 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },
            ]
        },
        {
            id: "four", 
            title: "PTFE Hose", 
            image: PTFEHose,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "PTFE Hose",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ PTFEHose_11, PTFEHose_12 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Hose With Custom Fitting",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ PTFEHose_21, PTFEHose_22 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },          
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "PTFE Hose Flange Fitting",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ PTFEHose_31, PTFEHose_32 ],
					redirect: true,
                    redirectLink:  window.location.pathname + "/" + "flexible-hose-detail" ,
                },
            ]
        }
    ]

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

        <Footer />
        </>
    )
}

export default FlexibleHose