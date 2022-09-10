import React from "react";
import ShopCards from "./shop_cards/ShopCards";

function CardsView(props) {
    let { products } = props;

    return (
        <ShopCards products={products} />
    );
}

export default CardsView;
