import Reac, { useEffect } from "react";
import ProductsSec1 from "./ProductsSec1";
import ProductsSec2 from "./ProductsSec2";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);
  return (
    <>
      <ProductsSec1 />
      <ProductsSec2 />
    </>
  );
}

export default Products;
