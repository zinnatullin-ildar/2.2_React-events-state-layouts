import ShopItem from '../molecules/ShopItem';

function ListView(props) {
    let { products } = props;

    return (
        <ShopItem products={products} />
    );
}

export default ListView;
