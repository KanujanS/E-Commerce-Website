import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { IoTrashBinOutline } from "react-icons/io5";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t border-[#654321] pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      <div className="border-b-2 border-[#654321]">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div key={index} className="py-4 border-t-2 border-[#654321] text-gray-700 flex items-center justify-between gap-4">
              {/* Left: Image + Product Info */}
              <div className="flex items-start gap-4 sm:gap-6 flex-1">
                <img className="w-16 sm:w-20 rounded" src={productData.image[0]} alt="Product" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <p className="text-sm">{currency} {productData.price}</p>
                    <p className="px-2 border border-[#654321] bg-slate-50 rounded text-sm">{item.size}</p>
                    <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className="border border-[#654321] w-12 px-2 py-1 rounded bg-slate-50 text-sm" />
                  </div>
                </div>
              </div>

              {/* Right: Trash Icon */}
              <div className="text-lg sm:text-2xl text-[#654321] cursor-pointer">
                <IoTrashBinOutline onClick={()=>updateQuantity(item._id, item.size, 0)}/>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-10">
        <div className="w-full sm:w-[480px]">
          <CartTotal/>
          <div className="w-full text-end">
            <button onClick={()=>navigate('/place-order')} className="bg-[#654321] text-white text-sm my-8 py-3 px-8 rounded-2xl border border-none shadow-2xl shadow-gray-600 cursor-pointer">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
