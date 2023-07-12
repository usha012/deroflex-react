import React from 'react'
import RubberBellowP1_1 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p1.jpg"
import RubberBellowP1_2 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p2.png"
import RubberBellowP1_3 from "../Assets/Images/upgrade_products/Flexible_pipe_System/Rubber_Expansion_Bellow/Singel_Arch_Expansion_Bellow/p3.jpeg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({card, setModal}) => {

    const productItemOwlCarouselSetting = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    }

  return (
    <div class="grid-item px-0 product_card_outer">
        <div class="card text-center">
            <Slider className="" style={{height: "190px", width: "250px"}} {...productItemOwlCarouselSetting}>
                {
                    card?.images?.map(img => (
                        <div className={``}>
                            <img src={img} style={{height: "190px", ObjectFit: "cover"}} className="d-block w-100" alt="Single Arch Expansion Joint" />
                        </div>
                    ))
                }
            </Slider>
            <div class="card-body" style={{width: "250px"}}>
                <h5 class="card-title">{card?.title}</h5>
                <p class="card-text fs_12">{card?.description}</p>
                {
                    card?.redirect
                    ?
                    <a href={card?.redirectLink} target="_blank" class="btn btn-commn-bg-primary w-100">View More</a>
                    :
                    ""
                }
                {
                    card?.modal
                    ?
                    <span class="btn btn-commn-bg-primary w-100" onClick={() => setModal({data: card, show: true})}>Quick View</span>
                    :
                    ""
                }
            </div>
        </div>
    </div>
  )
}

export default ProductCard