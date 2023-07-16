import React, { useEffect, useState } from 'react'
import SingleArchImage from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/Rubber_Expansion_Bellow/Single_Arch_Expansion_Joint.png"
import DoubleArchImage from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/Rubber_Expansion_Bellow/double_arch_expansion_joint.png"
import ElbowExpansionImage from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/Rubber_Expansion_Bellow/Elbow_Expansion_Joint.png"
import ReducerExpansionImage from "../Assets/Images/upgrade_products/Product_Header_Images/Flexible_Pipe_System/Rubber_Expansion_Bellow/Reducer_Expansion_Joint.png"
import UnionExpansionImage from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Union_Expansion_Bellow/p1.jpg"
import { useParams } from 'react-router-dom'
import { FlexiblePipePaths } from '../constant'
import SingleArchData from "../JSON/FlexiblePipeSystem/SingleArchExpansion.json"
import DoubleArchData from "../JSON/FlexiblePipeSystem/DoubleArchExpansion.json"
import ElbowExpansionData from "../JSON/FlexiblePipeSystem/ElbowExpansion.json"
import ReducerExpansionData from "../JSON/FlexiblePipeSystem/ReducerExpansion.json"
import UnionRubberData from "../JSON/FlexiblePipeSystem/UnionRubberBellow.json"
import { productRouteCapitalizeEachLetter } from '../helper'
import Footer from '../Components/footer'
import Header from '../Components/header'
import Modal from 'react-bootstrap/Modal';

const FlexiblePipeSystemDetail = () => {

    const { product } = useParams() 

    const [data, setData] = useState()
    const [img, setImg] = useState()
    const [size, setSize] = useState()
    const [modal, setModal] = useState({data: {}, show: false})
    const isSizedVariation = data?.[0]?.size ? true : false

    useEffect(() => {
        switch (product) {
            case FlexiblePipePaths.SingleArchExpansionJoint:
                setData(SingleArchData)
                setImg(SingleArchImage)
                setSize("medium")
                break;
            case FlexiblePipePaths.DoubleArchExpansionJoint:
                setData(DoubleArchData)
                setImg(DoubleArchImage)
                setSize("medium")
                break;
            case FlexiblePipePaths.ElbowExpansionJoint:
                setData(ElbowExpansionData)
                setImg(ElbowExpansionImage)
                break;
            case FlexiblePipePaths.ReducerExpansionJoint:
                setData(ReducerExpansionData)
                setImg(ReducerExpansionImage)
                break;
            case FlexiblePipePaths.UnionRubberBellow:
                setData(UnionRubberData)
                setImg(UnionExpansionImage)
                break;
            default:
                break;
        }
    }, [product])

    return (
        <>  
            <Header />
            <div className="flexible_pipe_system products_category">
                <section>
                    <div className="container bg_gray_200">
                        <div className="row mx-0 product_top_header ps-3 pe-3 pt-5 pb-5">
                            <div className="col-lg-2">
                                <div className="pro_200">
                                    <img src={img}  className="d-block" alt="single arch expansion joint" />
                                </div>

                            </div>
                            <diV className="col-lg-10">
                                <p className="mb-1 fs_30 fw_600 text_secondary">{productRouteCapitalizeEachLetter(product)}</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum inventore, ut est ipsum cupiditate ea earum ullam! Nemo laborum iusto amet consectetur veniam numquam maiores eos, placeat nobis perferendis.</p>
                            </diV>
                        </div>
                    </div>
                </section>

                <section className="product_list">
                    <div className="container px-0 py-4 list active container-list">
                        {
                            isSizedVariation
                            ?
                                <div className="row justify-content-center align-items-center mb-4">
                                    <div className="col-lg-4">
                                        <span  className="btn btn-commn-bg-primary w-100" onClick={() => setSize('medium')}>Medium</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <span  className="btn btn-commn-bg-primary w-100" onClick={() => setSize('large')}>Large</span>
                                    </div>
                                </div>
                            :
                            ""
                        }
                        <div className="product_grid_container selectProductSize product_grid_wrapper">
                            {
                                isSizedVariation
                                ?
                                data?.filter(el => el?.size === size)?.map(el => (
                                    <div className="grid-item px-0 product_card_outer">
                                        <div className="card text-center">
                                            <div className="sub_card_img">
                                                <img src={img} className="card-img-top" alt={productRouteCapitalizeEachLetter(product)} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{productRouteCapitalizeEachLetter(product)}</h5>
                                                <p className="card-text fs_12">{el.description} {productRouteCapitalizeEachLetter(product)}</p>
                                                <span className="btn btn-commn-bg-primary w-100" onClick={() => setModal({show: true, data: el})}>Quick View</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                :
                                data?.map(el => (
                                    <div className="grid-item px-0 product_card_outer">
                                        <div className="card text-center">
                                            <div className="sub_card_img">
                                                <img src={img} className="card-img-top" alt={productRouteCapitalizeEachLetter(product)} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{productRouteCapitalizeEachLetter(product)}</h5>
                                                <p className="card-text fs_12">{el.description} {productRouteCapitalizeEachLetter(product)}</p>
                                                <span className="btn btn-commn-bg-primary w-100" onClick={() => setModal({show: true, data: el})}>Quick View</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>

            <Modal show={modal?.show} centered size="xl" onHide={() => setModal({})} animation={true} backdrop="static">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable m-0">
                    <div className="modal-content br_6">
                        <div className="modal-body pb-6 pt-6 text-left position-relative">
                            <button type="button" className="btn-close position-absolute" onClick={() => setModal()} style={{right: "2rem", top: "1rem"}}></button>
                            <div className="row">
                                <div className="col-lg-auto col-sm-auto">
                                    <div className="pro_200">
                                        <img src={img} alt= {productRouteCapitalizeEachLetter(product)} />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-sm-8">
                                    <h3>{modal?.data?.description} Deroflex Single Arch Expansion Joint(Rotating)</h3>
                                    <p className="mb-2 fs_12">
                                        {modal?.data?.description} Single Arch Expansion Joint Both Side Flange - for pipe expansion, misalignment and vibration.
                                    </p>
                                    <ul className="fs_14">
                                        <li className="list_inside">Deign :- Rotating </li>
                                        <li className="list_inside">Standard Length :- 130 MM , 150 MM </li>
                                        <li className="list_inside">Pressure :- 2 -25kg</li>
                                        <li className="list_inside">Application :- Water , oil </li>
                                        <li className="list_inside">Flange Materials – Mild Steel , Stainless steel </li>
                                        <li className="list_inside">Materials :- EPDM , Synthetic ,Food Grade </li>
                                    </ul>
            
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

export default FlexiblePipeSystemDetail