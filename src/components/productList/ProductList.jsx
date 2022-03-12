import "./productList.css";
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="p1-title">Create & inspire. It's lann</h1>
            <p className="pl-desc">
                lann is a creative portfolio that your work has been <br />
                waiting beautiful homes, stunning portfolio styles
                 & a whole lot more inside.
            </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
           <Product key={item.id} img={item.img} link={item.link} /> 
          ))} 
        </div>
    </div>
  ); 
};

export default ProductList;