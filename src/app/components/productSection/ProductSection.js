"use client";
import React, { useContext } from "react";
import Image from "next/image";
import styles from "./ProductSection.module.scss";
import itemsData from "../../../utils/JSON/items.json";
import Link from "next/link";
import { CartContext } from "../context/CartContext";

export default function ProductSection() {
  return (
    <section className="my-[40px]" id="products">
      <h1 className="text-[28px] lg:text-[40px] text-center mt-[40px] mb-[60px]">
        Our Top Seller's
      </h1>
      <div className="flex flex-wrap justify-center gap-[60px]">
        {itemsData.map((item) => (
          <Link
            href={`/${item.id}`}
            key={item.id}
            className={`${styles.productCard} cursor-pointer`}
          >
            <Image src={item.image} height={300} width={300} alt={item.name} />
            <h2 className="text-center pt-[10px] text-[18px] font-[500]">
              {item.name}
            </h2>

            <div className="flex justify-between p-[20px]">
              <span className="text-green">Rs. {item.price}</span>
              <span className="text-white hover:text-[#ff9f04]  border-[#ff9f04] border  bg-[#ff9f04] hover:bg-white  hover:text-white py-[5px] px-[10px] cursor-pointer rounded-[6px]">
                View Details
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
