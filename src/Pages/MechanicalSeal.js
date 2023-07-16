import React, { useEffect, useState } from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import ProductPageComponent from "../Components/ProductPageComponent"
import DummyProduct  from "../Assets/Images/dummyImage/product.png"

import RubberBellowSeal   from "../Assets/Images/upgrade_products/Product_Header_Images/Mechanical_Seal/rbuber_Seal.png"
    import RubberBellowSeal_11 from "../Assets/Images/upgrade_products/Mechanical_seal/Rubber_Bellow_seal/ELASTOMER_BELOW_UNBALANCE_SEAL_DF62/p1.jpg"
    import RubberBellowSeal_12 from "../Assets/Images/upgrade_products/Mechanical_seal/Rubber_Bellow_seal/ELASTOMER_BELOW_UNBALANCE_SEAL_DF62/p2.jpg"
    import RubberBellowSeal_3 from "../Assets/Images/upgrade_products/Mechanical_seal/Rubber_Bellow_seal/ELASTOMER_BELOW_UNBALANCE_SEAL_DF8/p1.jpg"
    import RubberBellowSeal_4 from "../Assets/Images/upgrade_products/Mechanical_seal/Rubber_Bellow_seal/ELASTOMER_BELOW_UNBALANCE_SEAL_DF80/p1.jpg"
    import RubberBellowSeal_51 from "../Assets/Images/upgrade_products/Mechanical_seal/Rubber_Bellow_seal/ELASTOMER_BELOW_UNBALANCE_SEAL_DF4/p1.jpg"
    import RubberBellowSeal_52 from "../Assets/Images/upgrade_products/Mechanical_seal/Rubber_Bellow_seal/ELASTOMER_BELOW_UNBALANCE_SEAL_DF4/p2.jpg"
    import RubberBellowSeal_61 from "../Assets/Images/upgrade_products/Mechanical_seal/Rubber_Bellow_seal/ELASTOMER_BELOW_UNBALANCE_SEAL_DF27/p1.jpg"
    import RubberBellowSeal_62 from "../Assets/Images/upgrade_products/Mechanical_seal/Rubber_Bellow_seal/ELASTOMER_BELOW_UNBALANCE_SEAL_DF27/p2.jpg"

import MetalBellowMechanicalSeal from "../Assets/Images/upgrade_products/Product_Header_Images/Mechanical_Seal/metal_bellow.png"
    import MetalBellowMechanicalSeal_1 from "../Assets/Images/upgrade_products/Mechanical_seal/Metal_Bellow/MB001/p1.jpeg"
    import MetalBellowMechanicalSeal_2 from "../Assets/Images/upgrade_products/Mechanical_seal/Metal_Bellow/MB801/p1.jpg"

import GrundfosSeal from "../Assets/Images/upgrade_products/Product_Header_Images/Mechanical_Seal/grundfos.png"
    import GrundfosSeal_11 from "../Assets/Images/upgrade_products/Mechanical_seal/Grandfoss_seal/p1.jpg"
    import GrundfosSeal_12 from "../Assets/Images/upgrade_products/Mechanical_seal/Grandfoss_seal/p2.jpg"

import AgitatorSeal from "../Assets/Images/upgrade_products/Product_Header_Images/Mechanical_Seal/agitator.png"
    import AgitatorSeal_11 from "../Assets/Images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/PTFE_Stainless _Steel_Flange/p1.jpg"
    import AgitatorSeal_12 from "../Assets/Images/upgrade_products/Flexible_pipe_System/PTFE_Bellow/PTFE_Stainless _Steel_Flange/p2.jpg"
    import AgitatorSeal_21 from "../Assets/Images/upgrade_products/Mechanical_seal/Agatator_Seal/Agitator_Unbalanced_balanced_Double_seal/p1.jpg"
    import AgitatorSeal_22 from "../Assets/Images/upgrade_products/Mechanical_seal/Agatator_Seal/Agitator_Unbalanced_balanced_Double_seal/p2.jpeg"

