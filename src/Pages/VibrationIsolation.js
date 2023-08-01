import React, { useEffect, useState } from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import Pad from "../Assets/Images/upgrade_products/Product_Header_Images/Vibration_Isolation/pad.png"
    import Pad_1 from "../Assets/Images/upgrade_products/Vibration_Isolation/pad/Bridge_bearing_pad/p1.jpg"
    import Pad_2 from "../Assets/Images/upgrade_products/Vibration_Isolation/pad/Cork_Sandwich_Pad/p1.jpg"
    import Pad_3 from "../Assets/Images/upgrade_products/Vibration_Isolation/pad/EPDM_Rubber_Pad/p1.jpg"
    import Pad_4 from "../Assets/Images/upgrade_products/Vibration_Isolation/pad/Metal_Sandwich_Pad/p1.jpg"
    import Pad_5 from "../Assets/Images/upgrade_products/Vibration_Isolation/pad/Ribbed_Mounting_Pad/p1.jpg"
    import Pad_6 from "../Assets/Images/upgrade_products/Vibration_Isolation/pad/Square_Cell_Rubber _Pad/p1.jpg"

import Mount from "../Assets/Images/upgrade_products/Product_Header_Images/Vibration_Isolation/mount.png"
    import Mount_1 from "../Assets/Images/upgrade_products/Vibration_Isolation/Rubber_Metal_Bonded_anti_vibration_mounded/Genset_mounts/p1.jpg"
    import Mount_21 from "../Assets/Images/upgrade_products/Vibration_Isolation/Rubber_Metal_Bonded_anti_vibration_mounded/Sandwich_Mounting/p1.jpg"
    import Mount_22 from "../Assets/Images/upgrade_products/Vibration_Isolation/Rubber_Metal_Bonded_anti_vibration_mounded/Sandwich_Mounting/p2.jpeg"
    import Mount_3 from "../Assets/Images/upgrade_products/Vibration_Isolation/Rubber_Metal_Bonded_anti_vibration_mounded/Metalastik_cushy_foot_Mounting/p1.jpeg"
    import Mount_4 from "../Assets/Images/upgrade_products/Vibration_Isolation/Rubber_Metal_Bonded_anti_vibration_mounded/U_Shear_mount/p1.jpeg"
    import Mount_51 from "../Assets/Images/upgrade_products/Vibration_Isolation/Rubber_Metal_Bonded_anti_vibration_mounded/Metalastik_Rubber_Mounts/p1.jpg"
    import Mount_52 from "../Assets/Images/upgrade_products/Vibration_Isolation/Rubber_Metal_Bonded_anti_vibration_mounded/Metalastik_Rubber_Mounts/p2.jpg"
    import Mount_61 from "../Assets/Images/upgrade_products/Vibration_Isolation/Rubber_Metal_Bonded_anti_vibration_mounded/Circular_Vibration_Mounting/p1.jpg"
    import Mount_62 from "../Assets/Images/upgrade_products/Vibration_Isolation/Rubber_Metal_Bonded_anti_vibration_mounded/Circular_Vibration_Mounting/p2.jpg"

import SpringIsolator from "../Assets/Images/upgrade_products/Product_Header_Images/Vibration_Isolation/spring_isolater.png"
    import SpringIsolator_11 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/Spring_Hangers/p1.jpg"
    import SpringIsolator_12 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/Spring_Hangers/p2.jpg"
    import SpringIsolator_2 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/Rubber_close_spring_mounts/p1.jpg"
    import SpringIsolator_3 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/Enclosed_Spring_mounts/p1.jpg"
    import SpringIsolator_41 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/open_spring_mounts/p1.jpg"
    import SpringIsolator_42 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/open_spring_mounts/p2.jpg"
    import SpringIsolator_51 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/open_spring_damper/p1.jpg"
    import SpringIsolator_52 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/open_spring_damper/p2.jpg"
    import SpringIsolator_61 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/heavy_duty_spring _mounts/p1.jpg"
    import SpringIsolator_62 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/heavy_duty_spring _mounts/p2.jpg"
    import SpringIsolator_71 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/Restrained_Spring_Mounts/p1.jpg"
    import SpringIsolator_72 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/Restrained_Spring_Mounts/p2.jpg"
    import SpringIsolator_81 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/Housed_spring_mounting/p1.jpg"
    import SpringIsolator_82 from "../Assets/Images/upgrade_products/Vibration_Isolation/Spring_Based_Vibration_Isolator/Housed_spring_mounting/p2.jpg"

