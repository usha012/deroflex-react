import React, { useEffect, useState } from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import ProductPageComponent from "../Components/ProductPageComponent"

import DummyProduct from "../Assets/Images/dummyImage/product.png"

import PistonSeal from "../Assets/Images/upgrade_products/Product_Header_Images/Customize/piston_seal.png"
    import PistonSeal_11 from "../Assets/Images/upgrade_products/Customized/Piston_Seal/Rubber_Piston_seal/p1.jpeg"
    import PistonSeal_12 from "../Assets/Images/upgrade_products/Customized/Piston_Seal/Rubber_Piston_seal/p2.jpg"
    import PistonSeal_21 from "../Assets/Images/upgrade_products/Customized/Piston_Seal/PU_seal/p1.jpg"
    import PistonSeal_22 from "../Assets/Images/upgrade_products/Customized/Piston_Seal/PU_seal/p2.jpg"
    import PistonSeal_3 from "../Assets/Images/upgrade_products/Customized/Piston_Seal/Guide_ring/p1.jpg"
    import PistonSeal_4 from "../Assets/Images/upgrade_products/Customized/Piston_Seal/V_Seal/p1.jpg"
    import PistonSeal_5 from "../Assets/Images/upgrade_products/Customized/Piston_Seal/Custom_PTFE_Seal/p1.jpg"

import ORing from "../Assets/Images/upgrade_products/Product_Header_Images/Customize/o_ring.png"
    import ORing_11 from "../Assets/Images/upgrade_products/Customized/O_Ring/Custom_O_Ring/p1.jpg"
    import ORing_12 from "../Assets/Images/upgrade_products/Customized/O_Ring/Custom_O_Ring/p2.jpg"
    import ORing_2 from "../Assets/Images/upgrade_products/Customized/O_Ring/Silicon_O_Ring/p1.jpg"
    import ORing_3 from "../Assets/Images/upgrade_products/Customized/O_Ring/Natural_Rubber_O_Ring/p1.png"

import Gasket from "../Assets/Images/upgrade_products/Product_Header_Images/Customize/Gasket.png"
    import Gasket_1 from "../Assets/Images/upgrade_products/Customized/Geskect/Rubber_gasket/p1.jpg"
    import Gasket_2 from "../Assets/Images/upgrade_products/Customized/Geskect/spiral_wound_Metallic_gasket/p1.jpg"
    import Gasket_31 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Bellow/p1.jpg"
    import Gasket_32 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Bellow/p2.jpg"
    
import Coupling from "../Assets/Images/upgrade_products/Product_Header_Images/Customize/Coupling.png"
    import Coupling_11 from "../Assets/Images/upgrade_products/Customized/Coupling/Star_Coupling/p1.jpg"
    import Coupling_12 from "../Assets/Images/upgrade_products/Customized/Coupling/Star_Coupling/p2.jpg"
    import Coupling_21 from "../Assets/Images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/PTFE_Stainless _Steel_Flange/p1.jpg"
    import Coupling_22 from "../Assets/Images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/PTFE_Stainless _Steel_Flange/p2.jpg"
    import Coupling_31 from "../Assets/Images/upgrade_products/Customized/Coupling/Hub_Coupling/p1.jpg"
    import Coupling_32 from "../Assets/Images/upgrade_products/Customized/Coupling/Hub_Coupling/p2.png"
    
import RubberSheet  from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/PTFE_expansion_joints.png"

import Mat from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/PTFE_expansion_joints.png"


const Customized = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const location = useLocation();
    const productId = searchParams.get('id') ? searchParams.get('id') : ""
 
    const data = [
        {
            id: "one", 
            title: "Piston Seal", 
            image: PistonSeal,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Rubber Piston Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ PistonSeal_11, PistonSeal_12 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },     
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "PU seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ PistonSeal_21, PistonSeal_22 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },       
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Guide ring",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ PistonSeal_3 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },  
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "V Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ PistonSeal_4 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Custom PTFE Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ PistonSeal_5 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }
            ]
        },
        {
            id: "two", 
            title: "O-ring", 
            image: ORing,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Custom O-Ring",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ ORing_11, ORing_12 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Silicon O-Ring",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ ORing_2 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },            
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Natural Rubber O-Ring",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ ORing_3 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }
            ]
        },        
        {
            id: "three", 
            title: "Channel", 
            image: DummyProduct,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Rubber U channel",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "rubber V channel",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }
            ]
        },
        {
            id: "four", 
            title: "Gasket", 
            image: Gasket,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Rubber gasket",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ Gasket_1 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Spiral wound Metallic gasket",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ Gasket_2 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "PTFE Gasket",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }
            ]
        },
        {
            id: "five", 
            title: "Coupling", 
            image: Coupling,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Star Coupling",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ Coupling_11, Coupling_12 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Nylon Gear Coupling",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Hub Coupling",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ Coupling_31, Coupling_32 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }
            ]
        },
        {
            id: "six", 
            title: "Rubber Sheet", 
            image: DummyProduct,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Silicon Rubber Sheet",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Natural Rubber Sheet",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Synthetic Rubber Sheet",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }
            ]
        },
        {
            id: "seven", 
            title: "Mat", 
            image: DummyProduct,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Electrical Insulation Mat",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Black Rubber Mat",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Sponge Rubber Mat",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }
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

export default Customized