import CartridgeSeal from "../Assets/Images/upgrade_products/Product_Header_Images/Mechanical_Seal/cartridge.png"
    import CartridgeSeal_11 from "../Assets/Images/upgrade_products/Mechanical_seal/Cartridge_Seal/Cartridge_Doubel_Mecanical_seal/p1.jpeg"
    import CartridgeSeal_12 from "../Assets/Images/upgrade_products/Mechanical_seal/Cartridge_Seal/Cartridge_Doubel_Mecanical_seal/p2.jpeg"
    import CartridgeSeal_13 from "../Assets/Images/upgrade_products/Mechanical_seal/Cartridge_Seal/Cartridge_Doubel_Mecanical_seal/p3.jpg"
    import CartridgeSeal_2 from "../Assets/Images/upgrade_products/Mechanical_seal/Cartridge_Seal/High_Pressure_Mecanical_seal/p1.jpeg"

const MechanicalSeal = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const location = useLocation();
    const productId = searchParams.get('id') ? searchParams.get('id') : ""

    const data = [
        {
            id: "one", 
            title: "Rubber Bellow Seal", 
            image: RubberBellowSeal, 
            products: [
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "ELASTOMER BELOW UNBALANCE SEAL-DF62",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ RubberBellowSeal_11, RubberBellowSeal_12 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "ELASTOMER BELOW UNBALANCE SEAL-DF90",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "ELASTOMER BELOW UNBALANCE SEAL-DF8",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ RubberBellowSeal_3 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "ELASTOMER BELOW UNBALANCE SEAL-DF80",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ RubberBellowSeal_4 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "ELASTOMER BELOW UNBALANCE SEAL-DF4",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ RubberBellowSeal_51, RubberBellowSeal_52 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "ELASTOMER BELOW UNBALANCE SEAL-DF27",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ RubberBellowSeal_61, RubberBellowSeal_62 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
            ]
        },
        {
            id: "two", 
            title: "Metal Bellow Mechanical Seal", 
            image: MetalBellowMechanicalSeal,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "ELASTOMER BELOW UNBALANCE SEAL-DF62",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ MetalBellowMechanicalSeal_1 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "ELASTOMER BELOW UNBALANCE SEAL-DF90",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ MetalBellowMechanicalSeal_2 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }              
            ]
        },        
        {
            id: "three", 
            title: "Teflon Bellow Mechanical Seal", 
            image: DummyProduct,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "DF-TBMO1",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "DF-TBM027",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }
            ]
        },
        {
            id: "four", 
            title: "Grundfos Mechanical seal", 
            image: GrundfosSeal,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Grundfos Mechanical Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ GrundfosSeal_11, GrundfosSeal_12 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }
            ]
        },
        {
            id: "five", 
            title: "Multi Spring Mechanical Seal", 
            image: DummyProduct,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Multi Spring Unbalanced /Balanced Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Multi Spring Unbalanced/balanced Close Type Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Multi Spring Balanced Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Multi Spring Unbalanced Double Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }              
            ]
        },
		{
            id: "six", 
            title: "Single Spring Mechanical Seal", 
            image: DummyProduct,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Conical Spring Balanced /Unbalanced Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Single Spring Balanced /Unbalanced Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Single Coil Spring Balanced /Unbalanced Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Wave Spring Balanced /Unbalanced Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }              
            ]
        },
		{
            id: "seven", 
            title: "Agitator Seal", 
            image: AgitatorSeal,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Agitator Unbalanced /Balanced Single Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ AgitatorSeal_11, AgitatorSeal_12 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Agitator Unbalanced /Balanced Double Seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ AgitatorSeal_21, AgitatorSeal_22 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }
            ]
        },
		{
            id: "eight", 
            title: "Cartridge Seal", 
            image: CartridgeSeal,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Cartridge unbalanced double seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ CartridgeSeal_11, CartridgeSeal_12, CartridgeSeal_13 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                },
				{
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "High pressure cartridge balanced seal",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ CartridgeSeal_2 ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }
            ]
        },
		{
            id: "nine", 
            title: "Dry Running Seal", 
            image: DummyProduct,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "DF-DR456",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ DummyProduct, DummyProduct ],
					redirect: true,
                    redirectLink:  window.location.pathname,
                }
            ]
        },
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

export default MechanicalSeal