import RiserIsolatorSupport from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/pneumatic_air_bellow.png"
    import RiserIsolatorSupport_11 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Bellow/p1.jpg"
    import RiserIsolatorSupport_12 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Pneumatic_Air_Bellow/Air_Bellow/p2.jpg"
    import RiserIsolatorSupport_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Fabric_Bellow/Fabric_Expansion_Joint/p2.jpg"
import WireRope from "../Assets/Images/upgrade_products/Product_Header_Images/Vibration_Isolation/wire_rope.png"
	import WireRope_1 from "../Assets/Images/upgrade_products/Vibration_Isolation/Wire_Rope_Suspension_System/p1.jpg"

import ProductPageComponent from "../Components/ProductPageComponent"

const FlexiblePipeSystem = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const location = useLocation();
    const productId = searchParams.get('id') ? searchParams.get('id') : ""

    const data = [
        {
            id: "one", 
            title: "Pad", 
            image: Pad, 
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Elastomeric Bridge Bearing Pad  ",
                    modal: true,
                    buy: true,
                    description:
                      "Elastomeric Bearing Pad Neoprene rubber with both side plane plate - are easy to install in bridges.",
                    images: [ Pad_1 ],
                    features: [
                      "Bridge Bearing Pads are specially designed with one or multiple layers of elastomers that are bonded to internal steel laminates. These bearing pads are widely used in the construction of bridges and other structures for bearing the vertical load",
                      "Design load of the bearing is equivalent to 10 M Pa",
                      "Offers highest level of sound attenuation and vibration controller."
                    ],
                    property: [
                      {name: "Shape", data: ["Square", "circle"]},
                      {name: "Material", data: ["Rubber and steel"]},
                      {name: "Reduces", data: ["Vibrations CONTROL"]},
                      {name: "Size", data: [`3’’ x 3’’ | Max - 18’’ x 18’`]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "Colour", data: ["Silver /Black"]},
                      {name: "ProductType", data: ["Bridge Mounts"]},
                      {name: "LoadCapacity", data: ["Upto 4000 kgs"]},
                      {name: "Hardness", data: ["60% -65%"]}
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Cork Sandwich Pad",
                    modal: true,
                    buy: true,
                    description:
                      "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ Pad_2 ],
                    features: [
                      "Cork Sandwich Pad are laminated pads having thick close grained cork securely attached between two layers  alternate low-high ribbed  rubber pads",
                      "Offers highest level of sound attenuation and vibration controller"
                    ],
                    property: [
                      {name: "Shape", data: ["Square", "Round"]},
                      {name: "Material", data: ["Neoprene", "compounded rubber & Cork"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Size", data: [`Min - 7/8’’ x 3’’ x 3’’ | Max - 7/8’’ x 18’’ x 18’’`]},
                      {name: "Colour", data: ["Black"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["AS PER SIZE"]},
                      {name: "Hardness", data: ["75% - 85%"]}
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex EPDM Rubber Pad",
                    modal: true,
                    buy: true,
                    description:
                      "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ Pad_3 ],
                    features: [
                      "Ethylene Propylene Diene Monomer is known for working in operating temperature ranging from -45°C to + 120°C. Rubber Pad Mould with various type of shape  & various  layer of nylon and rubber",
                      "it is extremely resistant to oxidation, U.V. Rays, Water, Weather and Ozone.",
                      "Offers highest level of sound attenuation and vibration controller."
                    ],
                    property: [
                      {name: "Shape", data: ["Square", "Round"]},
                      {name: "Material", data: ["Neoprene", "Natural"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Size", data: [`3’’ x 3’’ | Max -  18’’ x 18’`]},
                      {name: "Colour", data: ["Black"]},
                      {name: "Thickness", data: ["10 MM -75 MM"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["AS PER SIZE"]}
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Metal Sandwich Pad",
                    modal: true,
                    buy: true,
                    description:
                      "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ Pad_4 ],
                    features: [
                      "Metal Sandwich Pads are constructed of a steel plate bonded between ribbed and vibration pads.",
                      "Designed for very high load capacity.",
                    ],
                    property: [
                      {name: "Shape", data: ["Square"]},
                      {name: "Material", data: ["Neoprene", "compounded rubber & Metal"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Size", data: [`3/4’’ x 3’’ x 3’’ | Max - 1’’ x 18’’ x 18’`]},
                      {name: "Colour", data: ["Black"]},
                      {name: "Thickness", data: ["10 MM -30 MM"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["32400 LBS (14696 Kg)"]}
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Ribbed Mounting Pad",
                    modal: true,
                    buy: true,
                    description:
                      "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ Pad_5 ],
                    features: [
                      "Alternate high-low ribbed construction.",
                      "Pads can be cut to be slightly larger than the size of the leg or machine, using shear or knife.",
                      "Multiple layers of Ribbed Mounting Pad can be used to increase deflection."
                    ],
                    property: [
                      {name: "Shape", data: ["Square","Round"]},
                      {name: "Material", data: ["Neoprene", "Natural"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Size", data: [`3/4’’ x 3’’ x 3’’ | Max - 1’’ x 18’’ x 18’`]},
                      {name: "Colour", data: ["Black"]},
                      {name: "Hardness", data: ["75% - 85%"]},
                      {name: "Thickness", data: ["10 MM"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity KG", data: ["MIN 402 / MAX 16200"]},
                      {name: "LoadCapacity LBS", data: ["MIN 360 / MAX 16200"]}
                    ] 
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Square Cell Rubber Pad",
                    modal: true,
                    buy: true,
                    description:
                      "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ Pad_6 ],
                    features: [
                      "Square Cell Rubber Pads are constructed of three layers of square cell rubber and steel plates of 1mm / 1.5 mm thickness.",
                      "The square cell design the pad offers better grip on the floor surface.",
                      "Higher load capacity than Ribbed Multi Layer Pad."
                    ],
                    property: [
                      {name: "Shape", data: ["Square"]},
                      {name: "Material", data: ["Neoprene"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Size", data: [`7/8’’ x 3’’ x 3’’ | Max - 7/8’’ x 18’’ x 18’`]},
                      {name: "Colour", data: ["Black"]},
                      {name: "Hardness", data: ["75% - 85%"]},
                      {name: "Thickness", data: ["10 MM"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["AS PER SIZE"]}
                    ]
                }            
            ]
        },
        {
            id: "two", 
            title: "Rubber and Metal Bonded anti vibration mounded", 
            image: Mount,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Genset Mounts",
                    modal: true,
                    buy: true,
                    description:
                      "Genset Mount are covered with metal body  provide easy fitting below the Machine & ensures a long fatigue life.",
                    images: [ Mount_1 ],
                    features: [
                      "The Genset mounts are covered with metal body on the top and bottom to prevent any oil from entering and damaging the mounts. The generator mounts can be mounted on both external and internal generator frames. The compact design of the generator mounts provide easy fitting below the generator. The thick metallics base flange of the generator mounts ensures a long fatigue life"
                    ],
                    property: [
                      {name: "Shape", data: ["Round", "SQUARE"]},
                      {name: "Material", data: ["Steel and rubber"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Colour", data: ["SILVER"]},
                      {name: "ProductType", data: ["Mounts"]},
                      {name: "LoadCapacity", data: ["AS PER SIZE "]}
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Sandwich Mount",
                    modal: true,
                    buy: true,
                    description:
                      "Sandwich Mount have  excellent way to reduce vibration and shock Control –  Neoprene rubber  has high tensile strength and abrasion resistance",
                    images: [ Mount_21, Mount_22 ],
                    features: [
                      "Sandwich mounts are an excellent way to reduce vibration and shock &. metal  plates are typically made of steel, aluminum, or stainless steel. Sandwich mounts also act as buffers in spring mounts and are used in sensitive equipment where even a small amount of vibration can have a substantial impact. It has excellent for  vibration reduction and fatigue resistance"
                    ],
                    property: [
                      {name: "Shape", data: ["SQUARE", "ROUNG"]},
                      {name: "Deflection", data: ["5.6 MM /14 MM"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Hardness", data: ["60 % -65 %"]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["4000 KG  "]},
                      {name: "Colour", data: ["SILVER"]},
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Metalastik Cushy Foot Mount",
                    modal: true,
                    buy: true,
                    description:
                      "Cushy Foot Mount have  high load carrying capacity  energy control –And  protect both the machine and building floor from vibration damage.",
                    images: [ Mount_3 ],
                    features: [
                      "DEROFLEX Cushy Foot Mounts consists of two rubber & metal bonded rectangular elements inclined to achieve maximum load and deflection using a combination of compression and shear loading. .The mountings are protected against oil, physical & mechanical damages . These mounts have very low natural frequencies and possess good lateral stability"
                    ],
                    property: [
                      {name: "Shape", data: ["SQUARE"]},
                      {name: "Deflection", data: ["5.6 MM /14 MM "]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Hardness", data: ["60 % -65 %"]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["77 KG -1580 KG "]},
                      {name: "Colour", data: ["SILVER"]},
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Double U Shear Mount ",
                    modal: true,
                    buy: true,
                    description:
                      ":-  U Shear Mount is for isolating the vibrations from low-speed machines &  protect sensitive - light weight units from external shock vibrations.",
                    images: [ Mount_4 ],
                    features: [
                      "DEROFLEX  Shear Mounts aim is to protect sensitive and light weight units from external shock vibrations. Shear  Mount  molded with rubber & metal U type to permit high deflection and provide excellent isolation of low frequencies. and essential components for varied industrial machines and equipment . These mounts protect lightweight and sensitive units against external vibrations and shocks"
                    ],
                    property: [
                      {name: "Shape", data: ["SQUARE"]},
                      {name: "Material", data: ["NBR"]},
                      {name: "Deflection", data: ["5.6 MM /6 MM"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Hardness", data: ["45 % -70 %"]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["33 KG -160 KG"]},
                      {name: "Colour", data: ["BLACK"]},
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Metalastik Rubber Mounts ",
                    modal: true,
                    buy: true,
                    description:
                      "Rubber Mounts  reducing vibration  in heavy machinery  & also absorb sound  from machines to minimise wear and damage.",
                    images: [ Mount_51, Mount_52 ],
                    features: [
                      "DEROFLEX Rubber Mounts is molded with both side metal plates for high strength of loading and vibration control. These mount are available under different design and finish configurations to match up with the fixing demands from small portable generators to large power backup systems. Its advantages for support insulating of structure-based noise, support dampening vibrations of generator."
                    ],
                    property: [
                      {name: "Shape", data: ["ROUND"]},
                      {name: "Deflection", data: ["5.6 MM /6 MM"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Hardness", data: ["60 % -65 %"]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["4000 KG"]},
                      {name: "Colour", data: ["SILVER"]},
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Circular Vibration Mounting ",
                    modal: true,
                    buy: true,
                    description:
                      "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    images: [ Mount_61, Mount_62 ],
                    features: [
                      "DEROFLEX CIRCULAR ISOLATORS also known as BOBBIN MOUNTINGS, are simple low cost versatile Isolators of rugged construction for use in wide variety of applications to ease misalignment problems  permit relative movement as in vibratory rollers, shifting & grading machines."
                    ],
                    property: [
                      {name: "Shape", data: ["ROUND"]},
                      {name: "Deflection", data: ["Up To 5mm"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Material", data: ["Rubber and steel"]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["1 Kg To over 800 Kgs"]},
                      {name: "Colour", data: ["BLACK & Silver"]},
                    ]
                }            
            ]
        },        
        {
            id: "three", 
            title: "Spring Based Vibration Isolator", 
            image: SpringIsolator,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Spring Hangers",
                    modal: true,
                    buy: true,
                    description:
                      "Spring vibration isolation hangers are designed to provide high efficiency isolation from structure-borne vibration and noise.",
                    images: [ SpringIsolator_11, SpringIsolator_12 ],
                    features: [
                      "Spring hangers are used to isolate suspended sources of both noise and vibration",
                      "Suspended mechanical equipment such as air handling units, FCU’s, cabinet fans, piping and ductwork in close proximity to rotating mechanical equipment are typical applications of spring hangers",
                      "Color coded springs as per load ratings",
                      "Outer diameter equal to at least 85% of working height",
                      "Springs designed for 50% overload capacity",
                      "Housings are either powder-coated or hot-dip galvanized to fit its environment",
                      "Mild steel cold forged sheet with variable spring to installed with the help of bolt & nut fixment"
                    ],
                    property: [
                      {name: "Shape", data: ["Square"]},
                      {name: "Material", data: ["Steel"]},
                      {name: "Deflection", data: ["15 MM /30 MM "]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["15 kg "]},
                      {name: "Colour", data: ["RED","SILVER"]}
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Rubber close spring mount",
                    modal: true,
                    buy: true,
                    description:
                      "spring mount based on Neoprene top and bottom with non skid bolt down base are used to isolate noise and vibration from floor mounting equipment.",
                    images: [ SpringIsolator_2 ],
                    features: [
                      "Close spring mounts based on Neoprene top and bottom with nonskid bolt down base are used to isolate noise and vibration from floor mounting equipment .Outer diameter equal to at least 85% of working height & Springs designed for 50% overload capacity",
                    ],
                    property: [
                      {name: "Shape", data: ["Square"]},
                      {name: "Material", data: ["Steel"]},
                      {name: "Deflection", data: ["15 MM /30 MM "]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["1889 kg"]},
                      {name: "Colour", data: ["RED","SILVER"]}
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Enclosed Spring Mounts",
                    modal: true,
                    buy: true,
                    description:
                      "Spring Mount Which is control of low frequency vibration and noise emitting from mechanical equipments - Rubber With Noise Cover Stand in base SS plate mould with rubber pad.",
                    images: [ SpringIsolator_3 ],
                    features: [
                      "DEROFLEX  SS enclosed Spring  cover top cap and helical spring  inside fully enclosed captive assembly protects spring , Neoprene Rubber With Noise Cover Stand in base SS plate mould with rubber pad ",
                      
                    ],
                    property: [
                      {name: "Shape", data: ["Round"]},
                      {name: "Material", data: ["Mild Steel","Stainless Steel"]},
                      {name: "Deflection", data: ["20 MM /50 MM"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["10 KG -500 KG"]},
                      {name: "Colour", data: ["SILVER"]}
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Open Spring Mounts",
                    modal: true,
                    buy: true,
                    description:
                      "Open Mounts Provide high frequency noise isolation & end fixing of springs  which also provides high frequency attenuation.",
                    images: [ SpringIsolator_41, SpringIsolator_42 ],
                    features: [
                      "Open Spring Mount  rubber seating pad and grommets ensure that there is no direct metal path between the machine and the seating, thus enhancing the high frequency noise isolation & end fixing of springs  which also provides high frequency attenuation. Loose springs and plates are now history and high frequency noise attenuation is provided regardless of whether a rubber seating padisused.",
                      
                    ],
                    property: [
                      {name: "Shape", data: ["Round","Square"]},
                      {name: "Material", data: ["Steel"]},
                      {name: "Deflection", data: ["15 MM /30 MM"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["4000 kg"]},
                      {name: "Colour", data: ["Silver","Red"]}
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Open Spring Damper",
                    modal: true,
                    buy: true,
                    description:
                      "installed  high frequency vibration and sound control - can reduce and dampen the vibrations.",
                    images: [ SpringIsolator_51, SpringIsolator_52 ],
                    features: [
                      "Loads up to several hundred tonnes",
                      "Up to 20% of critical damping",
                      "Concrete foundation isolation",
                      "Systems incorporate free standing spring units with viscous dampers.",
                      "Simple to install and reliable",
                      "Vertical natural frequencies in the range 1.4 to 3.0 Hz.",
                      "Lower foundation may be built less massively."
                      
                    ],
                    property: [
                      {name: "Shape", data: ["Square"]},
                      {name: "Material", data: ["Steel"]},
                      {name: "Deflection", data: ["13  MM /20 MM"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["8200 KG"]},
                      {name: "Colour", data: ["Silver"]}
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Heavy Duty Spring Mounts",
                    modal: true,
                    buy: true,
                    description:
                      "Spring Mount uses an integral rubber end fixing of the spring  & also high frequency  noise attenuation is provided with stable mounting.",
                    images: [ SpringIsolator_61, SpringIsolator_62 ],
                    features: [
                      "DEROFLEX Heavy Duty Spring Mount  uses an integral rubber end fixing of the spring which sets them apart from all other designs & also high frequency  noise attenuation is provided with stable mounting. Spring Mount are use   isolate vibration from every conceivable type of rotating and reciprocating machine. ",
                    ],
                    property: [
                      {name: "Shape", data: ["ROUNG"]},
                      {name: "Material", data: ["Mild Steel","Stainless Steel"]},
                      {name: "Deflection", data: ["20 MM /50 MM"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["50%"]},
                      {name: "Colour", data: ["Silver","Red"]}
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Restrained Spring Mounts",
                    modal: true,
                    buy: true,
                    description:
                      "Spring Isolators as a noise and vibration isolator for mechanical equipment located near critically quiet areas-Isolators springs assembled into welded steel housing assemblies fabricated.",
                    images: [ SpringIsolator_71, SpringIsolator_72],
                    features: [
                      "DEROFLEX  Restrained Spring (CSR) series provide vibration isolation for mechanical systems and equipment.",
                      "Restrained Spring Vibration Isolators consist of free-standing, large diameter, laterally stable steel springs assembled into welded steel housing assemblies fabricated to limit vertical movement of the isolated equipment if equipment loads are reduced or if the equipment is subjected to large external forces such as a seismic events",
                      "Top support plate caused by equipment operation or wind loading.."
                     
                    ],
                    property: [
                      {name: "Shape", data: ["Square"]},
                      {name: "Material", data: ["Steel"]},
                      {name: "Deflection", data: ["15 MM /30 MM"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "ProductType", data: ["Machine Mounts"]},
                      {name: "LoadCapacity", data: ["8800 kg"]},
                      {name: "Colour", data: ["Silver","Red"]}
                    ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Housed Spring Mount",
                    modal: true,
                    buy: true,
                    description:
                      "Cased  Mount act as noise breaks for high frequencies in the audible range - Neoprene  inserts below springs with  thick ribbed base pad.",
                    images: [ SpringIsolator_81, SpringIsolator_82 ],
                    features: [
                      "Cased  Mount act as noise breaks for high frequencies in the audible range – Neoprene rubber  inserts below springs with  thick ribbed base pad or coustical friction pad to eliminate bolting down",
                      "Ideally suited for high horizontal thrust applications and low frequency vibration problems."
                     
                    ],
                    property: [
                      {name: "Material", data: ["Mild Steel","Stainless Steel "]},
                      {name: "Deflection", data: ["20 MM - 40  MM"]},
                      {name: "Reduces", data: ["Vibrations"]},
                      {name: "Finishing", data: ["Galvanised"]},
                      {name: "ProductType", data: ["Mounting"]},
                      {name: "LoadCapacity", data: ["5000 KG"]},
                      {name: "Colour", data: ["Silver","Red"]}
                    ]
                }            
            ]
        },
        {
            id: "four", 
            title: "Riser Isolator Support", 
            image: RiserIsolatorSupport,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Riser Isolator Support",
                    modal: true,
                    buy: true,
                    description:
                      "vibration isolators as pipe riser supports can eliminate the potential for damage to the pipe and  building.",
                    images: [ RiserIsolatorSupport_11, RiserIsolatorSupport_12 ]
                },
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Close Spring Isolator ",
                    modal: true,
                    buy: true,
                    description:
                      "Closed Spring Isolators uses an integral rubber end fixing of the spring  and high frequency and noise attenuation is provided with stable mounting.",
                    images: [ RiserIsolatorSupport_2 ]
                }            
            ]
        },
        {
            id: "five", 
            title: "Wire Rope Suspension System", 
            image: WireRope,
            products: [
                {
                    id: "card_" + Math.ceil(Math.random() * 1000000000),
                    title: "Deroflex Wire rope suspension",
                    modal: true,
                    buy: true,
                    description: "wire rope suspension system can be used to support a very wide range of loads and objects.",
                    images: [ WireRope_1 ],
                    features: [
                        "Wire rope suspension is increasingly being used for mounting building services components in commercial, public sector and industrial buildings. Wire rope suspension can be used to support a very wide range of loads and objects. Its moderate loadings up to 1 tonne.",  
                    ],
                    property: [
                        {name: "Lateral load", data: ["1.73 kN"]},
                        {name: "Vertical load", data: ["1.00 kN"]},
                        {name: "Angle from the vertical", data: ["60’C"]},
                        {name: "Material", data: ["Steel"]},
                        {name: "Finishing", data: ["Galvanised"]},
                        {name: "ProductType", data: ["Machine Mounts"]},
                        {name: "LoadCapacity", data: ["2.00 kN"]},
                        {name: "Colour", data: ["Silver"]}
                    ]
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

        <Modal show={modal?.show} centered size="xl" onHide={() => setModal({})} animation={true} backdrop="static">
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable m-0">
                <div className="modal-content br_6">
                    <div className="modal-body p-6 custm_scroll text-left position-relative">
                        <button type="button" className="btn-close position-absolute" onClick={() => setModal()} style={{right: "2rem", top: "1rem"}}></button>
                        <div className="row mb-0 justify-content-center ">
                            <div className="col-lg-4">
                                <div className="float-start me-5 modal_product_img">
                                    <img src={modal?.data?.images?.[0]} alt={modal?.data?.title} />
                                </div>
                            </div>
                            <div className="col-lg-4 border-end"> 
                                <h3 className="f-w500">{modal?.data?.title}</h3>
                                {
                                    modal?.data?.features?.length
                                    ?
                                    <>
                                        <p className="fs_18 fw_500">Features and Benefits</p>
                                        {
                                            modal?.data?.features?.length === 1
                                            ? 
                                            <p className="fs_13">{modal?.data?.features?.[0]}</p>
                                            :
                                            ""
                                        }	
                                        {
                                            modal?.data?.features?.length > 1
                                            ? 
                                            <ul className="mb-3 fs_14 ps-3"> 
                                                {modal?.data?.features?.map(feature => <li>{feature}</li>)}
                                            </ul>
                                            :
                                            ""
                                        }
                                    </>
                                    :
                                    ""
                                }
                                
                                <span className=""><a className=" buy_btn btn btn-commn-bg-primary mb-0">Buy Now</a></span> 
                            </div>

							{
								modal?.data?.property?.length
								?
								<div className="col-lg-auto">
									{
										modal?.data?.property?.slice(0, 5)?.map(p => (
											<div className="products_property">
												<p className="mb-1 feature_title">{p?.name}</p>
												<p className="mb-1">
													{ p?.data?.map(badge => <span className="badge me-2 rounded-pill pills_primary">{badge}</span> ) }
												</p>
											</div>
										))
									}
									{
										modal?.showMore
										?
										modal?.data?.property?.slice(5)?.map(p => (
											<div className="products_property">
												<p className="mb-1 feature_title">{p?.name}</p>
												<p className="mb-1">
													{ p?.data?.map(badge => <span className="badge me-2 rounded-pill pills_primary">{badge}</span> ) }
												</p>
											</div>
										))
										:
										""
									}
									{
										modal?.showMore
										?
										<p id="showLessButton" className="showLessButton small_text_primary cursor_pointer fs_18" onClick={() => setModal({...modal, showMore: false})}>Show less</p>
										:
										<p id="showMoreButton" className="showMoreButton small_text_primary cursor_pointer fs_18" onClick={() => setModal({...modal, showMore: true})}>Show more</p>
									}
								</div>
								:
								""
							}
                            
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