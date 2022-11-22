import { useState } from "react";
import IconSwitch from '../molecules/IconSwitch';
import CardsView from '../sections/CardsView';
import ListView from '../sections/ListView';
import products from '../data/Data';

function Store() {
    let [state, setState] = useState("module");
    let [icon, setIcon] = useState("view_module");

    let module = () => {
        return <CardsView products={products} />;
    };

    let list = () => {
        return <ListView products={products} />;
    }

    let view = state === "module" ? module() : list();

    const onSwitch = () => {
        let viewIcon = icon === "view_module" ? "view_list" : "view_module";
        let view = state === "module" ? "list" : "module";
        setIcon(icon = viewIcon);
        setState(state = view);
    };

    return (
        <div className="container">
            <div className="store">
                <IconSwitch icon={icon}
                    onSwitch={onSwitch} />
            </div>
            <div className="view__container">
                {view}
            </div>
        </div>
    );
}

export default Store;
