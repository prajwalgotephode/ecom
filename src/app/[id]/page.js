"use client";
import { useContext, useEffect, useState } from "react";
import itemsData from "../../utils/JSON/items.json";
import Header from "../components/header/Header";
import Image from "next/image";
import { CartContext } from "../components/context/CartContext";
import Link from "next/link";

export default function Page({ params }) {
  const { id } = params;
  const [productdetails, setProductDetails] = useState({});

  useEffect(() => {
    const itemDetails = itemsData.filter((item) => item.id == id);
    setProductDetails(itemDetails);
  }, [id]);

  const {
    count,
    setCount,
    cartItem,
    setCartItem,
    addItemToCart,
    removeItemFromCart,
  } = useContext(CartContext);

  return (
    <>
      <Header />
      <div className="itemsDetailCard">
        <h1 className="text-center font-[600] text-[30px]">
          {productdetails?.[0]?.name}
        </h1>
        <div className="p-[60px] flex justify-center flex-wrap gap-[60px] items-center">
          <Image
            src={productdetails?.[0]?.image}
            width={400}
            height={400}
            className="rounded-[6px]"
            alt="image"
          />
          <div className="xl:w-[40%] ">
            <p className="text-[18px]">{productdetails?.[0]?.description}</p>
            <div className="flex justify-between pt-[50px]">
              <span className="text-[18px] font-[500]">
                Rs. {productdetails?.[0]?.price}
              </span>
              <div>
                <span
                  className="text-white hover:text-[#ff9f04]  border-[#ff9f04] border  bg-[#ff9f04] hover:bg-white  hover:text-white py-[5px] px-[20px] cursor-pointer rounded-[6px]"
                  onClick={() => {
                    setCount(count + 1);
                    // setCartItem([...cartItem, ...productdetails])
                    addItemToCart(productdetails);
                  }}
                >
                  Add
                </span>
                <span
                  className="text-white hover:text-[#ff9f04]  border-[#ff9f04] border  bg-[#ff9f04] hover:bg-white  hover:text-white py-[5px] px-[10px] cursor-pointer rounded-[6px] ml-[20px]"
                  onClick={() => {
                    if (count > 0) {
                      removeItemFromCart(productdetails?.[0].id);
                      setCount(count - 1);
                    }
                  }}
                >
                  remove
                </span>
              </div>
            </div>
            <div className="pt-[20px] gap-[20px] flex justify-end">
              <Link
                href="/#products"
                className="text-white hover:text-[#ff9f04]  border-[#ff9f04] border  bg-[#ff9f04] hover:bg-white  hover:text-white py-[5px] px-[10px] cursor-pointer rounded-[6px]"
              >
                Add More Products
              </Link>

              <Link
                href="/cart-page"
                className="text-white hover:text-[#ff9f04]  border-[#ff9f04] border  bg-[#ff9f04] hover:bg-white py-[5px]  hover:text-white px-[10px] cursor-pointer rounded-[6px]"
              >
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
