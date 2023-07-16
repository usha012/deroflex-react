import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

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
    <div className="grid-item px-0 product_card_outer">
        <div className="card text-center h-100">
            <Slider className="" style={{height: "190px", width: "250px"}} {...productItemOwlCarouselSetting}>
                {
                    card?.images?.map(img => (
                        <div className={``}>
                            <img src={img} style={{height: "190px", ObjectFit: "cover"}} className="d-block w-100" alt={card?.title} />
                        </div>
                    ))
                }
            </Slider>
            <div className="card-body h-100 d-flex flex-column" style={{width: "250px"}}>
                <h5 className="card-title">{card?.title}</h5>
                <p className="card-text fs_12" style={{flex: 1}}>{card?.description}</p>
                {
                    card?.buy
                    ?
                    <span className=""><span className=" buy_btn btn btn-commn-bg-primary w-100 mb-3">Buy Now</span></span>
                    :
                    ""
                }
                {
                    card?.redirect
                    ?
                    <Link to={card?.redirectLink} className="btn btn-commn-bg-primary w-100">View More</Link>
                    :
                    ""
                }
                {
                    card?.modal
                    ?
                    <span className="btn btn-commn-bg-primary w-100" onClick={() => setModal({data: card, show: true})}>Quick View</span>
                    :
                    ""
                }
            </div>
        </div>
    </div>
  )
}

export default ProductCard