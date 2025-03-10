import React from "react";
import ProductItem from "../ProductItem";
import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";
import rabipose from '../../../assets/images/products/rabipose.jpg'
import budalecs from '../../../assets/images/products/budalecs.jpeg'
import arocef from '../../../assets/images/products/arocef.jpeg'
import { products } from "@/app/utils/rawdata";


const ProductDetails = async ({ params }: any) => {


  const productDetails = products.find((item) => item.id === Number(params.id));

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <ProductItem productDetails={productDetails} />
    </>
  );
};

export default ProductDetails;
