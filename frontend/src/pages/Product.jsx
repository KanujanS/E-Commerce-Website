import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  console.log(productId);
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product data */}
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Main Image + Sub Images container */}
        <div className="flex flex-col-reverse sm:flex-row gap-4 sm:basis-1/2">
          {/* Sub Images */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-1.5 lg:gap-4 sm:w-[25%] w-full h-fit border border-white rounded-3xl p-2 shadow-2xl shadow-gray-500">
            {productData.image.map((item, index) => (
              <img onClick={() => setImage(item)} src={item} key={index} className="w-[80px] h-full  rounded-xl cursor-pointer sm:w-full sm:h-auto" alt=""/>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full border border-white rounded-3xl p-4 shadow-2xl shadow-gray-500">
            <img src={image} alt="Main product" className="w-full h-full rounded-2xl"/>
          </div>
        </div>

        {/* Product Information */}
        <div className="sm:basis-1/2">
          <h1 className="font-medium text-2xl mt-2 text-[#654321]">
            {productData.name}
          </h1>

          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="Star Icon" className="w-4" />
            <img src={assets.star_icon} alt="Star Icon" className="w-4" />
            <img src={assets.star_icon} alt="Star Icon" className="w-4" />
            <img src={assets.star_icon} alt="Star Icon" className="w-4" />
            <img src={assets.star_dull_icon} alt="Star Icon" className="w-4" />
            <p className="pl-2 text-[#654321]">(122)</p>
          </div>

          <p className="text-[#654321] mt-5 font-medium text-3xl">{currency} {productData.price}</p>
          <p className="mt-5 text-[#654321] md:w-4/5">{productData.description}</p>

          {/* Size Selector */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border rounded text-[#654321] py-2 px-4 bg-gray-100 cursor-pointer hover:bg-gray-200 ${
                    item === size ? " border-[#654321]" : "border-gray-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={()=>addToCart(productData._id, size)} className="bg-[#654321] rounded-2xl text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer">
            Add To Cart
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-[#654321] mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description & Review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border-2 px-5 py-3 text-sm border-r-1 border-b-0 rounded-tl-2xl hover:bg-gray-100">
            Description
          </b>
          <p className="border px-5 py-3 text-sm border-b-0 rounded-tr-2xl hover:bg-gray-100">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border-2 px-6 py-6 text-sm text-gray-500 border-gray-700 rounded-b-2xl rounded-tr-2xl">
          <p>
            MaxBuy is your one-stop destination for trendsetting fashion and
            timeless essentials. From casual wear to statement styles, we bring
            you quality clothing that blends comfort, confidence, and
            contemporary design.
          </p>
          <p>
            Discover your style with MaxBuy, where fashion meets affordability.
            We offer curated collections for every season and every story,
            helping you look great and feel even better, no matter the occasion.
          </p>
        </div>
      </div>
      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
