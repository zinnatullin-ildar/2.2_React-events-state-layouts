import React from "react";
import './main.css';

function ShopCards(props) {
    let { products } = props;
    let id = 0;

    let productsArr = products.map((value) => (
        <div className="store__shop-cards" key={++id}>
            <span className="shop-cards__title">{value.name}</span>
            <span className="shop-cards__color">{value.color}</span>
            <img src={value.img} className="shop-cards__img" alt="" />
            <div className="shop-cards__container">
                <span className="shop-cards__price">${value.price}</span>
                <span className="shop-cards__btn">ADD TO CART</span>
            </div>
        </div>
    ));

    return (
        <div className="store__container">
            {productsArr}
        </div>
    );
}

export default ShopCards;
