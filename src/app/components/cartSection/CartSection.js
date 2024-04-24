"use client";
import Image from "next/image";
import styles from "./CartSection.module.scss";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import Link from "next/link";

export default function CartSection() {
  const { cartItem } = useContext(CartContext);

  console.log("Cart ", { cartItem });

  return (
    <>
      <div className={`w-[60%] mx-auto ${styles.CartSection}`}>
        <h2 className="text-center pt-[50px] text-[40px]">Cart</h2>

        {cartItem.length > 0 ? (
          <div className="w-[100%]"> 
            {cartItem.map((i) => (
              <div className="flex gap-[40px] justify-center pt-[50px] pb-[20px]">
                <div className="productimage">
                  <Image src={i.image} height={300} width={300} alt="image" />
                </div>
                <div>
                  <div className="flex gap-[40px] pb-[10px]">
                    <h2 className="w-[150px]">Product Name:</h2>
                    <h2>{i.name}</h2>
                  </div>
                  <div className="flex gap-[40px] pb-[10px]">
                    <h2 className="w-[150px]">Price</h2>
                    <h2>{i.price}</h2>
                  </div>
                  <div className="flex gap-[40px] pb-[10px]">
                    <h2 className="w-[150px]">Quantity</h2>
                    <h2>{i.quantity}</h2>
                  </div>
                  <hr style={{ color: "black" }} />
                  <div className="flex gap-[40px] pt-[10px]">
                    <h2 className="w-[150px]">total</h2>
                    <h2>{i.quantity && i.price && i.price * i.quantity}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // If cart is empty, display a message
          <div className="text-center py-8 text-gray-600">
            <p>Your cart is empty.</p>
          </div>
        )}

        {cartItem.length > 0 ? (
          <div className="pt-[40px] flex justify-center">
            <Link
              href="/checkout"
              className="text-white hover:text-[#ff9f04]  border-[#ff9f04] border  bg-[#ff9f04] hover:bg-white  hover:text-white px-[30px] py-[10px] gap-[10px] mb-[30px] rounded-[6px]"
            >
             Proceed to checkout
            </Link>
          </div>
        ) : (
          // If cart is empty, display a message
          <div className="pt-[40px] flex justify-center">
            <Link
              href="/"
              className="text-white hover:text-[#ff9f04]  border-[#ff9f04] border  bg-[#ff9f04] hover:bg-white  hover:text-white px-[30px] py-[10px] gap-[10px] rounded-[6px]"
            >
              Add Products
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
