import ShopCards from '../molecules/ShopCards';

function CardsView(props) {
    let { products } = props;

    return (
        <ShopCards products={products} />
    );
}

export default CardsView;
