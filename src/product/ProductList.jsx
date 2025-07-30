import {useEffect, useRef, useState} from "react";
import Product from "./Product.jsx";

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);
    // const loaded = useRef(false);

    function handleLoad() {
        setLoad(true);
    }

    function handleUnload() {
        setLoad(false);
    }

    useEffect(() => {
        console.log("Only once at the first render");
    }, []);

    useEffect(() => {
        if (load) {
            console.log("Loading...")
            fetch('/products.json')
                .then(res => res.json())
                .then(data => setProducts(data))
        } else {
            console.log("Unloading...")
            setProducts([]);
        }
    }, [load]);

    return (
        <>
            <h1>List Product</h1>
            <button onClick={handleLoad}>Load products</button>
            <button onClick={handleUnload}>Unload products</button>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </>
    );
}