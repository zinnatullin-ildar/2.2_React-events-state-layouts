import React from "react";
import ShopItem from "./shop_item/ShopItem";

function ListView(props) {
    let { products } = props;

    return (
        <ShopItem products={products} />
    );
}

export default ListView;
