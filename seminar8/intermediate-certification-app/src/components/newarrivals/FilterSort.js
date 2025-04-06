import React, {useState} from 'react';
import '../../styles/filterSort.sass'
import {useDispatch} from "react-redux";
import {filterBySize} from "../../redux/productSlice";

const FilterSort = () => {
    const dispatch = useDispatch();
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleSizeChange = (size) => {
        const newSizes = selectedSizes.includes(size)
            ? selectedSizes.filter(s => s !== size)
            : [...selectedSizes, size];

        setSelectedSizes(newSizes);
        dispatch(filterBySize(newSizes));
    }

    const sizes = ['XL', 'L', 'M', 'S', 'XS']

    return (
        <div className="filter-sort center">
            <details className="filter">
                <summary className="filter__summary">
                    <span className="filter__heading filter__hidden">FILTER</span>
                    <svg
                        width="15.000000"
                        height="10.000000"
                        viewBox="0 0 15 10"
                        fill="none"
                        // xmlns="http://www.w3.org/2000/svg"
                        // xmlns:"http://www.w3.org/1999/xlink"
                    >
                        <defs/>
                        <path
                            id="Vector"
                            d="M0.83 10L4.16 10C4.62 10 5 9.62 5 9.16C5 8.7 4.62 8.33 4.16 8.33L0.83 8.33C0.37 8.33 0 8.7 0 9.16C0 9.62 0.37 10 0.83 10ZM0 0.83C0 1.29 0.37 1.66 0.83 1.66L14.16 1.66C14.62 1.66 15 1.29 15 0.83C15 0.37 14.62 0 14.16 0L0.83 0C0.37 0 0 0.37 0 0.83ZM0.83 5.83L9.16 5.83C9.62 5.83 10 5.45 10 5C10 4.54 9.62 4.16 9.16 4.16L0.83 4.16C0.37 4.16 0 4.54 0 5C0 5.45 0.37 5.83 0.83 5.83Z"
                            fill="#000000"
                            fill-opacity="1.000000"
                            fill-rule="nonzero"
                        />
                    </svg>
                </summary>
                <div className="filter__content">
                    <details className="filter__item" open>
                        <summary className="filter__head">CATEGORY</summary>
                        <div className="filter__link-box">
                            <a href="" className="filter__link">Accessories</a>
                            <a href="" className="filter__link">Bags</a>
                            <a href="" className="filter__link">Denim</a>
                            <a href="" className="filter__link">Hoodies & Sweatshirts</a>
                            <a href="" className="filter__link">Jackets & Coats</a>
                            <a href="" className="filter__link">Polos</a>
                            <a href="" className="filter__link">Shirts</a>
                            <a href="" className="filter__link">Shoes</a>
                            <a href="" className="filter__link">Sweaters & Knits</a>
                            <a href="" className="filter__link">T-Shirts</a>
                            <a href="" className="filter__link">Tanks</a>
                        </div>
                    </details>
                    <details className="filter__item">
                        <summary className="filter__head">BRAND</summary>
                        <div className="filter__link-box">
                            <a href="" className="filter__link">Accessories</a>
                            <a href="" className="filter__link">Bags</a>
                            <a href="" className="filter__link">Denim</a>
                            <a href="" className="filter__link">Hoodies & Sweatshirts</a>
                            <a href="" className="filter__link">Jackets & Coats</a>
                            <a href="" className="filter__link">Polos</a>
                            <a href="" className="filter__link">Shirts</a>
                            <a href="" className="filter__link">Shoes</a>
                            <a href="" className="filter__link">Sweaters & Knits</a>
                            <a href="" className="filter__link">T-Shirts</a>
                            <a href="" className="filter__link">Tanks</a>
                        </div>
                    </details>
                    <details className="filter__item">
                        <summary className="filter__head">DESIGNER</summary>
                        <div className="filter__link-box">
                            <a href="" className="filter__link">Accessories</a>
                            <a href="" className="filter__link">Bags</a>
                            <a href="" className="filter__link">Denim</a>
                            <a href="" className="filter__link">Hoodies & Sweatshirts</a>
                            <a href="" className="filter__link">Jackets & Coats</a>
                            <a href="" className="filter__link">Polos</a>
                            <a href="" className="filter__link">Shirts</a>
                            <a href="" className="filter__link">Shoes</a>
                            <a href="" className="filter__link">Sweaters & Knits</a>
                            <a href="" className="filter__link">T-Shirts</a>
                            <a href="" className="filter__link">Tanks</a>
                        </div>
                    </details>
                </div>
            </details>
            <div className="sort">
                <details className="sort__details">
                    <summary className="sort__summary">
                        <span className="sort__heading">TRANDING NOW</span>
                        <svg width="11" height="5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.002 5.002a.714.714 0 0 1-.457-.164L.258 1.266a.715.715 0 0 1 .915-1.1l3.83 3.2L8.831.28a.714.714 0 0 1 1.007.107.714.714 0 0 1-.1 1.043L5.452 4.88a.714.714 0 0 1-.45.122Z"
                                fill="#6F6E6E"
                            />
                        </svg>
                    </summary>
                </details>
                <details className="sort__details">
                    <summary className="sort__summary">
                        <span className="sort__heading">SIZE</span>
                        <svg width="11" height="5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.002 5.002a.714.714 0 0 1-.457-.164L.258 1.266a.715.715 0 0 1 .915-1.1l3.83 3.2L8.831.28a.714.714 0 0 1 1.007.107.714.714 0 0 1-.1 1.043L5.452 4.88a.714.714 0 0 1-.45.122Z"
                                fill="#6F6E6E"
                            />
                        </svg>
                    </summary>
                    <div className="sort__box">
                        {sizes.map(size => (
                            <div className="sort__check" key={size}>
                                <input
                                    id={`sort__check_${size}`}
                                    type="checkbox"
                                    checked={selectedSizes.includes(size)}
                                    onChange={() => handleSizeChange(size)}
                                />
                                <label htmlFor={`sort__check_${size}`}>{size}</label>
                            </div>
                        ))}
                        {/*<div className="sort__check">*/}
                        {/*    <input id="sort__check2" type="checkbox"/>*/}
                        {/*    <label htmlFor="sort__check2">S</label>*/}
                        {/*</div>*/}
                        {/*<div className="sort__check">*/}
                        {/*    <input id="sort__check3" type="checkbox"/>*/}
                        {/*    <label htmlFor="sort__check3">M</label>*/}
                        {/*</div>*/}
                        {/*<div className="sort__check">*/}
                        {/*    <input id="sort__check4" type="checkbox"/>*/}
                        {/*    <label htmlFor="sort__check4">L</label>*/}
                        {/*</div>*/}
                    </div>
                </details>
                <details className="sort__details">
                    <summary className="sort__summary">
                        <span className="sort__heading">PRICE</span>
                        <svg width="11" height="5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.002 5.002a.714.714 0 0 1-.457-.164L.258 1.266a.715.715 0 0 1 .915-1.1l3.83 3.2L8.831.28a.714.714 0 0 1 1.007.107.714.714 0 0 1-.1 1.043L5.452 4.88a.714.714 0 0 1-.45.122Z"
                                fill="#6F6E6E"
                            />
                        </svg>
                    </summary>
                </details>
            </div>
        </div>
    );
};

export default FilterSort;
