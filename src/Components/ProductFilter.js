import React, { useState } from 'react'
import MultiRangeSlider from "multi-range-slider-react";

const ProductFilter = () => {

    const [minValue, set_minValue] = useState(90);
    const [maxValue, set_maxValue] = useState(130);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    const [minValue2, set_minValue2] = useState(-40);
    const [maxValue2, set_maxValue2] = useState(-20);
    const handleInput2 = (e) => {
        set_minValue2(e.minValue);
        set_maxValue2(e.maxValue);
    };

  return (
    <div className="px-4 product-filter-container"> 
        <div className="d-flex mb-4">
            <i className="fa fa-sliders me-4 h3" />
            <span className="h3">Filters</span>
        </div>
        
        <div className="mb-3">
            <p className="mb-1 feature_title">Bellow Material</p>
            <p className="mb-1">
                <span className="badge me-2 mb-2 px-2 rounded-pill card-text pills_primary">EPDM</span>
                <span className="badge me-2 mb-2 px-2 rounded-pill card-text pills_primary">Nitrile</span>
            </p>
        </div>

        <div className="mb-3">
            <p className="mb-1 feature_title">Pipe Size</p>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">DN 50</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">DN 65</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">DN 80</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">DN 100</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">DN 125</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">DN 150</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">DN 200</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">DN 250</span>
            </div>

        </div>

        <div className="mb-3">
            <p className="mb-1 feature_title">Installation Length</p>
            <p className="mb-1">
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">150 mm</span>
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">200 mm</span>
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">250 mm</span>
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">300 mm</span>
            </p>
        </div>

        <div className="mb-3">
            <p className="mb-1 feature_title">Media</p>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">Air</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">Water</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">Oil</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">Fuels</span>
            </div>
        </div>

        <div className="mb-3">
            <p className="mb-1 feature_title">PN Rating</p>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">PN 10</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">PN 16</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">PN 20</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">PN 25</span>
            </div>
        </div>

        <div className="mb-3">
            <p className="mb-1 feature_title">Max Operating Temperature</p>
            <MultiRangeSlider
                min={90}
                max={130}
                step={1}
                minValue={minValue}
                maxValue={maxValue}
                onInput={e => handleInput(e)}
                ruler={false}
                label={false}
            />
            <p className="text-center">{minValue} — {maxValue}</p>
        </div>

        <div className="mb-3">
            <p className="mb-1 feature_title">Min Operating Temperature</p>
            <MultiRangeSlider
                min={-40}
                max={-20}
                step={1}
                minValue={minValue2}
                maxValue={maxValue2}
                onInput={e => handleInput2(e)}
                ruler={false}
                label={false}
            />
            <p className="text-center">{minValue2}°C — {maxValue2}°C</p>
        </div>

        <div className="mb-3">
            <p className="mb-1 feature_title">Connection type</p>

            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">Rotating Flange</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">Split Flange</span>
            </div>
        </div>

        <div className="mb-3">
            <p className="mb-1 feature_title">Other Assembly Fitting</p>

            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">Tie Rod With Nut</span>
            </div>
            <div className="">
                <input className="me-3 largerCheckbox" name="pipe-size" style={{opacity: 1}} type="checkbox" />
                <span className="">Statube Plate</span>
            </div>
        </div>

        <div className="mb-3">
            <p className="mb-1 feature_title">Axial Movement</p>
            <p className="mb-1">
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">+20/-22 mm</span>
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">+6/-22 mm</span>
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">+9/-16 mm</span>
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">±19 mm</span>
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">±20 mm</span>
            </p>
        </div>

        <div className="mb-3">
            <p className="mb-1 feature_title">Angular Movement</p>
            <p className="mb-1">
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">±10° C</span>
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">±25° C</span>
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">±30° C</span>
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">±45° C</span>
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">±22° C</span>
                <span className="badge me-2 mb-2 px-2 rounded-pill pills_primary">±30° C</span>
            </p>
        </div>
    </div>
  )
}

export default ProductFilter