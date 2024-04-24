"use client";
import React, { useContext } from "react";
import CartIcon from "@/assets/Cart";
import styles from "./Header.module.scss";
import Image from "next/image";
import { CartContext } from "../context/CartContext";
import Link from "next/link";

export default function Header() {
  const { count } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-10 bg-white">
      <div
        className={` ${styles.headerSection} flex items-center justify-between py-[10px] px-[40px]`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="https://ucarecdn.com/251d618c-90e4-4f35-bac1-f7d76622539b/-/preview/1000x666/"
            width={100}
            height={100}
            alt="image"
          />
          <p className="ml-[-25px] text-[22px] font-[600] text-[#ff9f04]">
            FOOD<span className="text-[#646161]">UZII</span>
          </p>
        </Link>
        <Link
          href="/cart-page"
          title="Cart"
          className="text-white px-[30px] py-[10px] flex gap-[10px] rounded-[6px] border bg-[#ff9f04] "
        >
          Cart {count}
          <CartIcon />
        </Link>
      </div>
    </header>
  );
}
