import {useEffect, useRef, useState} from "react";
import Product from "./Product.jsx";

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const loaded = useRef(false);

    useEffect(() => {
        if (loaded.current === false) {
            fetch('/products.json')
                .then(res => res.json())
                .then(data => setProducts(data))
                .then(() => loaded.current = true)
        }
    });

    return (
        <>
            <h1>List Product</h1>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </>
    );
}