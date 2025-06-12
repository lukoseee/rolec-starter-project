function ProductList()
{

    type ProductProps = {
            children: React.ReactNode;
            className?: string;
            path?: string;
        };
    
    const Product = ({children, className="" , path=""} : ProductProps) => (
        <div className=" grid justify-center text-center bg-white w-65 h-75 rounded-b-lg">
                <img src = {path} className="block w-full h-auto"></img>
                <h1 className="font-extrabold font-xl">{children}</h1>
        </div>
    )

    return(

        <div className="flex flex-wrap ml-45 mr-45 justify-center gap-4">
            <Product path="/assets/product-images/evo.png">EVO</Product>
            <Product path="/assets/product-images/zura.png">ZURA</Product>
            <Product path="/assets/product-images/wallpod.png">WALLPOD</Product>
            <Product path="/assets/product-images/ultracharge_240.png">ULTRACHARGE 240</Product>
            <Product path="/assets/product-images/ultracharge_160.png">ULTRACHARGE 160</Product>
            <Product path="/assets/product-images/ultracharge_80.png">ULTRACHARGE 80</Product>
            <Product path="/assets/product-images/tap_and_charge.png">TAP AND CHARGE</Product>
            <Product path="/assets/product-images/securicharge.png">SECURICHARGE</Product>
            <Product path="/assets/product-images/qubev_smart.png">QUBEV SMART</Product>
            <Product path="/assets/product-images/quantum.png">QUANTUM</Product>
            <Product path="/assets/product-images/perific_fuse.png">PERIFIC FUSE</Product>
            <Product path="/assets/product-images/ev_consumer_units.png">EV CONSUMER UNITS</Product>
            <Product path="/assets/product-images/chargecheck.png">CHARGECHECK</Product>
            <Product path="/assets/product-images/basic_charge.png">BASIC CHARGE</Product>
            <Product path="/assets/product-images/autocharge.png">AUTOCHARGE</Product>
        </div>
    );



}

export default ProductList